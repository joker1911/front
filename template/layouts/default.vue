<template>
  <div>
    <header>
      <div class="activity-head">
        <div class="wrapper">
          <div class="sui-navbar">
            <div class="navbar-inner">
              <a href="index-logined.html" class="sui-band"><img src="../assets/img/asset-logo-black.png" alt="社交" /> </a>
              <ul class="sui-nav">
                <li class="active"><a href="../assets/headline-logined.html">微博</a></li>
                <li><a href="../assets/qa-logined.html" >问答</a></li>
                <li><a href="../assets/activity-index.html" >活动</a></li>吧  
                <li><a href="../assets/spit-index.html" >吐槽</a></li>
                <li><a href="../assets/recruit-index.html"  >招聘</a></li>
              </ul>
              <form class="sui-form sui-form pull-left">
                <input type="text" placeholder="请输入关键字">
                <span class="btn-search fa fa-search"></span>
              </form>
              <div class="sui-bav pull-right info">
                <li><i class="fa fa-share-alt" aria-hidden="true"></i><a href="../assets/qa-submit.html" target="_blank">去吐槽</a></li>
                <li><a href="../assets/personhomepage.html" target="_blank" class="hoego"><img src="../assets//img/widget-photo.png" alt="用户头像"></a></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
      <nuxt/>
    <footer>
      <div class="footer">
        <div class="wrapper">
          <div class="footer-bottom">
            <div class="link">
              <dl>
                <dt>我是谁</dt>
                <dd>关注我</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<script>
import '~/assets/plugins/normalize-css/normalize.css'
import '~/assets/plugins/yui/cssgrids-min.css'
import '~/assets/plugins/sui/sui.min.css'
import '~/assets/plugins/sui/sui-append.min.css'
import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
import '~/assets/css/widget-base.css'
import '~/assets/css/widget-head-foot.css'
export default {
  
}
</script>