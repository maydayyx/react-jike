//用户相关的状态管理
import {createSlice} from '@reduxjs/toolkit'
import {$f} from '@/utils/index.js'

const userStore = createSlice({
    name:'user',
    initialState:{
        token:''
    },
    reducers:{
        setToken(state,action){
            state.token = action.payload
        }
    }

})


//解构出actionCreater
const {setToken} = userStore.actions

//获取reducer函数
const userReducer = userStore.reducer

//异布方法
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
       //发请求
        const res = await $f.post('/authorizations',loginForm)
        //提交同步action
        dispatch(setToken(res.data.token))
    }
}


export {setToken,fetchLogin}

export default userReducer