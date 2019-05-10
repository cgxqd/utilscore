
/**
 * 深度克隆
 * @param {*} obj 
 */
export const deepClone = (obj) => {
    if(null === obj){
        return obj;
    }
    if(obj instanceof Array){
        return obj.map(row => deepClone(row));
    }
    if(obj instanceof Object){
        let ret = {};
        Object.keys(obj).forEach(key =>{
            if(obj[key] instanceof Date){
                ret[key] = new Date(obj[key].getTime());
            } else {
                ret[key] = deepClone(obj[key]);
            }
        });
        return ret;
    }
    return obj;
};


/**
 * 返回按属性(props)和顺序(orders)排序的对象数组。
 * @param {*} arr 
 * @param {*} props 
 * @param {*} orders 
 */
export const orderBy = (arr, props, orders) => {
    return [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );
}
  