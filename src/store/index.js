import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './modules/user'
import cart from './modules/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		user,
		cart
	},
	getters,
	mutations,
	actions,
	state: {
		allItems: [],		// 列表集合（通用列表存储：比如地址列表集合、商品列表集合
	}
})

export default store