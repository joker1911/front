import request from '@/utils/request'

export default {
    getSearchList(pojo,page,size){
        return new request({
           url:`/search/article/search/${page}/${size}`,
            method:"put",
            data:pojo,
        });
    }
}
