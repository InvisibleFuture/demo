<template>
<div id="project">

  <div class="list">
    <ul>
      <li v-for="r in plist">
          <img src="https://xn--uesr8q.com/upload/preview/131.png">
          <router-link :to="r.url">
              <p v-text="r.name"></p>
              <span>Last</span>
              <time v-text="r.time"></time>
              <span v-if="r.situation == 1">构建/招募</span>
              <span v-if="r.situation == 2">运作/稳定</span>
              <span v-if="r.situation == 3">终止/成功</span>
              <span v-if="r.situation == 4">终止/失败</span>
          </router-link>
      </li>
    </ul>
  </div>

  <p v-text="h2"></p>
想法/创意 - 探讨 验证 立项 失败
项目重启
</div>
</template>

<script>
export default {
  name: 'project',
  data() {
    return {
      plist:[
          {name:'基于ACK的', url:'project21', time:'12-29 AM10:53', situation:1},
          {name:'ididid', url:'project21', time:'12-29 AM10:54', situation:1},
          {name:'New project test', url:'project21', time:'12-29 AM10:55', situation:2},
          {name:'New project test', url:'project21', time:'12-29 AM10:55', situation:2},
          {name:'New project test', url:'project21', time:'12-29 AM10:58', situation:3},
          {name:'New project test', url:'project21', time:'12-29 AM10:59', situation:1}
      ],
      h1: 'Welcome to the remote collaboration team',
      h2: '追寻灵感 需要想象力',
      msg: 'none'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#project {
    .list {
        width:100%;
        max-width: 1000px;
        margin: 32px auto;
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            li{
                display: flex;
                img {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    padding: 1rem .5rem;
                }
                a {
                    display: block;
                    padding: 1rem .5rem;
                    p {
                        color: #666;
                        font-size: 1.3rem;
                        padding-bottom: 3px;
                    }
                    span,time {
                        padding: 5px 5px 0 0;
                        color: #999;
                    }
                }
            }
        }
    }
}

#home_footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    text-align: center;
    opacity: 0.6;
}
</style>
