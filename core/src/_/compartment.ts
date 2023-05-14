import { guid } from "../modules/string";

type CreateContextEval = () => {
  remove: () => void;
  run: (
    src: string,
    scopes: Record<any, any>,
    options?: { type?: "module" | "script" | "AsyncFunction" }
  ) => Promise<unknown>;
};

export class Compartment {
  public scopes;
  public runningEvalContext!: ReturnType<CreateContextEval>;
  constructor(scopes = {}) {
    this.scopes = scopes;
  }
  destroy() {
    if (this.runningEvalContext) {
      this.runningEvalContext.remove();
    }
    Object.freeze(this);
  }
  evaluate(jsCode: string, options = {}) {
    if (this.runningEvalContext) {
      this.runningEvalContext.remove();
    }
    this.runningEvalContext = createContextEval();
    return this.runningEvalContext.run(jsCode, this.scopes, options);
  }
}

/**
 * 创建 iframe 页面内容
 * @param origin
 * @param senderId
 * @param receiverId
 */
const createSrcDoc = ({
  origin,
  senderId,
  receiverId,
  type = "script",
}: any) => {
  // script does not require <script> because just use eval on contextWindow
  if (type === "script") {
    return `<!doctype html>
  <html lang="en">
  <body></body>
  </html>`;
  }
  return `<!doctype html>
  <html lang="en">
  <body>
  <script>
  const origin = "${origin}";
  const senderId = "${senderId}";
  const receiverId = "${receiverId}";
  const handleMessage = async (event) => {
    if (event.source !== window.parent) {
      return;
    }
    if (event.origin !== origin) {
      return;
    }
    const { id, src } = event.data || {};
    if (id !== receiverId) {
      return;
    }
    try {
      const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      ${(() => {
        if (type === "module") {
          // module can not get result
          return (
            "await import(`data:text/javascript;charset=utf-8, ${encodeURIComponent(src)}`);" +
            "window.parent.postMessage({ id: senderId, result: undefined }, origin);"
          );
        } else if (type === "AsyncFunction") {
          // new AsyncFunction cano not get result
          return (
            "await new AsyncFunction(src)();" +
            "window.parent.postMessage({ id: senderId, result: undefined }, origin);"
          );
        } else {
          return (
            "const result = eval(src);" +
            "window.parent.postMessage({ id: senderId, result }, origin);"
          );
        }
      })()};
    } catch (error) {
      window.parent.postMessage({ id: senderId, error: {message:error.message} }, origin);
    }
    window.removeEventListener("message", handleMessage);
  };
  window.addEventListener("message", handleMessage);
  window.parent.postMessage({ id: senderId, ready: true }, origin);
  </script>
  </body>
  </html>`;
};

export const createContextEval: CreateContextEval = () => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("style", "display: none;");
  const senderId = guid();
  const receiverId = guid();
  return {
    remove: () => {
      document.body.removeChild(iframe);
    },
    /**
     * @param src
     * @param scopes
     * @param options
     */
    run: (src, scopes = {}, options = {}) => {
      return new Promise((resolve, reject) => {
        const handleMessage = (event: WindowEventMap["message"]) => {
          if (event.source !== iframe.contentWindow) {
            return;
          }
          const { id, result, error, ready } = event.data || {};
          if (id !== senderId) {
            return;
          }
          if (ready) {
            iframe.contentWindow?.postMessage({ id: receiverId, src }, "*");
            return;
          }
          if (error) {
            reject(new Error(error.message));
          } else {
            resolve(result);
          }
          window.removeEventListener("message", handleMessage);
        };
        window.addEventListener("message", handleMessage);
        const executionType = options.type ? options.type : "script";
        iframe.srcdoc = createSrcDoc({
          origin: window.location.origin,
          senderId,
          receiverId,
          type: executionType,
        });
        document.body.appendChild(iframe);
        const iframeWindow = iframe.contentWindow as Window;
        Object.keys(scopes).forEach(function (key) {
          iframeWindow[key as any] = scopes[key];
        });
        if (executionType === "script") {
          try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            resolve(iframeWindow.eval(src));
          } catch (error) {
            reject(error);
          }
        }
      });
    },
  };
};
