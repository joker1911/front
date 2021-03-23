
import Vue from "vue"
import websdk from 'easemob-websdk'
import webimconfig from '../assets/webim.config'

//require('../assets/webim.config.js')
//let WebIM = require('easemob-websdk')
let WebIM = window.WebIM = websdk;
WebIM.config = webimconfig;


// 环信实例
var conn = WebIM.conn = new WebIM.connection({
    appKey: WebIM.config.appkey,
    isHttpDNS: WebIM.config.isHttpDNS,
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
    https: WebIM.config.https,
    url: WebIM.config.xmppURL,
    apiUrl: WebIM.config.apiURL,
    isAutoLogin: true,
    heartBeatWait: WebIM.config.heartBeatWait,
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
    autoReconnectInterval: WebIM.config.autoReconnectInterval,
    isStropheLog: WebIM.config.isStropheLog,
    delivery: WebIM.config.delivery
});

conn.listen({
    //连接成功回调
    onOpened:function ( message ) {
        console.log("环信连接成功回调");
        console.log("开始获取好友列表");
        let  friendsData=[];
        Vue.prototype.$imconn.getRoster({
            success:function ( roster ) {
                //获取好友列表，并进行好友列表渲染，roster格式为：
                /** [
                 {
                        jid:'asemoemo#chatdemoui_test1@easemob.com',
                        name:'test1',
                        subscription: 'both'
                      }
                 ]
                 */
                for ( var i = 0, l = roster.length; i < l; i++ ) {
                    var ros = roster[i];
                    if ( ros.subscription === 'both' || ros.subscription === 'to' ) {

                    }
                    friendsData.push(ros.name);
                }
                console.log("我的好友："+friendsData);
                /*const store = $nuxt.$store
                //const router = $nuxt.$router
                store.commit('newFriendsData', friendsData);   //JSON.parse(JSON.stringify(friendsData))
                console.log(store.getters.getFriendsData);*/
                sessionStorage.setItem('myFriends',JSON.parse(JSON.stringify(friendsData)));
                location.href = "/manager";     // 登录成功，跳转到用户中心
            },
        });
    },
    onClosed: function ( message ) {},         //连接关闭回调
    onTextMessage: function ( message ) {},    //收到文本消息
    onEmojiMessage: function ( message ) {},   //收到表情消息
    onPictureMessage: function ( message ) {}, //收到图片消息
    onCmdMessage: function ( message ) {},     //收到命令消息
    onAudioMessage: function ( message ) {},   //收到音频消息
    onLocationMessage: function ( message ) {},//收到位置消息
    onFileMessage: function ( message ) {},    //收到文件消息
    onVideoMessage: function (message) {
        var node = document.getElementById('privateVideo');
        var option = {
            url: message.url,
            headers: {
                'Accept': 'audio/mp4'
            },
            onFileDownloadComplete: function (response) {
                var objectURL = WebIM.utils.parseDownloadResponse.call(conn, response);
                node.src = objectURL;
            },
            onFileDownloadError: function () {
                console.log('File down load error.')
            }
        };
        WebIM.utils.download.call(conn, option);
    },   //收到视频消息
    onPresence: function ( message ) {},       //处理“广播”或“发布-订阅”消息，如联系人订阅请求、处理群组、聊天室被踢解散等消息
    onRoster: function ( message ) {},         //处理好友申请
    onInviteMessage: function ( message ) {},  //处理群组邀请
    onOnline: function () {},                  //本机网络连接成功
    onOffline: function () {},                 //本机网络掉线
    onError: function ( message ) {},          //失败回调
    onBlacklistUpdate: function (list) {       //黑名单变动
                                               // 查询黑名单，将好友拉黑，将好友从黑名单移除都会回调这个函数，list则是黑名单现有的所有好友信息
        console.log(list);
    },
    onRecallMessage: function(message){},      //收到撤回消息回调
    onReceivedMessage: function(message){},    //收到消息送达服务器回执
    onDeliveredMessage: function(message){},   //收到消息送达客户端回执
    onReadMessage: function(message){},        //收到消息已读回执
    onCreateGroup: function(message){},        //创建群组成功回执（需调用createGroupNew）
    onMutedMessage: function(message){}        //如果用户在A群组被禁言，在A群发消息会走这个回调并且消息不会传递给群其它成员
});

const options = {
    apiUrl: WebIM.config.apiURL,
    user: '',
    pwd: '',
    appKey: WebIM.config.appkey,
    success:function (re) {
        console.log('链接服务器正常')
    },
    error:function (err) {
        alert(err)
    }
};

Vue.prototype.$webim = WebIM;
Vue.prototype.$imconn = conn;
Vue.prototype.$imoption = options;



