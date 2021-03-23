import request from '@/utils/request';
import {getUser} from '@/utils/auth'

export default {
    getLabelByPage(page, size) {
        return request({
            url: `/base/label/search/${page}/${size}`,
            method: "post",
        });
    },
    /*有效标签*/
    hotLabel() {
        return request({
            url: "/base/label/toplist",
            method: "get",
        });
    },
    /*热门标签*/
    hotList(){
        return request({
            url: "/base/label/hotlist",
            method: "get"
        });
    },
    //全部标签列表
    allList(){
        return request({
           url:"/base/label",
            method:"get"
        });
    },
    findById(lid){
        return request({
            url:`/base/label/${lid}`,
            method:"get",
        });
    }
}


