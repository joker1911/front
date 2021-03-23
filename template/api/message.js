
import {getUser} from "@/utils/auth"
import request from '@/utils/request'

//聊天接口api
export default {
    //获取消息列表
    getChatList(from,to){
        return new request({
           url:`/chat/chat/getChatList/${from}/${to}`,
           method:"get",
        });
    },
    //查询我的未读消息总数
    getMyMessages(uid){
      return new request({
          url:`/chat/chat/getMyMessages/${uid}`,
          method:"get",
      })  ;
    },
    //查看我的未读消息
    getFriendsMessages(uid){
        return new request({
           url:`/chat/chat/getFriendsMessages/${uid}`,
           method:"get",
        });
    },
    //设置对某人的消息已读
    setReaded(from,to){
        return new request({
           url:`/chat/chat/setReaded/${from}/${to}` ,
            method:"put"
        });
    }
}
