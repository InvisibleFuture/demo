<template>
  <div class="author">
      <div class="user_info">
        <img src="https://xn--uesr8q.com/upload/preview/130.png" alt="img">
        <div>
          <p>
            <span>御坂</span>
            <span>Lv&nbsp;12</span>
          </p>
          <p>「今でもあなたは私の光。」</p>
        </div>
      </div>
      <div class="follow">
        <span id="post_detail_follow_btn" onclick="setRelation(this, '6294360860113072660')" class="follow_span" style="display: none;">关注</span>
        <span id="post_detail_user_login" onclick="do_login()" class="follow_span">关注</span>
        <p>
          <span style="margin-right: 20px;">粉丝：3324</span>
          <span>糖果：8935</span>
        </p>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
div.author {
    margin: 0 0 10px;
    border-radius: 4px;
    color: #656565;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    .user_info {
        background: #efefef;
        display: flex;
        padding: 10px;
        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }
        p {
            padding: 10px 0 0 10px;
        }
    }
    .follow {
        padding: 10px;
    }
}
</style>
