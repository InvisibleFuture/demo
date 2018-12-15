<template>
<div id="list">
  <ul>
    <li v-for="r in list">
      <a :href="r.link"><img :src="r.img"></a>
      <p v-text="r.text"></p>
      <p>
        <span title="转采" class="repin"><i></i>11</span>
        <span title="喜欢" class="like"><i></i>1</span>
      </p>
      <div class="inner">
        <div class="line"><a href="/we8/" rel="" class="author x" v-text="r.uid"></a>&nbsp;发表到</div>
        <div class="line"><a href="/boards/3926222/" rel="" class="x" v-text="r.part"></a></div>
        <a title="评论" class="replyButton"></a>
        <p v-text="r.user.name"></p>
      </div>
    </li>
  </ul>



</div>
</template>


<script>
export default {
  name: 'List',
  data() {
    return {
      id: 9,
      name: '图像列',
      list: [{
          id: 455,
          link: 'p455',
          img: 'static/logo.png',
          text: 'texts..',
          user: {
            id: 1,
            name: '砂糖'
          }
        },
        {
          id: 455,
          link: 'p455',
          img: 'static/logo.png',
          text: 'texts..',
          user: {
            id: 2,
            name: '橘子'
          }
        }
      ],
    }
  }
}
</script>



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

.vue-waterfall-easy-container .vue-waterfall-easy > .img-box {
    position: absolute;
    box-sizing: border-box;
    width: 50%;
}

.vue-waterfall-easy-container .vue-waterfall-easy > .img-box.default-card-animation {
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
    -webkit-transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
    -webkit-transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
    background: repeating-linear-gradient(45deg, #eebbbb, #eebbbb 15px, #eeeeee 0, #eeeeee 30px);
}

.vue-waterfall-easy-container .vue-waterfall-easy .__err__ .img-wraper img {
    display: none;
}

.vue-waterfall-easy-container .vue-waterfall-easy a.img-wraper > img {
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

.vue-waterfall-easy-container > .loading.first {
    bottom: 50%;
    transform: translate(-50%, 50%);
}

.vue-waterfall-easy-container > .loading {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 6px;
    z-index: 999;
}

@keyframes ball-beat {
    .vue-waterfall-easy-container > .loading 50% {
        opacity: 0.2;
        transform: scale(0.75);
    }

    .vue-waterfall-easy-container > .loading 100% {
        opacity: 1;
        transform: scale(1);
    }
}

.vue-waterfall-easy-container > .loading.ball-beat > .dot {
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

.vue-waterfall-easy-container > .loading.ball-beat > .dot:nth-child(2n-1) {
    animation-delay: 0.35s;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

/* .fade-leave-active, 2.1.8 版本以下 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
