import request from '@/utils/request'

export default {
    /*查询城市列表并分页*/
    search(page,size,searchMap){
        return request({
            url:`/base/city/search/${page}/${size}`,
            method: "post",
            data: searchMap
        });
    },
    /*查询城市列表*/
    getList() {
        return request({
            url: "/base/city",
            method: "get",
        });
    },
    /*根据id查询城市*/
    findById(id){
        return request({
            url: `/base/city/${id}`,
            method: "get",
        });
    },
    /*新增城市*/
    addCity(pojo){
        return request({
            url:'base/city',
            method:"post",
            data:pojo,
        });
    },
    /*删除城市*/
    deleteById(id){
      return request({
          url:`/base/city/${id}`,
          method:"delete",
      })
    },
    /*修改*/
    update(id, pojo) {
        if (id === null || id === '') {
            return this.save(pojo)
        }
        return request({
            url: `base/city/${id}`,
            method: 'put',
            data: pojo
        })
    },
    save(pojo) {
        return request({
            url: `/base/city`,
            method: 'post',
            data: pojo
        })
    },
}

