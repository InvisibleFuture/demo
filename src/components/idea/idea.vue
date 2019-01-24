<template>
<div id="guild" @click.stop>
  <section class="thread">
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
    <div class="res">
        发起项目
        关注
        打赏
        赞同
    </div>
    <div class="item">
        发起项目
        由此想法衍生的项目
    </div>
    <div class="tag">
        贴标签
        此想法关联的属性, 被用于检索和关注范围推送
    </div>
    <div class="file">
        附件
        附件文件通常存储于外部服务器, 此处使用 dissoo
    </div>
    <div class="reply">
      <ul>
        <li v-for="r in reply">
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
    </div>
    <p>
      公会页面, 这里展示所有公会的列表
      若是带有id号, 则展示对应id的公会页面
      公会页面展示招募信息, 也是排行榜
      公会页面内是公会内务信息, 可以部分公开
      决策系统中, 需要有投票系统
      暂时还不需要协会系统
    </p>
  </section>

  <aside>
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

    <div class="recommend">
      <ul>
        <li>推荐1</li>
        <li>推荐1</li>
        <li>推荐1</li>
        <li>推荐1</li>
      </ul>
    </div>
  </aside>

</div>
</template>

<script>
export default {
  name: 'guild',
  data() {
    return {
      title: 'Idea 尚未能发起项目的',
      msg: '没有新的公会..',
      reply: [{
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
        },
      ],
      list: [{
          msg: '任何人都可以创建自己的公会'
        },
        {
          msg: '公会作为一个集合体接受或自主发起项目'
        },
        {
          msg: '公会招募的会员代表对其能力与品格的认可, 公会对其在内部事务上的行为负责'
        },
        {
          msg: '自由化的(任务自主参与), 无权责的'
        }
      ]
    }
  }
}
</script>

<style lang="less">
div.reply {
    >ul {
        >li {
            >div.header {
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
            >div.content {
                padding: 1rem 1rem 2rem 1rem;
            }
            >div.footer {
                padding: 1rem;
            }
        }
    }
}
#guild {
    //padding: 30px;
    //min-height: 600px;
    //text-align: center;
    //padding-bottom: 40px;
    width: 1000px;
    height: auto;
    margin: 0 auto;
    padding-bottom: 40px;
    padding-top: 30px;
    overflow: auto;
    zoom: 1;
}
section.thread {
    background: #fff;
    margin: 0 auto;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
    width: 697px;
    float: left;
    .title {
        padding: 20px 100px 12px 35px;
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
            right: 20px;
            top: 50%;
            margin-top: -26px;
            font-size: 13px;
        }
    }
    .main {
        p {
            color: #666;
        }
        img {
            border-radius: 3px;
        }
    }
}
aside {
    width: 290px;
    float: right;
}
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

div.recommend {
    color: #656565;
    background: #fff;
    border-radius: 4px;
    padding: 10px;
    overflow: hidden;
    ul {
        li {
            color: #656565;
            transition: all 0.3s linear;
        }
    }
}
</style>
