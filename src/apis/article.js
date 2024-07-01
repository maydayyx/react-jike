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

//删除文章
function delArticleAPI(id) {
    return $f({
        url:`/mp/articles/${id}`,
        method:'DELETE'
    })
}

//获取文章详情
function getArticleById(id) {
    return $f({
        url:`/mp/articles/${id}`
    })
}

//更新文章表单
function updateArticleAPI(data) {
    return $f({
        url: `/mp/articles/${data.id}?draft=false`,
        method: 'PUT',
        data
    })
}



export {
    channelAPI,
    createArticleAPI,
    getArtcileListAPI,
    delArticleAPI,
    getArticleById,
    updateArticleAPI
}
