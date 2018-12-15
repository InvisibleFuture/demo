<template>
  <main>
    <vue-waterfall-easy :imgsArr="imgsArr" :end="end" @scrollReachBottom="getData">
      <div class="img-info" slot-scope="props">
        <p class="description">{{props.value.info}}</p>
        <!--<p class="description">第{{props.index+1}}张图片</p>-->
        <!--<p class="description">作者 xxx 发表于 xxx版</p>-->
		<p class="stats less">
			<!-- 如果是自己的就不显示 -->
			<span title="转采" class="repin"><i></i>11</span>
			<span title="喜欢" class="like"><i></i>1</span>
		</p>

        <div class="convo attribution clearfix">
          <a href="/zhangxingwei3158/" title="hMRnl_幻" rel="nofollow" class="img x"><img src="static/u1.jpg" data-baiduimageplus-ignore="1" class="avt"></a>
          <div class="text">
            <div class="inner">
              <div class="line"><a href="/we8/" rel="" class="author x">hMRnl_Last</a>&nbsp;发表到</div>
              <div class="line"><a href="/boards/3926222/" rel="" class="x">Last</a></div>
              <a title="评论" class="replyButton"></a>
            </div>
          </div>
        </div>
      </div>
      <!--
      <div slot="waterfall-head">waterfall-head</div>
      -->
    </vue-waterfall-easy>
  </main>
</template>

<script>
import vueWaterfallEasy from './vue-waterfall-easy/vue-waterfall-easy.vue' // 瀑布流
import axios from 'axios'

export default {
  name: 'forum',
  data() {
    return {
      id: 1,
      imgsArr: [],
      group: 1, // request param
      end: false, // 是否已经到底
      maxpage: 2,
      forum:{},
      threadlist:{}
    }
  },
  components: {
    vueWaterfallEasy
  },
  mounted: function () {
      this.id = this.$route.params.id
  },
  methods: {
    getData() {
      // 替换的方法 , 后端不必再建表存储图像字段, 约定 x1 格式为 data/x1/xxx.webp 文件, 视网膜屏适配 x2, 文件名使用帖子id尽量避免后端输出 
      axios.get('http://127.0.0.1:8000/api').then(r => {
        this.imgsArr = r.data


          // res.data.message.imgsArr
          //this.imgsArr = this.imgsArr.concat(sss)
          //this.maxpage = res.data.message.maxpage
          //this.threadlist = res.data.message.threadlist

          this.group++
          if(this.group >= this.maxpage){
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
a,
a:active {
  color: #000;
}
#app,body,html {
  height: 100%;
}

/*
#app #header {
  display: block;
  text-align: center;
  background: #000;
  color: #ccc;
  line-height: 32px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  position: fixed;
  z-index: 999;
  width: 100%;
}
*/
#app #content {
  position: absolute;
  top: 50px;
  bottom: 0;
  width: 100%;
}
#app {
  overflow: auto;
  position: relative;
}

#app .description {
    display: block;
    padding: 0 16px;
    margin: 10px 0;
    line-height: 1.35em;
    overflow: hidden;
    word-wrap: break-word;
}


.attribution {
    color: #999;
    border-top: 1px solid #F2F2F2;
    background: #FAFAFA;
    position: relative;
}
.attribution {
    padding: 0 15px;
    background: #fff;
}
.attribution .img {
    width: 34px;
    height: 34px;
    margin: 16px 0;
    display: block;
    float: left;
}
.attribution a.img {
    background-color: #faf7f7;
}

.attribution .avt {
    width: 34px;
    height: 34px;
    display: block;
    border-radius: 50%;
}

.attribution .text {
    margin-left: 34px;
    height: 51px;
    padding: 15px 0 0 10px;
    line-height: 1.5;
}
.attribution .text .inner {
    height: 37px;
    overflow: hidden;
}
.attribution .text .inner .line {
    display: inline-block;
    width: 100%;
}
.attribution .text .inner .line .author {
    float: left;
    max-width: 120px;
    white-space: nowrap;
    max-height: 80px;
    overflow: hidden;
}
.attribution a {
    color: #9E7E6B;
}
.attribution .replyButton {
    display: block;
    visibility: hidden;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 26px;
    height: 16px;
    background: url(/img/home_comment_act_icon.png) 0 0 no-repeat;
    cursor: pointer;
    -webkit-transition: opacity .2s linear;
    -webkit-transition-property: opacity,right,bottom;
    opacity: 0;
}

/* 操作 */
.stats {
    padding: 0 15px;
    margin: 10px 0;
}
.less {
    color: #8c7e7e;
}
.stats>span {
    display: inline-block;
    width: auto;
    height: 12px;
    line-height: 12px;
    font-size: 12px;
    margin-right: 10px;
}
</style>
