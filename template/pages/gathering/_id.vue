<template>
  <div>
    活动详情
    {{item.data.id}}<br>
    {{item.data.name}}
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    asyncData ({ params, error }) {
      return axios.get('http://localhost:7333/mock/6055d14deddea11280030288/weibo/gathering/'+params.id)
        .then((res) => {
          console.log(`params.page => ${JSON.stringify(res.data)}`)
          return { item: res.data }
        })
    },
    components: {
    },
    mounted: function() {
    }
  }
</script>