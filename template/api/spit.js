import request from '@/utils/request';

export default {
    getListByPagination(currentPage, pageSize, searchMap) {
        return request({
            url: `/spit/spit/search/${currentPage}/${pageSize}`,
            method: "post",
            data: searchMap,
        });
    },
    getById(id) {
        return request({
            url: `/spit/spit/${id}`,
            method: "get",
        });
    },
    /*评论列表*/
    commentList(id) {
        return request({
            url:`/spit/spit/commentlist/${id}`,
            method: "get",
        });
    },
    /*点赞 */
    thumbup(id) {
        return request({
            url: `/spit/spit/thumbup/${id}`,
            method: "put",
        });
    },
    /*发布吐槽*/
    save(pojo) {
        return request({
            url: "/spit/spit",
            method: "post",
            data: pojo
        });
    },

    //查询热门吐槽列表
    getHotSpits(){
        return new request({
           url:"/spit/spit/hotSpits",
           method:"get",
        });
    }
}

