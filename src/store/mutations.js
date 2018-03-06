export default {

    // 给state中的变量赋值(通用方法)
    SET_STATE: (state,{itemName,itemVal}) => {
        state[itemName] = itemVal
    },

    // 保存列表，（传入分页时还可记录当前分页大小）
    SET_ALLADDRESS: (state, addreslist, page) => {
        if (addreslist.length != 0) {
            state.allItems = [...addreslist]
        } else {
            state.allItems = [];
        }
        // 是否需要分页
        if (page) {
            state.page = page;
        }
    },
    // 删除一条收获地址
    DEL_ADDRESS: (state,index) => {
        state.allItems.splice(index,1)
    },
    // 编辑一条收获地址
    EDIT_ADDRESS: (state,index,addItem) => {
        state.allItems.splice(index,1,addItem)
    },
    // 设置默认地址
    DEFAULT_ADDRESS: (state,index) => {
        state.allItems[index].isDefault = 1
    },
    // 新增一条地址
    ADD_ADDRESS: (state,addObj) => {

    },
    // 临时存储新增地址页面数据
    TEMP_ADDSTORE: (state,tempObj) => {
        state.addressTemp.linkName = tempObj.linkName;
        state.addressTemp.phone = tempObj.phone;
        state.addressTemp.address = tempObj.address;
        state.addressTemp.isDefault = tempObj.isDefault;
    }

}
  