import request from '@/utils/request'

const api_name = 'gathering'
export default {
    page(page, size) {
        return request({
            url: '/${api_name}/${page}/${size}',
            method: 'get'
        })
    },
    getList() {
        return request({
            url: "/gathering/gathering",
            method: "get",
        });
    },
    getListByPagination(page, size, searchMap) {
        return request({
            url: `/gathering/gathering/search/${page}/${size}`,
            method: "post",
            data: searchMap,
        });
    },
    saveGathering(pojo) {
        return request({
            url: "/gathering/gathering",
            method: "post",
            data: pojo,
        });
    },
    findById(id) {
        return request({
            url: `/gathering/gathering/${id}`,
            method: 'get',
        });
    },
    updateById(id, pojo) {
        if (id === null || id === '') {
            return this.saveGathering(pojo)
        }
        return request({
            url: `/gathering/gathering/${id}`,
            method: "put",
            data: pojo,
        });
    },
    deleteById(id) {
        return request({
            url: `/gathering/gathering/${id}`,
            method: "delete",
        });
    },
    /*活动报名*/
    signup(uid,gid){
        return request({
            url: `/gathering/gathering/signup/${uid}/${gid}`,
            method: "put",
        });
    },
    /*取消活动报名*/
    delsignup(uid,gid){
        return request({
           url:  `/gathering/gathering/delsignup/${uid}/${gid}`,
           method: "delete",
        });
    },
    /*查看是否已经报名*/
    signed(gid){
        return request({
           url:  `/gathering/gathering/signed/${gid}`,
           method: 'get',
        });
    },
    findTop4(){
        return request({
           url:"gathering/gathering/top",
           method:"get",
        });
    }
}



