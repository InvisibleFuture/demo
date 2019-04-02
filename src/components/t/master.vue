<template>
<div class="master">
  <div class="title">
    <div class="post_is_original "><img src="//www-static.diyidan.net/static/image/post_is_original_logo.png?v=c4183c2a12a7f239a458b0dac14c135d"></div>
    <div class="post_is_digest"><img src="//www-static.diyidan.net/static/image/post_is_digest_logo.png?v=9b0f46baaee318150be35922db5b5f38"></div>
    <h1 v-text="title"></h1>
    <span>关注</span>
    <div class="clearfix" style="font-size: 12px; color: rgb(127, 127, 127); margin-right: -72px; position: relative;">
      来自版区：
      <a href="/main/area/104002/1" style="color: rgb(255, 170, 0);">数据</a></div>
  </div>
  <div class="main" v-text="msg"></div>
</div>
</template>

<script>
export default {
  name: 'master',
  data() {
    return {
      title: 'Idea 尚未能发起项目的a',
      msg: '没有新的公会..'
    }
  }
}
</script>

<style lang="less">
div.master {
    .title {
        padding: 0 100px 12px 0;
        border-bottom: 1px solid #f8f8f8;
        font-weight: bold;
        line-height: 30px;
        font-size: 19px;
        color: #242424;
        position: relative;
        h1 {
            font-weight: bold;
            line-height: 30px;
            font-size: 19px;
            color: #242424;
            padding: 0;
            margin: 0;
        }
        .post_is_original {
            width: 30px;
            height: 20px;
            float: left;
            margin-top: 4px;
            margin-right: 8px;
            img {
                display: block;
                width: 100%;
            }
        }
        .post_is_digest {
            width: 20px;
            height: 21px;
            float: left;
            margin: 5px 8px 0 0;
            img {
                display: block;
                width: 100%;
            }
        }
        span {
            height: 30px;
            width: 40px;
            border-radius: 15px;
            letter-spacing: 2px;
            line-height: 30px;
            text-align: left;
            padding-left: 40px;
            color: #fff;
            background: #FD4C86;
            background-size: 25px;
            cursor: pointer;
            display: inherit;
            position: absolute;
            right: -15px;
            top: 50%;
            margin-top: -30px;
            font-size: 13px;
        }
    }
    .main {
        padding: 12px 0;
        p {
            color: #666;
        }
        img {
            border-radius: 3px;
        }
    }
}
</style>
