import request from '@/utils/request'

export default {
    //查询当前登录用户所有的未读通知
    getAllNotices(){
        return new request({
           url:"/notice/notice/allNotices",
           method:"get",
        });
    },
    //设置某条消息已读
    setReaded(nid){
      return new request({
        url:`/notice/notice/readed/${nid}`  ,
        method: "put"
      });
    },
    //设置消息全部已读
    setAllReaded(){
        return new request({
           url: "/notice/notice/allReaded",
            method:"put"
        });
    },
    //获取我的未读消息数量
    getMyMessNum(){
        return new request({
            url:"/notice/notice/myMessNum",
            method:"get",
        })
    }
}
