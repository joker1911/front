import request from '@/utils/request'
const api_group = 'user'
const api_name = 'user'
export default {
    sendsms(mobile) {
        return request({
            url: `/${api_group}/${api_name}/sendsms/${mobile}`,
            method: "put",
        });
    },
    register(user, code) {
        return request({
            url: `/user/user/register/${code}`,
            method: "post",
            data: user,
        });
    },
    //使用微信登录添加新用户
    add(user){
      return request({
          url:"/user/user",
          method:"post",
          data:user,
      });
    },
    login(mobile, password) {
        return request({
            url: "/${api_group}/${api_name}/login",
            method: "post",
            data: {
                mobile,
                password,
            },
        });
    },
    /*根据cookie的token查询我的个人信息*/
    getInfo(token){
        return request({
            url: "user/account/info",
            method:"get",
            params: { token }
        });
    },
    /*根据用户id查询我的个人信息*/
    getInfoById(uid){
        return request({
           url : `user/user/${uid}`,
            method: "get"
        });
    },

    //获取当前登录的用户的账户信息
    getAccount(){
        return request({
            url: `user/user/account_info`,
            method:"get"
        })
    },
    //修改账户信息
    update(pojo){
        return request({
            url:"/user/user/account",
            method:"put",
            data:pojo,
        });
    },
    //查询当前登录用户的用户信息
    getUser(){
        return new request({
           url: "user/user/info",
           method:"get",
        });
    },
    //修改用户信息
    updateUser(pojo){
        return new request({
           url: `/user/user/`,
            method:"put",
            data:pojo,
        });
    },

    //设置用户头像
    setAvator(uid,url){
        let pojo={
          uid:uid,
          url:url
        };
        return new request({
           url:`/user/user/setAvator` ,
            method:"put",
            data:pojo
        });
    }
}



