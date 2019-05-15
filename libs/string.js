/**
 * 使用 * 遮蔽字符串
 * @param {string} cc 
 * @param {number} num 
 * @param {string} mask 
 * @example utilscore.mask('45444a8wef8',3,'*') // => "********ef8"
 */
export const mask = (cc, num = 4, mask = '*') =>('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);

/**
 * 生成一个随机的十六进制颜色代码。
 */
export const randomHexColorCode = () => {
    let n = ((Math.random() * 0xfffff) | 0).toString(16);
    return '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n);
  };