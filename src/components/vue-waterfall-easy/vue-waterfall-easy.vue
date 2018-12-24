<style lang="less">
.vue-waterfall-easy-container {
  width: 100%;
  height: 100%;
  position: relative;
}

/**/
.vue-waterfall-easy-container .vue-waterfall-easy-scroll {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.vue-waterfall-easy-container .vue-waterfall-easy {
  position: absolute;
  width: 100%;
  //top: 0; // 调整导航条的占用空间 这里缩进层级有问题
}

@keyframes show-card {
  .vue-waterfall-easy-container .vue-waterfall-easy 0% {
    transform: scale(0.5);
  }

  .vue-waterfall-easy-container .vue-waterfall-easy 100% {
    transform: scale(1);
  }
}

.vue-waterfall-easy-container .vue-waterfall-easy>.img-box {
  position: absolute;
  box-sizing: border-box;
  width: 50%;
}

.vue-waterfall-easy-container .vue-waterfall-easy>.img-box.default-card-animation {
  animation: show-card 0.4s;
  transition: left 0.6s, top 0.6s;
  transition-delay: 0.1s;
}

.vue-waterfall-easy-container .vue-waterfall-easy a {
  display: block;
}

.vue-waterfall-easy-container .vue-waterfall-easy .img-inner-box {
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .02), 0 4px 8px rgba(0, 0, 0, .02);
  border-radius: 3px;
  overflow: hidden;
  -webkit-transition: transform .15s ease-in-out, box-shadow .15s ease-in-out;
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .02), 0 4px 8px rgba(0, 0, 0, .02);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .02), 0 4px 8px rgba(0, 0, 0, .02);
  -webkit-backface-visibility: hidden;
}

.vue-waterfall-easy-container .vue-waterfall-easy .img-inner-box:hover {
  box-shadow: 0 1px 3px rgba(0, 0, 0, .02), 0 16px 32px -4px rgba(0, 0, 0, .17);
  transform: translateY(-1px);
}

/* 增量参照 */
.pin {
  position: absolute;
  width: 236px;
  font-size: 12px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .02), 0 4px 8px rgba(0, 0, 0, .02);
  border-radius: 3px;
  overflow: hidden;
  -webkit-transition: transform .15s ease-in-out, box-shadow .15s ease-in-out;
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .02), 0 4px 8px rgba(0, 0, 0, .02);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .02), 0 4px 8px rgba(0, 0, 0, .02);
  -webkit-backface-visibility: hidden;
}

.pin:hover {
  box-shadow: 0 1px 3px rgba(0, 0, 0, .02), 0 16px 32px -4px rgba(0, 0, 0, .17);
  transform: translateY(-1px);
}

.vue-waterfall-easy-container .vue-waterfall-easy .__err__ .img-wraper {
  background: deeppink;
  background: repeating-linear-gradient(45deg, #eebbbb, #eebbbb 15px, #eeeeee 0, #eeeeee 30px)
}

.vue-waterfall-easy-container .vue-waterfall-easy .__err__ .img-wraper img {
  display: none;
}

.vue-waterfall-easy-container .vue-waterfall-easy a.img-wraper>img {
  width: 100%;
  display: block;
  pointer-events: none;
}

.vue-waterfall-easy-container .vue-waterfall-easy .over {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 12px;
  line-height: 1.6;
  color: #aaa;
}

.vue-waterfall-easy-container>.loading.first {
  bottom: 50%;
  transform: translate(-50%, 50%);
}

.vue-waterfall-easy-container>.loading {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 6px;
  z-index: 999;
}

@keyframes ball-beat {
  .vue-waterfall-easy-container>.loading 50% {
    opacity: 0.2;
    transform: scale(0.75);
  }

  .vue-waterfall-easy-container>.loading 100% {
    opacity: 1;
    transform: scale(1);
  }
}

.vue-waterfall-easy-container>.loading.ball-beat>.dot {
  vertical-align: bottom;
  background-color: #4b15ab;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 3px;
  animation-fill-mode: both;
  display: inline-block;
  animation: ball-beat 0.7s 0s infinite linear;
}

.vue-waterfall-easy-container>.loading.ball-beat>.dot:nth-child(2n-1) {
  animation-delay: 0.35s;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s
}

/* .fade-leave-active, 2.1.8 版本以下 */
.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>


<template>
<div id="content">

  <div class="vue-waterfall-easy-container" :style="{width: width&amp;&amp;!isMobile ? width+'px' : '', height: parseFloat(height)==height ? height+'px': height }">
    <div class="loading ball-beat" v-show="isPreloading_c" :class="{first:isFirstLoad}">
      <slot name="loading" :isFirstLoad="isFirstLoad"></slot>
      <div class="dot" v-if="!hasLoadingSlot" v-for="n in loadingDotCount" :style="loadingDotStyle"></div>
    </div>
    <div class="vue-waterfall-easy-scroll" ref="scrollEl">
      <slot name="waterfall-head"></slot>
      <div class="vue-waterfall-easy" :style="isMobile? '' :{width: colWidth*cols+'px',left:'50%', marginLeft: -1*colWidth*cols/2 +'px'}">
        <div class="img-box" v-for="(v,i) in imgsArr_c" :class="[cardAnimationClass, {__err__: v._error}]" :style="{padding: (isMobile ? mobileGap : gap)/2+'px', width: isMobile ? '' : colWidth+'px'}">

          <div class="img-inner-box">
            <a class="img-wraper" v-if="v[srcKey]" @click.stop="layer_on" :data-id="v[hrefKey]" :href="'p'+v[hrefKey]" :style="{width:imgWidth_c + 'px',height:v._height ? v._height+'px':false}"><img :src="v[srcKey]" /></a>
            <slot :index="i" :value="v"></slot>
            <!--  -->
            <div class="img-info">
              <p class="description" v-text="v.info"></p>
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
                    <div class="line"><a href="/we8/" rel="" class="author x" v-text="v.name"></a>&nbsp;发表到</div>
                    <div class="line"><a href="/boards/3926222/" rel="" class="x" v-text="v.part"></a></div>
                    <a title="评论" class="replyButton"></a>
                  </div>
                </div>
              </div>
            </div>
            <!--
              <div slot="waterfall-head">waterfall-head</div>
            -->
            <!--  -->
          </div>
        </div>
        <div class="over" v-if="over" ref="over">
          <slot name="waterfall-over">被你看光了</slot>
        </div>
      </div>
    </div>
  </div>
  <!-- 延时效果依然会引起 BUG
  <transition name="fade">
  </transition>
  -->
    <div v-if="layer" id="layer" tabindex="-1" @click="layer_off" @keyup.esc="layer_off" style="position:fixed;
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
      <thread :tid="layerid"></thread>
    </div>




</div>
</template>


<script>
import alink from './components/alink.vue'
import thread from '../thread.vue'

export default {
  name: 'vue-waterfall-easy',
  components: {
    alink,
    thread
  },
  props: {
    end: {
      type: Boolean,
      defaule: false
    },
    width: { // 容器宽度
      type: Number
    },
    height: { // 容器高度
      type: [Number, String]
    },
    reachBottomDistance: { // 滚动触底距离，触发加载新图片
      type: Number, // selector
      default: 20 // 默认在最低那一列到底时触发
    },
    loadingDotCount: { // loading 点数
      type: Number,
      default: 3
    },
    loadingDotStyle: {
      type: Object,
    },
    gap: { // .img-box 间距
      type: Number,
      default: 16
    },
    mobileGap: {
      type: Number,
      default: 8
    },
    maxCols: {
      type: Number,
      default: 5
    },
    imgsArr: {
      type: Array,
      required: true,
    },
    srcKey: {
      type: String,
      default: 'src'
    },
    hrefKey: {
      type: String,
      default: 'id'
    },
    imgWidth: {
      type: Number,
      default: 236
    },
    isRouterLink: {
      type: Boolean,
      default: true
    },
    linkRange: { // card | img | custom 自定义通过slot自定义链接范围
      type: String,
      default: 'img'
    },
    loadingTimeOut: { // 预加载事件小于500毫秒就不显示加载动画，增加用户体验
      type: Number,
      default: 500
    },
    cardAnimationClass: {
      type: [String],
      default: 'default-card-animation'
    },
    enablePullDownEvent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      msg: 'this is from vue-waterfall-easy.vue',
      isMobile: !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i), // 初始化移动端
      isPreloading: true, // 正在预加载中，显示加载动画
      isPreloading_c: true,
      imgsArr_c: [], // 待图片预加载imgsArr完成，插入新的字段height之后,才会生成imgsArr_c，这时才开始渲染
      loadedCount: 0,
      cols: NaN, // 需要根据窗口宽度初始化
      imgBoxEls: null, // 所有的.img-box元素
      beginIndex: 0, // 开始要排列的图片索引,首次为第二列的第一张图片，后续加载则为已经排列图片的下一个索引
      colsHeightArr: [],
      // 自定义loading
      LoadingTimer: null,
      isFirstLoad: true, // 首次加载
      over: false, // 结束waterfall加载
      layer: false,
      layerid: 666,
    }
  },
  computed: {
    colWidth() { // 每一列的宽度
      return this.imgWidth + this.gap
    },
    imgWidth_c() { // 对于移动端重新计算图片宽度`
      return this.isMobile ? window.innerWidth / 2 - this.mobileGap : this.imgWidth
    },
    hasLoadingSlot() {
      return !!this.$scopedSlots.loading
    }
  },
  mounted() {
    // 监听浏览器后退事件 如果点击前进呢?
    window.onpopstate = () => {
      if (this.layer) {
        this.layer = false
      }
    }

    this.bindClickEvent()
    this.loadingMiddle()

    this.preload()
    this.cols = this.calcuCols()
    this.$on('preloaded', () => {
      this.isFirstLoad = false

      this.imgsArr_c = this.imgsArr.concat([]) // 预加载完成，这时才开始渲染
      this.$nextTick(() => {
        this.isPreloading = false
        this.imgBoxEls = this.$el.getElementsByClassName('img-box')
        // console.log('图片总数', this.imgBoxEls.length)
        this.waterfall()
      })

    })
    if (!this.isMobile && !this.width) this.response()
    if (this.isMobile && this.enablePullDownEvent) this.pullDown()
    this.scroll()
  },
  watch: {
    isPreloading(newV, oldV) {
      if (newV) {
        setTimeout(() => {
          if (!this.isPreloading) return // 500毫秒内预加载完图片则不显示加载动画
          this.isPreloading_c = true
        }, this.loadingTimeOut)
      } else {
        this.isPreloading_c = false
      }
    },
    imgsArr(newV, oldV) {
      if (oldV.length > 0 && newV[0] && !newV[0]._height) {
        // console.log('reset')
        this.reset()
      }
      this.preload()
    }
  },
  methods: {
    layer_off: function(event) {
      // 先撤销底层的 tabindex 封禁 (使用tab切换时防止光标在底层的)

      // 点击弹窗空白位置或按下 esc 时关闭弹出层 (假设已聚焦到div)
      if (this.layer) { // 要避免有延迟时的连续点击
        this.layer = false
        window.history.go(-1) // 将 url 恢复
      }
    },
    layer_on: function(event) {
      /* 传参 注意必须是整数类型
       * 弹出层, 预装色块
       * 不触发 route 改变 URL
       * 必须给div聚焦 才能直接使用 ESC (在thread页面做)
       * 终止冒泡
       */
      var state = ({
        url: "2333",
        title: "~title",
        additionalKEY: "~additionalVALUE"
      })
      window.history.pushState(state, '~title', event.target.pathname)

      this.layerid = parseInt(event.target.dataset.id)
      this.layer = true

      // 弹出层时要禁止 tab 切换到底层 (给其他层设置tabindex使其禁止)
      event.preventDefault()
    },

    // ==1== 预加载
    preload(src, imgIndex) {
      this.imgsArr.forEach((imgItem, imgIndex) => {
        if (imgIndex < this.loadedCount) return // 只对新加载图片进行预加载
        // 无图时
        if (!imgItem[this.srcKey]) {
          this.imgsArr[imgIndex]._height = '0'
          this.loadedCount++

          // 支持无图模式
          if (this.loadedCount == this.imgsArr.length) {
            this.$emit('preloaded')
          }
          return
        }

        var oImg = new Image()
        oImg.src = imgItem[this.srcKey]
        oImg.onload = oImg.onerror = (e) => {

          this.loadedCount++
          // 预加载图片，计算图片容器的高
          this.imgsArr[imgIndex]._height = e.type == 'load' ? Math.round(this.imgWidth_c / (oImg.width / oImg.height)) : (this.isMobile ? this.imgWidth_c : this.imgWidth)
          if (e.type == 'error') {
            this.imgsArr[imgIndex]._error = true
            this.$emit('imgError', this.imgsArr[imgIndex])
          }

          if (this.loadedCount == this.imgsArr.length) {
            this.$emit('preloaded')
          }
        }
      })

    },
    // ==2== 计算cols
    calcuCols() { // 列数初始化
      var waterfallWidth = this.width ? this.width : window.innerWidth
      var cols = parseInt(waterfallWidth / this.colWidth)
      cols = cols === 0 ? 1 : cols
      return this.isMobile ?
        2 :
        (cols > this.maxCols ? this.maxCols : cols)
    },
    // ==3== waterfall布局
    waterfall() {
      if (!this.imgBoxEls) return
      // console.log('waterfall')
      var top, left, height, colWidth = this.isMobile ? this.imgBoxEls[0].offsetWidth : this.colWidth
      if (this.beginIndex == 0) this.colsHeightArr = []
      for (var i = this.beginIndex; i < this.imgsArr.length; i++) {
        if (!this.imgBoxEls[i]) return
        height = this.imgBoxEls[i].offsetHeight
        if (i < this.cols) {
          this.colsHeightArr.push(height)
          top = 0
          left = i * colWidth
        } else {
          var minHeight = Math.min.apply(null, this.colsHeightArr) // 最低高低
          var minIndex = this.colsHeightArr.indexOf(minHeight) // 最低高度的索引
          top = minHeight
          left = minIndex * colWidth
          // 设置元素定位的位置
          // 更新colsHeightArr
          this.colsHeightArr[minIndex] = minHeight + height
        }

        this.imgBoxEls[i].style.left = left + 'px'
        this.imgBoxEls[i].style.top = top + 'px'
      }

      this.beginIndex = this.imgsArr.length // 排列完之后，新增图片从这个索引开始预加载图片和排列

    },

    // ==4== resize 响应式
    response() {
      window.addEventListener('resize', () => {
        var old = this.cols
        this.cols = this.calcuCols()
        if (old === this.cols) return // 列数不变直接退出
        this.beginIndex = 0 // 开始排列的元素索引
        this.waterfall()
        if (this.over) this.setOverTipPos()
      })
    },

    // ==5== 滚动触底事件
    scrollFn() {
      var scrollEl = this.$refs.scrollEl
      if (this.isPreloading) return
      var minHeight = Math.min.apply(null, this.colsHeightArr)
      if (scrollEl.scrollTop + scrollEl.offsetHeight > minHeight - this.reachBottomDistance) {

        if (this.end) {
          this.waterfallOver()
        } else {
          this.isPreloading = true
          // console.log('scrollReachBottom')
          this.$emit('scrollReachBottom') // 滚动触底
        }
      }
    },
    scroll() {
      this.$refs.scrollEl.addEventListener('scroll', this.scrollFn)
    },
    waterfallOver() {
      this.$refs.scrollEl.removeEventListener('scroll', this.scrollFn)
      this.isPreloading = false
      this.over = true
      this.setOverTipPos()
    },
    setOverTipPos() {
      var maxHeight = Math.max.apply(null, this.colsHeightArr)
      this.$nextTick(() => {
        this.$refs.over.style.top = maxHeight + 'px'
      })
    },
    // ==6== 点击事件绑定
    bindClickEvent() {
      this.$el.querySelector(".vue-waterfall-easy")
        .addEventListener('click', e => {
          var targetEl = e.target;
          if (e.target.className.indexOf('over') !== -1) return
          if (targetEl.className.indexOf("img-box") != -1) return
          while (targetEl.className.indexOf("img-inner-box") == -1) {
            targetEl = targetEl.parentNode;
          }
          var index = targetEl.getAttribute("data-index");
          this.$emit('click', e, {
            index,
            value: this.imgsArr_c[index],
          })
        })
    },
    // ==7== 下拉事件
    pullDown() {
      var scrollEl = this.$el.querySelector('.vue-waterfall-easy-scroll')
      //var scrollEl = Element.querySelector('body')
      var startY
      scrollEl.addEventListener('touchmove', (e) => {

        if (scrollEl.scrollTop === 0) {
          var t = e.changedTouches[0]
          if (!startY) startY = t.pageY
          var pullDownDistance = t.pageY - startY
          if (pullDownDistance > 0) {
            e.preventDefault()
          }
          this.$emit('pullDownMove', pullDownDistance)
        }
      })
      scrollEl.addEventListener('touchend', (e) => {
        if (scrollEl.scrollTop === 0) {
          startY = NaN
          this.$emit('pullDownEnd')
        }
      })

    },
    // other
    loadingMiddle() {
      // 对滚动条宽度造成的不居中进行校正
      var scrollEl = this.$el.querySelector('.vue-waterfall-easy-scroll')
      var scrollbarWidth = scrollEl.offsetWidth - scrollEl.clientWidth
      this.$el.querySelector('.loading').style.marginLeft = -scrollbarWidth / 2 + 'px'
    },
    reset() {
      this.imgsArr_c = []
      this.beginIndex = 0
      this.loadedCount = 0
      this.isFirstLoad = true
      this.isPreloading = true
      this.scroll()
      this.over = false
    }
  }
}
</script>
