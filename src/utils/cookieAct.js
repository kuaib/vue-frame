/**
 * 参数说明：
 * cookieName: 设置cookie名称
 * time：cookie失效时间
 * objFlag：设置cookie值是否是对象或数组，在本地存储中的该参数也是同样适用
 * 
 */
import Cookies from 'js-cookie'

export function getCookie(cookieName,objFlag) {
	if (objFlag) {
		return Cookies.getJSON(cookieName) // 获取的是引用数据类型，不需要转换
	}
  	return Cookies.get(cookieName)
}

export function setCookie(cookieName,cookieVal,time) {
	if (time) {
		return Cookies.set(cookieName, cookieVal, { expires: time });
	}
  	return Cookies.set(cookieName, cookieVal)
}

export function removeCookie(cookieName) {
  return Cookies.remove(cookieName)
}

//----------------------- localstorage -------------------------//
// 设置本地存储
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

// 获取本地存储
export const getStore = (name,objFlag) => {
    if (!name) return;
    if (objFlag) {
    	return JSON.parse(window.localStorage.getItem(name))
    }
    return window.localStorage.getItem(name);
}

// 删除本地存储
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}
