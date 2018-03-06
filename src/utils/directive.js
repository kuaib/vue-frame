/**
 * 自定义指令
 */

// 自动获取焦点
let focus = {
	inserted: (el) => {
		el.focus();
	}
}

export {
	focus
}