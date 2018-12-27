<template>
<div id="hello">
  <div class="cent">
    <h1 v-text="h1"></h1>
    <h2 v-text="h2"></h2>
    <p v-text="msg"></p>
    <p>{{ count }}</p>
    <ul>
      <li v-for="item in list">
        <router-link :to="item.url" v-text="item.name"></router-link>
      </li>
    </ul>
  </div>
  <div id="home_footer">
    <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true">
        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      h1: 'Welcome to the remote collaboration team',
      h2: 'Essential Links',
      msg: 'none',
      count: 23,
      list: [{
          id: 12,
          name: '公会',
          msg: '会员可向公会贡献xx',
          url: 'guild'
        },
        {
          id: 12,
          name: '组队',
          msg: '浮层组件没有单独页',
          url: 'team'
        },
        {
          id: 12,
          name: '角色',
          msg: '用户担当的角色',
          url: 'user'
        },
        {
          id: 12,
          name: '项目',
          msg: '发起的项目事件',
          url: '0project'
        },
        {
          id: 12,
          name: '领域',
          msg: '区域地图',
          url: '0project'
        }
      ]
    }
  },
  mounted: function() {
    this.count = this.$store.state.count
    /*
    if( this.$store.state.initialize == 0 ){
      // 从页面取数据, 由于每页数据结构不同, 每个组件要取各自的
      this.msg = "333"

      // 修改掉 vuex 中的默认值, 则下次本地打开这个组件时不再从页面取数据
      this.$store.commit('initialize')
    }else{
      this.msg = "666"
    }
    this.fetchData()
    */
  },
  methods: {
    fetchData: async function() {
      // 若是初始化状态, 从页面中取数据, 否则从api取数据
      //if( initialize == 0 ){
      // 初始化方法 { 只有当前页面知道自己要读哪些数据 }
      //document.getElementById("data").innerText
      //this.data.msg = "333"
      //}else{
      // API 方法

      //}

      //this.msg = "333"

      // 亦或直接向数据中心取数据
      //var data = dataget('p','xx xx xx') // 并将数据更新到 data
      //axios.get( URL_BASE, { params: { id: 12345 } } ).then( response => (this.data = response.data))
      //console.log('get data !')

      // 如成功则渲染, 失败时由api主动报错
      //this.apiGet('p','66996') // 载入数据
      //this.msg = this.$route.params.id
      /*
      // 直接要数据, 而不作错误判断处理
      const res = await this.getData('p','88848')

      // 将取得的数据处理为自己的数据结构
      if (res) {
        this.msg = res
      }else{
       alert('失败了')
      }
      */
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#home_footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    text-align: center;
    opacity: 0.6
}
#hello {
    height: 320px;
    min-height: 40%;
    background: #3c4146;
    padding-top: 100px;
    position: relative;
    .cent {
        width: 100%;
        padding: 1rem;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
    h1,
    h2 {
        color: #c3c3c3;
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
        li {
            display: inline-block;
            margin: 0 20px 0 0;
            a {
                color: #42b983;
                transition: all 0.3s linear;
            }
            a:hover {
                color: #42dddd;
                transition: all 0.3s linear;
            }
        }
    }
}
#hello::after {
    content: '';
    background: #3c4146;
    width: 100%;
    height: 10px;
    position: absolute;
    right: 0;
    bottom: -5px;
    border-radius: 50%;
}
</style>
