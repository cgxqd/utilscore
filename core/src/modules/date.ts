import { toString } from "../_/convert";

/**
 * 时间格式化
 * @param value 时间
 * @param format 格式
 */
export const formatTime = (value: any, format: string) => {
  const nowDate = new Date(value);
  const weeks = ["日", "一", "二", "三", "四", "五", "六"];
  const time = new Date(+nowDate + 8 * 3600 * 1000)
    .toISOString()
    .substr(0, 19)
    .replace(/[a-z]/i, " ");
  const [_, YYYY, MM, DD, hh, mm, ss] =
    /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/g.exec(time) as any[];
  const filterTime = (type: any, _: any) => type.slice(0, _.length);
  return format
    .replace(/(Y{1,4})/g, $1 => filterTime(YYYY, $1))
    .replace(/(M{1,2})/g, $1 => filterTime(MM, $1))
    .replace(/(D{1,2})/g, $1 => filterTime(DD, $1))
    .replace(/(h{1,2})/g, $1 => filterTime(hh, $1))
    .replace(/(m{1,2})/g, $1 => filterTime(mm, $1))
    .replace(/(s{1,2})/g, $1 => filterTime(ss, $1))
    .replace(/(W{1})/g, $1 => weeks[nowDate.getDay()])
    .replace(/(Q{1})/g, $1 =>
      toString(Math.floor((nowDate.getMonth() + 3) / 3))
    );
};

/**
 * 将时间戳转为 xx小时xx分钟xx秒 例如1h0m10s
 * @param value 时间戳
 */
export const formatHMS = (value: number): string => {
  let str = "";
  if (value > 3600 * 24) {
    str =
      Math.floor(value / 3600 / 24) +
      "d" +
      Math.floor((value / 3600) % 24) +
      "h" +
      Math.floor((value % 3600) / 60) +
      "m" +
      (value % 60) +
      "s";
  } else if (value > 3600) {
    str =
      Math.floor(value / 3600) +
      "h" +
      Math.floor((value % 3600) / 60) +
      "m" +
      (value % 60) +
      "s";
  } else if (value > 60) {
    str = Math.floor(value / 60) + "m" + (value % 60) + "s";
  } else {
    str = (value % 60) + "s";
  }
  return str;
};

/**
 * 获取时间戳 (秒)
 * @param value
 */
export const unix = (value?: number): number => {
  if (value === void 0) return unix(Date.now());
  return Math.floor(new Date(value).getTime() / 1000);
};

/**
 * 倒计时
 * @param value 时间戳
 */
export const countDown = (value: number): string => {
  const time = unix(value) - unix();
  return formatHMS(time);
};
