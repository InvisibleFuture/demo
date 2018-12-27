<template>
<div id="forum">
  <!---->
  <vue-waterfall-easy :imgsArr="imgsArr" :end="end" @scrollReachBottom="getData">
  </vue-waterfall-easy>

    yayayayaya
</div>
</template>

<script>
//import vueWaterfallEasy from './vue-waterfall-easy/vue-waterfall-easy.vue' // 瀑布流
import axios from 'axios'

export default {
  name: 'forum',
  data() {
    return {
      id: 1,
      imgsArr: [],
      group: 1, // request param
      end: false, // 是否已经到底.......
      maxpage: 2,
      forum: {},
      threadlist: {},
    }
  },
  components: {
    //vueWaterfallEasy
    'vueWaterfallEasy': () => import('./vue-waterfall-easy/vue-waterfall-easy')
  },
  created() {
  },
  mounted: function() {
      this.id = this.$route.params.id
      this.getData()
  },
  methods: {
    getData() {
      // 替换的方法 , 后端不必再建表存储图像字段, 约定 x1 格式为 data/x1/xxx.webp 文件, 视网膜屏适配 x2, 文件名使用帖子id尽量避免后端输出
      let server = this.$store.state.server.master.domain
      axios.get(server + '/forum-'+this.id+'-' + this.group + '.htm?ajax=1').then(r => {

        // 数据转化, 不必指望后端能输出什么好东西..
        let obj = r.data.message.threadlist
        let arr = []
        for (let item in obj) {
          arr.push({
            id: obj[item].tid,
            src: server + '/upload/preview/' + obj[item].tid + ".png",
            info: obj[item].subject
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
