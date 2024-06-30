//文章相关的接口
import {$f} from "@/utils/index.js";

// 获取频道列表
function channelAPI() {
    return $f({
        url: '/channels',
        method: 'GET'
    })
}

//提交文章表单
function createArticleAPI(data) {
    return $f({
        url: '/mp/articles?draft=false',
        method: 'POST',
        data
    })
}

//获取文章列表
function getArtcileListAPI(params) {
    return $f({
        url:'/mp/articles',
        method:'GET',
        params
    })
}


export {
    channelAPI,
    createArticleAPI,
    getArtcileListAPI
}
