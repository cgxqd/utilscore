import { isObject } from "../_/matche";
import { trim } from "./string";
import { encode, decode } from "../_/uri-component";
import { URL2 } from "../typings";

/**
 * url 参数字符串反序列化
 * @param url
 */
export function urlSearchParams(url: string): Record<string, string> {
  const result: Record<string, string> = {};
  const search = /(?=\??)[^\\?]*$/g.exec(url)?.[0] ?? "";
  search.split("&").forEach(item => {
    const [key, value = ""] = item.split("=");
    if (key) result[key] = encode(value);
  });
  return result;
}

/**
 * url 参数序列化
 * @param value
 */
export const urlSearchStringify = (params: Record<string, any>) =>
  isObject(params)
    ? Object.keys(params)
        .map(key => `${key}=${decode(params[key])}`)
        .join("&")
    : "";

/**
 * 返回网址的相关信息，模拟了 浏览器的 new URL(url)
 * @param {string} url 网址
 */
export const url = (url: string): URL2 => {
  const isURLRegExp =
    /^((https?:)\/\/(([^:/?#]*)(?::([0-9]+))?))([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/;
  const usvURL = encodeURI(trim(url));
  try {
    const [
      href,
      origin,
      protocol,
      host,
      hostName,
      port = "",
      pathname = "/",
      search,
      hash,
    ] = isURLRegExp.exec(usvURL) as any[];
    return {
      href,
      origin,
      protocol,
      host,
      hostName,
      port,
      pathname,
      search,
      hash,
    };
  } catch (err) {
    throw new Error(
      `Raises a SYNTAX ERROR exception as 'about:blank/${url}' is not valid`
    );
  }
};
