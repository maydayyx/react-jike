//高阶组件

import {getToken} from "@/utils/index.js";
import {Navigate} from "react-router-dom";

export function AuthRoute({ children}) {
    const token = getToken()
    if(token){
        return children
    }else{
        return <Navigate to="/login" replace />
    }
}