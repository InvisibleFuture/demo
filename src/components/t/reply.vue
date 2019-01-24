<template>
<div class="reply">
  <ul>
    <li v-for="r in list">
      <div class="header">
        <img :src="r.user.avatar" :alt="r.user.name">
        <div>
          <span v-text="r.user.name"></span>
          <p>djaksdhajdka</p>
        </div>
      </div>
      <div class="content">
        <span v-text="r.user.name"></span>
        <span v-text="r.user.name"></span>
        <span v-text="r.user.name"></span>
        <span v-text="r.user.name"></span>
        <div class="ss" v-text="r.msg"></div>
      </div>
      <div class="time">发表于 <time>time</time></div>
      <div class="footer">
        <span>赞同</span>
        <span>反对</span>
        <span>12 条评论</span>
        <span>分享</span>
        <span>收藏</span>
        <span>感谢</span>
      </div>
    </li>
  </ul>
  <p>
    公会页面, 这里展示所有公会的列表
    若是带有id号, 则展示对应id的公会页面
    公会页面展示招募信息, 也是排行榜
    公会页面内是公会内务信息, 可以部分公开
    决策系统中, 需要有投票系统
    暂时还不需要协会系统
  </p>
</div>
</template>

<script>
export default {
  name: 'reply',
  data() {
    return {
      count: 12,
      list: [{
          id: 1,
          msg: 'is msg info..',
          user: {
            id: 66,
            name: 'Last',
            avatar: '666'
          }
        },
        {
          id: 1,
          msg: 'is msg info..',
          user: {
            id: 66,
            name: 'Last',
            avatar: '666'
          }
        },
        {
          id: 1,
          msg: 'is msg info..',
          user: {
            id: 66,
            name: 'Last',
            avatar: '666'
          }
        }
      ]
    }
  }
}
</script>

<style lang="less">
div.reply {
    > ul {
        > li {
            > div.header {
                display: flex;
                padding: 1rem;
                img {
                    width: 38px;
                    height: 38px;
                    border-radius: 3px;
                    background: #ccc;
                }
                div {
                    padding-left: 1rem;
                    span {
                        color: #333;
                        font-size: 1.5rem;
                    }
                    p {
                        color: #666;
                    }
                }
            }
            > div.content {
                padding: 1rem 1rem 2rem;
            }
            > div.footer {
                padding: 1rem;
            }
        }
    }
}
</style>
