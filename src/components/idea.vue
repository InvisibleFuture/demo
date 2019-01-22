<template>
<div id="forum">
  <!-- 浮层 -->
  <div v-if="layer" v-focus id="layer" tabindex="-1" @click="layer_off" @keyup.esc="layer_off" style="position:fixed;
    left:0;
    top:0;
    right:0;
    bottom: 0;
    z-index:10;
    background:rgba(240,239,240,.9);
    overflow-y:scroll;
    overflow-x:hidden;
    outline:none;
    /*cursor: crosshair;*/
    ">
    <item></item>
  </div>

  <!-- 表层 -->
  <ul class="list">
    <li v-for="r in list">
      <img src="https://xn--uesr8q.com/upload/preview/131.png">
      <!-- 注意此处不使用 router-link, 由于要对链接拦截并在本页显示-->
      <a :href="'p'+r.id" :data-id="r.id" @click.stop="layer_on">
        <p v-text="r.name"></p>
        <p>
        <span>Last</span>
        <time v-text="r.time"></time>
        <span v-if="r.situation == 1">构建/招募</span>
        <span v-if="r.situation == 2">运作/稳定</span>
        <span v-if="r.situation == 3">终止/成功</span>
        <span v-if="r.situation == 4">终止/失败</span>
        </p>
      </a>
    </li>
  </ul>

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'idea',
  components: {
    // 动态引入组件们
    'item': () => import('./guild.vue')
  },
  data() {
    return {
      id: 1,
      imgsArr: [],
      group: 1, // request param
      end: false, // 是否已经到底.......
      maxpage: 2,
      forum: {},
      threadlist: {},

      over: false, // 结束waterfall加载
      layer: false,
      layerid: 666,
      list:[
          {id:1, msg: 'aaa', name:'基于ACK的', url:'project21', time:'12-29 AM10:53', situation:1},
          {id:1, msg: 'aaa', name:'ididid', url:'project21', time:'12-29 AM10:54', situation:1},
          {id:1, msg: 'aaa', name:'New project test', url:'project21', time:'12-29 AM10:55', situation:2},
          {id:1, msg: 'aaa', name:'New project test', url:'project21', time:'12-29 AM10:55', situation:2},
          {id:1, msg: 'aaa', name:'New project test', url:'project21', time:'12-29 AM10:58', situation:3},
          {id:1, msg: 'aaa', name:'New project test', url:'project21', time:'12-29 AM10:59', situation:1}
      ]
    }
  },
  created() {},
  mounted: function() {
    this.id = this.$route.params.id
    this.getData()

    // 监听浏览器后退事件 如果点击前进呢?
    window.onpopstate = () => {
      if (this.layer) {
        this.layer = false
      }
    }
  },
  directives: {
    // 使用 v-focus 在元素显示时自动聚焦
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  },
  methods: {
    /* 点击弹窗空白位置或按下 esc 时关闭弹出层 (假设已聚焦到div)
     * 先撤销底层的 tabindex 封禁 (使用tab切换时防止光标在底层的)
     * 要避免有延迟时的连续点击
     * 将 url 恢复
     */
    layer_off: function(event) {
      if (this.layer) {
        this.layer = false
        window.history.go(-1)
      }
    },

    /* 打开 层 用于装填项目详细信息, 层本身就是项目, 而不再出层级
     * 先封禁底层聚焦
     * 传参 注意必须是整数类型
     * 不触发 route 改变 URL
     * 终止冒泡
     */
    layer_on: function(event) {
      var state = ({
        url: "2333",
        title: "~title",
        additionalKEY: "~additionalVALUE"
      })
      window.history.pushState(state, '~title', event.currentTarget.pathname)
      this.layerid = parseInt(event.currentTarget.dataset.id)
      this.layer = true
      event.preventDefault()
      // 弹出层时要禁止 tab 切换到底层 (给其他层设置tabindex使其禁止)
    },

    getData() {
      // 替换的方法 , 后端不必再建表存储图像字段, 约定 x1 格式为 data/x1/xxx.webp 文件, 视网膜屏适配 x2, 文件名使用帖子id尽量避免后端输出
      let server = this.$store.state.server.master.domain
      axios.get(server + '/forum-' + this.id + '-' + this.group + '.htm?ajax=1').then(r => {

        // 数据转化, 不必指望后端能输出什么好东西..
        let obj = r.data.message.threadlist
        let arr = []
        for (let item in obj) {
          arr.push({
            id: obj[item].tid,
            src: server + '/upload/preview/' + obj[item].tid + ".png",
            info: obj[item].subject,
            user: {
              id: 1,
              name: 'Last',
              img: 'https://avatars3.githubusercontent.com/u/32554200?s=460&v=4',
            },
            list: {
              id: 3,
              name: 'R17.5'
            }
          })
        }

        //console.log(arr)
        this.imgsArr = arr

        this.group++
        if (this.group >= this.maxpage) {
          this.end = true
        }
      })
    }
  }
}
</script>

<style lang="less">
ul.list {
    margin: 0;
    padding: 0;
    list-style: none;
    > li {
        display: flex;
        > img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
        > a {
            display: flex;
            flex-direction: column;
            width: 100%;
            background: #ccc
        }
    }
}
#content {
    position: absolute;
    top: 50px; // 这里缩进不能全屏
    bottom: 0;
    width: 100%;
}

#forum {
    //position: relative;
    //left: 0;
    //top: 0;
    //height: 100%;
    //width: 100%;
    // 卡片标题
    .description {
        display: block;
        padding: 0 16px;
        margin: 10px 0;
        line-height: 1.35em;
        overflow: hidden;
        word-wrap: break-word;
    }
    // 卡片底部
    .attribution {
        color: #999;
        border-top: 1px solid #F2F2F2;
        background: #FAFAFA;
        position: relative;
        padding: 0 15px;
        background: #fff;
        .img {
            width: 34px;
            height: 34px;
            margin: 16px 0;
            display: block;
            float: left;
        }
        a {
            color: #9E7E6B;
        }
        a.img {
            background-color: #faf7f7;
        }
        .avt {
            width: 34px;
            height: 34px;
            display: block;
            border-radius: 50%;
        }
        .text {
            margin-left: 34px;
            height: 51px;
            padding: 15px 0 0 10px;
            line-height: 1.5;
            .inner {
                height: 37px;
                overflow: hidden;
                .line {
                    display: inline-block;
                    width: 100%;
                    .author {
                        float: left;
                        max-width: 120px;
                        white-space: nowrap;
                        max-height: 80px;
                        overflow: hidden;
                    }
                }
            }
        }
        .replyButton {
            display: block;
            visibility: hidden;
            position: absolute;
            right: 0;
            bottom: 0;
            width: 26px;
            height: 16px;
            background: url("/img/home_comment_act_icon.png") 0 0 no-repeat;
            cursor: pointer;
            -webkit-transition: opacity 0.2s linear;
            -webkit-transition-property: opacity,right,bottom;
            opacity: 0;
        }
    }
}

/* 操作 */
.stats {
    padding: 0 15px;
    margin: 10px 0;
    span {
        display: inline-block;
        width: auto;
        height: 12px;
        line-height: 12px;
        font-size: 12px;
        margin-right: 10px;
    }
}
.less {
    color: #8c7e7e;
}
</style>
