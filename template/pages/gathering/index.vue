<template>
  <div>
    活动列表
    <div v-for="(item,index) in items.data" :key="index">{{item.name}}</div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    asyncData ({ params, error }) {
      return axios.get('http://localhost:7333/mock/6055d14deddea11280030288/weibo/gathering')
        .then((res) => {
          return { items: res.data }
        })
    },
    components: {
    },
    mounted: function() {
    }
  }
</script>