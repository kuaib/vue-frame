// import { cartAdd,cartUpdate,getCartList,cartDel } from '@/api/eca'
const cart = {
	state: {
		cartLists: [],   // 购物车商品列表
		cartFlag: 1,     // 接口请求成功，但是返回的码不是 000 的时候会用到(1:返回000)
	},
	getters: {
		cartListsLength: (state) => {
			let cart = state.cartLists;
			let quantity = 0;
			Object.keys(cart).forEach((item,idx) => {
				quantity += parseInt(cart[item].quantity)
			})
			if(quantity) {
				return quantity;
			} else {
				return 0;
			}
		}
	},
	mutations: {
		SET_FLAG: (state,flag) => {
			state.cartFlag = flag
		},
		// 初始化购物车列表
		SET_CARTLIST: (state,cartLists) => {
			// actions已经commit，所以cartLists就是actions中传入的参数
			let cart = {}
			cartLists.forEach((item,idx) => {
				cart[item.productsId] = item;
			})
			state.cartLists = cart;  // state.cartLists和页面中的allList是一个对象了，一个变化，另一个也会受影响
		},
		// 加入购物车
		ADD_CART: (state,prodIfo) => {
			if (state.cartLists[prodIfo.productsId]) {
				state.cartLists[prodIfo.productsId].quantity += parseInt(prodIfo.quantity);
			} else {
				// 设置中间变量是为了最后一步赋值，不然不会更新getters的状态
				let cart = {...state.cartLists};
				cart[prodIfo.productsId] = {};
				cart[prodIfo.productsId]['num'] = prodIfo.quantity;
				cart[prodIfo.productsId]['productsId'] = prodIfo.productsId;
				state.cartLists = {...cart} // ！！！！
			}
		},
		// 更改购物车
		UPDATE_CART: (state,prodIfo) => {
			// if(prodIfo.quantity <= 0) {
				state.cartLists[prodIfo.productsId].quantity = prodIfo.quantity;
			// }
		},
		// 删除购物车
		DEL_CART: (state,prodIfo) => {
			let cart = {...state.cartLists}
			Object.keys(cart).forEach((item,idx) => {
				prodIfo.prodIds.forEach(id => {
					if (id.toString() == item.toString()) {
						delete cart[item]
					}
				})
			})
			state.cartLists = {...cart} // ！！！！
		}
	},
	actions: {
		// 加入购物车
		cartAdd ({commit},prodIfo) {
			return new Promise((resolve,reject) => {
				cartAdd(prodIfo.productsId,prodIfo.quantity).then(res => {
					if(res.data.code != '000'){
						this.$vux.toast.text(res.data.msg)
					} else {
						commit('ADD_CART',prodIfo)
						this.$vux.toast.text('加入购物车成功')
					}
					resolve()
				}).catch(rej => {
					reject(rej)
				})
			})
		},

		// 更改购物车
		cartUpdate ({commit},prodIfo) {
			return new Promise((resolve,reject) => {
				cartUpdate(prodIfo.productsId,prodIfo.quantity).then(res => {
					if(res.data.code != '000'){
						this.$vux.toast.text(res.data.msg)
						commit('SET_FLAG',2);
					} else if(res.data.code == '004'){
						this.$router.push({name:'login'})
					}else {
						commit('UPDATE_CART',prodIfo)
					}
					resolve()
				}).catch(rej => {
					reject(rej)
				})
			})
			
		},

		// 获取购物车列表
		// getCartList ({commit}) {
		// 	return new Promise((resolve,reject) => {
		// 		getCartList().then(res => {
		// 			if (res.data.code == '000') {
		// 				commit('SET_CARTLIST',res.data.data.rows[0].saleOrderItemList)  // 提交的是mutations中的变量
		// 			} else {
		// 				this.$vux.toast.text(res.data.msg)
		// 			}
		// 			resolve()
		// 		}).catch(rej => {
		// 			reject(rej)
		// 		})
		// 	})
		// },

		// 删除购物车商品
		cartDel ({commit},prodIfo) {
			return new Promise((resolve,reject) => {
				cartDel(prodIfo.ids).then(res => {
					if (res.data.code != '000') {
						this.$vux.toast.text(res.data.msg)
						commit('SET_FLAG',2);
					} else {
						commit('DEL_CART',prodIfo)
					}
					resolve()
				})
			}).catch(rej => {
				reject(rej)
			})
		}
	}
}

export default cart