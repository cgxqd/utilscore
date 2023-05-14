import loadjs from "@cgxqd/loadjs";
import { queryVar } from "./functional";

/**
 * file、blob 转 DateURL
 * @param stream
 */
export const blobToDataURL = (stream: Blob | File): Promise<any> => {
  return new Promise((succ, fail) => {
    const reader = new FileReader();
    reader.readAsDataURL(stream);
    reader.onload = () => {
      succ(reader.result);
    };
    reader.onerror = err => {
      fail(err);
    };
  });
};

/**
 * dataURL 转为 Blob 格式
 * @param {String} dataURL
 * @return {Blob}
 */
export const dataURLtoBlob = (dataURL: string): Blob => {
  const arr = dataURL.split(",") || "";
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

/**
 * 将图片的 url 转为 base64 格式
 * @param {string} url
 * @returns {Promise<any>}
 */
export const getImgToBase64 = (url: string): Promise<any> => {
  return new Promise((succ, fail) => {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
      canvas.height = img.height;
      canvas.width = img.width;
      ctx?.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/jpg");
      succ(dataURL);
    };
    img.onerror = err => fail(err);
    img.src = url;
  });
};

/**
 * 将图片的 url 转为 Blob 格式
 * @param {string} url
 * @returns {Promise<Blob>}
 */
export const getImgToBlob = async (url: string): Promise<Blob> => {
  const dataURL = await getImgToBase64(url);
  return dataURLtoBlob(dataURL);
};

/**
 * 根据内容下载文件
 * @param {string} fileName 文件名
 * @param {string} content 文件内容
 * @param {string} type 文件类型
 */
export const downloadContent = (
  fileName: string,
  content: string,
  type = "text/plain"
) => {
  const el = document.createElement("a");
  const blob = new Blob([content], { type });
  el.href = URL.createObjectURL(blob);
  el.download = fileName;
  el.addEventListener("click", e => e.stopImmediatePropagation());
  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
};

/**
 * 将文本数据放置在剪贴板上
 * @param {String} value
 */
export const setClipboardData = (value: string) => {
  const aux = document.createElement("input");
  aux.setAttribute("value", value);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
};

/**
 * 动态引入
 * @param path 资源地址
 * @param bundleId 资源的ID
 * @param cb 请求资源成功后的回调
 * @returns
 */
export const dynamicImport = <T>(
  path: string,
  bundleId: string,
  cb?: () => any
): Promise<T> => {
  return new Promise((resolve, reject) => {
    const Loaded = cb ? cb : () => window[bundleId as any];
    if (Loaded()) return resolve(Loaded());
    if (!loadjs.isDefined(bundleId)) loadjs(path, bundleId);
    loadjs.ready(bundleId, {
      success: () => resolve(queryVar<T>(Loaded, 100)),
      error: depsNotFound => reject(depsNotFound),
    });
  });
};
