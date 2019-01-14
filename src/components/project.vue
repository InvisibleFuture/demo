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
想法/创意 - 探讨 验证 立项 失败
项目重启
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
  name: 'project',
  data() {
    return {
      plist:[
          {name:'New project test', url:'project21', time:'12-29 AM10:53', situation:1},
          {name:'New project test', url:'project21', time:'12-29 AM10:54', situation:1},
          {name:'New project test', url:'project21', time:'12-29 AM10:55', situation:2},
          {name:'New project test', url:'project21', time:'12-29 AM10:55', situation:2},
          {name:'New project test', url:'project21', time:'12-29 AM10:58', situation:3},
          {name:'New project test', url:'project21', time:'12-29 AM10:59', situation:1}
      ],
      h1: 'Welcome to the remote collaboration team',
      h2: 'Essential Links',
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
