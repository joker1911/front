export default function(ctx){
    //    离开页面
    window.addEventListener('beforeunload', ()=> {
        console.log('触发离开事件')
        sessionStorage.setItem("store",JSON.stringify($nuxt.store.state))
    });
//      页面加载完成
    window.addEventListener('load', ()=> {
        console.log('触发加载完成事件')
        let storeCache = sessionStorage.getItem("store")
        console.log("storeCache:"+storeCache);
        if(storeCache != null&&storeCache != undefined&& storeCache!= ''){
            // 普通的state属性高更改的话需要用mutations ，但是如果你修改的是state 根属性的时候，那么
            // 就要使用replaceState 方法了。
            $nuxt.store.replaceState(JSON.parse(storeCache));
        }
    });
}
