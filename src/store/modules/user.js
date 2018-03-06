// import { login, loginOut } from '@/api/login'
import {getCookie, setCookie, removeCookie } from '@/utils/cookieAct'
import router from '@/router'
const user = {
    state: {
        username: '',
        token: getCookie('token'),
        roles: [],
        logFlag: 1   // 检测接口返回的是不是000
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USERNAME: (state, username) => {
            state.username = username
        },
        SET_LOGFLAG: (state, logFlag) => {
            state.logFlag = logFlag
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },

    actions: {
        // 用户名登录（rootState：根state)
        logIn({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo.username, userInfo.password).then(response => {
                    let res = response.data.data;
                    if (response.data.code == '000') {
                        setCookie('username',userInfo.username);
                        setCookie('password',userInfo.password);
                        setCookie('userId',res.id);
                        setCookie('token','1');
                        commit('SET_TOKEN', '1');  // 说明登录成功
                        let reqRole = '';
                        if (res.type == 0) {
                            reqRole = ['partner']
                        } else if (res.type == 1) {
                            reqRole = ['ECA']
                        }
                        setCookie('roles',reqRole[0]);
                        commit('SET_ROLES', reqRole);
                    } else if (response.data.code == '003') {
                        commit('SET_LOGFLAG',2);
                        vue.$vux.toast.text(response.data.msg);
                        setTimeout(() => {
                            vue.$router.push({name:'forgetPwd',query:{phone:userInfo.username}})
                        },2000)
                    } else {
                        commit('SET_LOGFLAG',2);
                        vue.$vux.toast.text(response.data.msg);
                    }
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 退出登录
        logOut({commit, state}) {
            return new Promise((resolve, reject) => {
                loginOut().then((response) => {
                    if (response.data.code == '000') {
                        commit('SET_TOKEN', '');
                        removeCookie('token')
                        removeCookie('password');
                        removeCookie('userId');
                    } else {
                        commit('SET_LOGFLAG',2);
                        vue.$vux.toast.text(response.data.msg)
                    }
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user
