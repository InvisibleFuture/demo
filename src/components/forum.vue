<template>
<div id="forum">
  <vue-waterfall-easy :imgsArr="imgsArr" :end="end" @scrollReachBottom="getData">
  </vue-waterfall-easy>
</div>
</template>

<script>
import vueWaterfallEasy from './vue-waterfall-easy/vue-waterfall-easy.vue' // 瀑布流
import axios from 'axios'

export default {
  name: 'forum',
  data() {
    return {
      id: 1,
      imgsArr: [
          /*
          {id:1, src:'static/collect/x1/1.png', info:'466456', name:'Last', avg:'static/u1.jpg', part:'collect', parturl:'/'},
          {id:2, src:'static/collect/x1/2.png', info:'466456', name:'Last', part:'collect'},
          {id:3, src:'static/collect/x1/3.png', info:'466456', name:'Last', part:'collect'},
          {id:4, src:'static/collect/x1/4.png', info:'466456', name:'Last', part:'collect'},
          {id:5, src:'static/collect/x1/5.png', info:'466456', name:'Last', part:'collect'},
          {id:6, src:'static/collect/x1/6.png', info:'466456', name:'Last', part:'collect'},
          {id:7, src:'static/collect/x1/7.png', info:'466456', name:'Last', part:'collect'},
          {id:8, src:'static/collect/x1/8.png', info:'466456', name:'Last', part:'collect'},
          {id:9, src:'static/collect/x1/9.png', info:'466456', name:'Last', part:'collect'},
          {id:10, src:'static/collect/x110.png', info:'466456', name:'Last', part:'collect'},
          {id:11, src:'static/collect/x1/11.png', info:'466456', name:'Last', part:'collect'},
          {id:12, src:'static/collect/x1/12.png', info:'466456', name:'Last', part:'collect'},
          {id:13, src:'static/collect/x1/13.png', info:'466456', name:'Last', part:'collect'},
          {id:14, src:'static/collect/x1/14.png', info:'466456', name:'Last', part:'collect'},
          {id:15, src:'static/collect/x1/15.png', info:'466456', name:'Last', part:'collect'},
          {id:16, src:'static/collect/x1/16.png', info:'466456', name:'Last', part:'collect'},
          {id:17, src:'static/collect/x1/17.png', info:'466456', name:'Last', part:'collect'},
          {id:18, src:'static/collect/x1/18.png', info:'466456', name:'Last', part:'collect'},
          {id:19, src:'static/collect/x1/19.png', info:'466456', name:'Last', part:'collect'},
          {id:20, src:'static/collect/x1/20.png', info:'466456', name:'Last', part:'collect'},
          {id:21, src:'static/collect/x1/21.png', info:'466456', name:'Last', part:'collect'},
          {id:22, src:'static/collect/x1/22.png', info:'466456', name:'Last', part:'collect'},
          {id:23, src:'static/collect/x1/23.png', info:'466456', name:'Last', part:'collect'},
          {id:24, src:'static/collect/x1/24.png', info:'466456', name:'Last', part:'collect'}
          */
      ],
      group: 1, // request param
      end: false, // 是否已经到底.......
      maxpage: 2,
      forum: {},
      threadlist: {},
    }
  },
  components: {
    vueWaterfallEasy
  },
  mounted: function() {
    this.id = this.$route.params.id
  },
  methods: {
    getData() {
      // 替换的方法 , 后端不必再建表存储图像字段, 约定 x1 格式为 data/x1/xxx.webp 文件, 视网膜屏适配 x2, 文件名使用帖子id尽量避免后端输出
      let server = 'https://xn--uesr8q.com'  //this.$Store.state.server
      axios.get(server + '/forum-3-' + this.group + '.htm?ajax=1').then(r => {

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
  },
  created() {
    this.getData()
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
