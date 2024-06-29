//用户相关的状态管理
import {createSlice} from '@reduxjs/toolkit'
import {$f} from '@/utils/index.js'
import {changeToken, getToken, removeToken} from "@/utils/index.js";
import {loginAPI,userInfoAPI} from '@/apis/user.js'

const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            changeToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state) {
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }

})


//解构出actionCreater
const {setToken, setUserInfo,clearUserInfo} = userStore.actions

//获取reducer函数
const userReducer = userStore.reducer

//异布方法
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        //发请求
        const res = await loginAPI(loginForm)
        //提交同步action
        dispatch(setToken(res.data.token))
    }
}

//获取用户信息
const fetchUseInfo = () => {
    return async (dispatch) => {
        //发请求
        const res = await userInfoAPI()
        dispatch(setUserInfo(res.data))
    }
}


export {setToken, fetchLogin, fetchUseInfo,clearUserInfo}

export default userReducer