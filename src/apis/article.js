 //文章相关的接口
 import {$f} from "@/utils/index.js";

// 获取频道列表
 function channelAPI() {
     return $f({
         url: '/channels', method: 'GET'
     })
 }

 export {
    channelAPI
 }
