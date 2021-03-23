import request from '@/utils/request'

export default {
    /*查询频道标签列表*/
    getChannelList(){
        return new request({
           url: "/article/channel/",
            method: "get",
        });
    },
    /*查询所有文章分页*/
    getArticleList(searchMap,page,size){
        return new request({
            url: `article/article1/search/${page}/${size}`,
            method: "post",
            data: searchMap,
        });
    },
    getArticleList1(searchMap,page,size){
        return new request({
            url: `article/article1/search1/${page}/${size}`,
            method: "post",
            data: searchMap,
        });
    },
    getFreshArticleList(searchMap,page,size){
        return new request({
            url: `article/article1/searchRefresh/${page}/${size}`,
            method: "post",
            data: searchMap,
        });
    },
    getOldArticleList(searchMap,page,size){
        return new request({
            url: `article/article1/searchOld/${page}/${size}`,
            method: "post",
            data: searchMap,
        });
    },
    /*根据频道查询所属文章并分页*/
    getArticleListByChannel(id,searchMap,page,size){
        return new request({
           url:  `article/article/channel/${id}/${page}/${size}`,
            method: "post",
            data: searchMap,
        });
    },
    /*根据文章id查询文章信息*/
    getArticleById(id){
        return new request({
           url: `article/article/${id}`,
            method: "get"
        });
    },
    //获取我的专栏列表
    getColumnList(uid){
      return new request({
          url:`article/column/user/${uid}`,
          method:"get",
      });
    },
    //增加发表文章
    add(pojo){
        return new request({
           url:"article/article",
            method:"post",
            data:pojo,
        });
    },
    //绑定文章和标签列表
    setArticleLabels(labels,aid){
        return new request({
           url:`article/article/labels/${aid}`,
           method:"post",
           data:labels,
        });
    },
    //获取文章的评论列表
    getArticleComments(aid){
        return  new request({
           url:`article/article/article_comments/${aid}`,
           method:"get",
        });
    },
    //获取评论的评论列表
    getCommentComments(cid){
        return new request({
            url:`article/article/comment_comments/${cid}`,
            method:"get",
        });
    },
    //发布对文章和评论的评论
    setComment(pojo){
      return new request({
         url:"article/article/setComment",
         method:"post",
         data: pojo,
      }) ;
    },
    //获取我订阅的文章的作者的集合
    getMyFollowers(){
      return new request({
          url:"article/article/getMyFollowers",
          method:"get",
      })  ;
    },
    //根据文章id关注该作者,uid是当前登录的用户，aid是文章id
    subscribe(pojo){
        return new request({
            url:`/article/article/subscribe`,
            method:"post",
            data:pojo
        });
    },

    //根据用户id，查询他的其他文章列表
    getOtherArticles(uid,aid){
        return new request({
            url:`/article/article/otherArticles/${uid}/${aid}`,
            method:"get",
        });
    },
    //查询热门文章列表
    getHotArticles(){
        return new request({
            url:"/article/article/hotArticles",
            method:"get",
        });
    },
    //获取我的文章列表
    getMyArticles(page,size){
        return new request({
            url:`/article/article/myArticles/${page}/${size}`,
            method:"get",
        })
    },
}

