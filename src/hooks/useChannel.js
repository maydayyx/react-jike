import {useEffect, useState} from "react";
import {channelAPI} from "@/apis/article.js";

function useChannel() {
    //获取频道列表
    const [channelList, setChannelList] = useState([])
    useEffect(() => {
        const getChannelList = async () => {
            const res = await channelAPI()
            setChannelList(res.data.channels)
        }
        getChannelList()
    }, [])
    return {
        channelList
    }
}

export {
    useChannel
}