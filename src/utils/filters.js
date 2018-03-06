
//保留小数点后两位
export function numFix(num) {
    var val = parseFloat(num)
    if (typeof val != 'number' ) {
      console.error('必须是number数据类型')
      return false
    } else {
      return val.toFixed(2)
    }
  }


/**
 * 作用：将毫秒时间格式化
 * /
 * @param  {[type]} time    [传入的时间毫秒数]
 * @param  {[type]} cFormat [需要的时间格式：{y}-{m}-{d} {h}:{i}:{s} 或 {y}-{m}-{d} {h}:{i} 等等]
 * @return {[type]}         [description]
 */
let formatData = (time, cFormat) => {
	if (arguments.length === 0) {
        return null
    }

    if ((time + '').length === 10) {
        time = +time * 1000
    }

    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof time === 'object') {
        date = time
    } else {
        date = new Date(parseInt(time))
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
        value = '0' + value
        }
        return value || 0
    })
    return time_str
}


export {formatData}