// 引入ali-oss
let OSS = require('ali-oss')
/**
 *  [accessKeyId] {String}：通过阿里云控制台创建的AccessKey。
 *  [accessKeySecret] {String}：通过阿里云控制台创建的AccessSecret。
 *  [bucket] {String}：通过控制台或PutBucket创建的bucket。
 *  [region] {String}：bucket所在的区域， 默认oss-cn-hangzhou。
 */
export function client(data) {//data后端提供数据
    return new OSS({
        region: 'oss-cn-beijing',      // 修改的地方      地区，我的是oss-cn-beijing
        accessKeyId: 'LTAI4FwJehpwaU7eMyfw6Ktk',  // 修改的地方      刚才AccessKey管理那里的数据
        accessKeySecret:  'qIWlA73DCLbNjXawxgF4nMmXzy0aN3', // 修改的地方  刚才AccessKey管理那里的数据
        bucket: 'image-bigduck'     // 修改的地方  就是创建的bucket名字
    })
}

/**
 * 生成随机文件名称
 * 规则八位随机字符，加下划线连接时间戳
 */
export const getFileNameUUID = () => {
    function rx() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return `${+new Date()}_${rx()}${rx()}`
}

