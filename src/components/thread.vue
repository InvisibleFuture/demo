<template>
<div id="thread">
  <section class="thread" @click.stop v-if="Object.keys(thread).length != 0">

    <div class="thread_title">
      <div class="post_is_original "><img src="//www-static.diyidan.net/static/image/post_is_original_logo.png?v=c4183c2a12a7f239a458b0dac14c135d"></div>
      <div class="post_is_digest"><img src="//www-static.diyidan.net/static/image/post_is_digest_logo.png?v=9b0f46baaee318150be35922db5b5f38"></div>
      <h1>{{ thread.subject }}</h1>
      <span onclick="wantSendComment()">回复</span>

      <div class="clearfix" style="font-size: 12px; color: #7f7f7f;margin-right: -72px;position: relative;">
        来自版区：
        <a style="color: #ffaa00;" href="/main/area/104002/1">{{ thread.forumname }}</a>
        <!--
          <em style="float: right;display: inline-block;border:6px solid transparent;border-top-color: #333;vertical-align: -6px;margin-left: 4px;margin-top: 12px;"></em>
          <em class="quanbu_box" style="float: right;color: #333;cursor: pointer;">
            查看全部
          </em>

          <ul class="quanbu_louzhu" style="display: none; position: absolute;right: 0px;top: 28px;line-height: 30px;color: #333;background: #fff;color: #666; z-index: 2;width: 80px;height: auto;text-align: center;border: 1px solid #eee;text-indent: -5px;box-shadow: 0 0 5px #eee;cursor: pointer;">
            <li class="check_all" style="border-bottom: 1px solid #eee;">查看全部</li>
            <li class="check_louzhu" style="border-bottom: 1px solid #eee;">只看楼主</li>
            <li id="delete_post_click" data-userid="6294360860121860229" style="display: none" onclick="showMessagePopupDelete('真的要删除帖子吗？','.post_edit_message_dialog_delete','6294630120653976033')">删除本帖</li>
          </ul>
          -->
      </div>
    </div>

    <!--  first  -->

    <!-- 主贴 最好避免直接插入标签防止 xss 攻击 -->
    <div class="thread_main" v-html="first.message_fmt"></div>

    <!-- 附件 注意这个url会直接暴露附件真实地址, API还需要修改-->
    <div class="files">
      <ul>
        <li v-for="r in first.filelist">
          <!-- 要判断是否有权下载, 否则不提供链接并提示 -->
          <a :href="r.url" :download="r.orgfilename" v-text="r.orgfilename"></a>
          <time v-text="r.create_date_fmt"></time>
        </li>
      </ul>
    </div>



    <div id="post" class="post">
      <!-- 只有一级回复 -->
      <ul>
        <li v-for="item in postlist">
            <!-- 'http://127.0.0.1/'+ -->
          <div><img :src="item.user.avatar_url" /></div>
          <div>
            <span class="name">{{ item.user.username }}</span>
            <span class="level">Lv{{ item.user.gid }}</span>
            <span class="master" v-if="item.user.uid == thread.uid">Master</span>
            <span class="floor"># {{ item.floor }}</span>
            <p>{{ item.message }}</p>
            <time>{{ item.create_date_fmt }}</time>

            <!-- 操作 或许可以拆解到其他层 -->
            <ul v-if="0 > 1">
              <li>分享</li>
              <li>收藏</li>
              <li>投币</li>
            </ul>

            <!-- 推荐 该位置也可能不必要 -->
            <ul v-if="0 > 1">
              <li>震惊!</li>
              <li>发现!</li>
              <li>竟然!</li>
            </ul>

          </div>
        </li>
        <li v-if="login">
          <div><img :src="first.user.avatar_url" onclick="gotoUserPage('/user6294360860113072660')" :alt="first.user.username"></div>
          <div>
            <div id="textarea" v-text="textarea" contenteditable="true"></div>
            <div id="textareas">
              <button title="Alt + Enter">回复</button>
              <span>1 / 1024</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </section>

  <aside v-if="Object.keys(thread).length != 0">

    <!-- Component : author information -->
    <div class="author" @click.stop>
      <div class="user_head_div">
        <img :src="first.user.avatar_url" onclick="gotoUserPage('/user6294360860113072660')" :alt="first.user.username">
        <div class="ie2">
          <p>
            <span onclick="gotoUserPage('/user6294360860113072660')">{{ first.user.username }}</span>
            <span class="ie2">Lv&nbsp;12</span>
          </p>
          <p class="ie2">「今でもあなたは私の光。」</p>
        </div>
      </div>
      <div class="follow_div">
        <span id="post_detail_follow_btn" class="follow_span" style="display: none" onclick="setRelation(this, '6294360860113072660')">关注</span>
        <span id="post_detail_user_login" class="follow_span" style="" onclick="do_login()">关注</span>
        <p><span style="margin-right: 20px;">粉丝：3324</span><span>糖果：8935</span></p>
      </div>
    </div>

    <div class="recommend" @click.stop>
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
import axios from 'axios'

export default {
  name: 'thread',
  props: {
    tid: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      login: true,
      id: 0,
      thread: {},
      first: {},
      postlist: {},
      textarea: "这是回复内容"
    }
  },
  mounted: function() {

    // 给弹出层聚焦以支持使用Esc关闭, 但是好像独立的 thread 没有 layer
    const aNode = document.getElementById('layer')
    if (aNode) {
      aNode.focus()
      this.id = this.tid
    } else {
      this.id = this.$route.params.id
    }

    // 非服务端渲染时需要自己获取数据, 这种判断方式非常不优雅, 需要考虑将它组件化

    this.fetchData()
  },
  methods: {
    fetchData: async function() {
      let server = this.$store.state.server.master.domain
      axios.get( server + '/thread-' + this.id + '.htm?ajax=1').then(r => {
        this.thread = r.data.message.thread,
        this.first = r.data.message.first,
        this.postlist = r.data.message.postlist
      })
    },
    postMsg: async function() {
      // 检查合法性, 喵喵喵?
      axios.post('/api.htm', {
        type: 'post',
        tid: 'Fred',
        msg: 'Flintstone'
      }).then(r => {
        let code = r.data.code
        if (code == 0) {
          // 发表成功, 不必提示, 将回复的队列到界面显示
        } else {
          // 报错
        }
      })
    }
  }
}
</script>

<style lang="less">
#thread {
    width: 1000px;
    height: auto;
    margin: 0 auto;
    padding-bottom: 40px;
    padding-top: 30px;
    overflow: auto;
    zoom: 1;
    .thread_main {
        padding: 0 20px;
        img {
            max-width: 100%;
            border: none;
        }
    }
    aside {
        width: 290px;
        float: right;
        .recommend {
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
                li:hover {
                    color: #FD4C86;
                    background: #fafafa;
                    //transform: scale(2);
                    transition: all 0.3s linear;
                }
            }
        }
        .author {
            margin: 0 0 10px;
            border-radius: 4px;
            color: #656565;
            background-color: #fff;
            position: relative;
            overflow: hidden;
            .user_head_div {
                background: #efefef;
                display: flex;
                padding: 10px;
                img {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                }
                .ie2 {
                    padding: 10px 0 0 10px;
                }
            }
            .follow_div {
                padding: 10px;
            }
        }
    }
}

#forum #thread {
    //padding-top: 30px;
}
/* 使用模拟输入框 */
#textarea {
    min-height: 100px;
    max-height: 800px;
    padding: 1rem;
    outline: 0;
    border-radius: 3px 3px 0 0;
    background: rgba(200, 200, 200, .1);
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto; //超过最大高度就出现滚动条
    _overflow-y: visible;
}
#textareas {
    overflow: hidden;
    border-radius: 0 0 3px 3px;
    background: rgba(200, 200, 200, .1);
    button {
        border: none;
        outline: 0;
        padding: 1rem;
        background: rgba(200, 200, 200, .1);
    }
    span {
        //
    }
}

.files > ul {
    list-style: none;
    padding: 10px 0;
    margin: 0;
}

.files > ul > li {
    padding: 5px;
}
.files > ul > li > a {
    color: #FD4C86;
}
.post {
    /*background: #ffcccc*/
    padding-left: 20px;
    margin-bottom: 30px;
    padding-right: 20px;
    border-top: 1px solid #f8f8f8;
}
.post ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.post ul > li {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    /*justify-content:space-between*/
}

.post ul > li > div:first-child {
    padding-right: 20px;
}
.post ul > li > div:first-child > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.post ul > li > div:nth-child(2) {
    flex: 1;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #f8f8f8;
}

/* 二级回复作调整 */
.post li ul > li > div:first-child {
    padding: 0 5px;
}
.post li ul > li > div:first-child > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}
.post li ul > li > div:nth-child(2) {
    padding-bottom: 0;
    border-bottom: none;
}

.post .name {
    height: 16px;
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    color: #4c4c4c;
}
.post .level {
    font-size: 12px;
    margin: 0 4px;
    padding-left: 3px;
    padding-right: 3px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    background: #FD4C86;
    color: #fffcdf;
    vertical-align: middle;
    -webkit-transform: scale(0.85);
    -moz-transform: scale(0.85);
    -ms-transform: scale(0.85);
    transform: scale(0.85);
    border-radius: 2px;
    -o-border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    display: inline-block;
}
.post .master {
    display: inline-block;
    font-size: 12px;
    width: 32px;
    height: 15px;
    line-height: 15px;
    font-size: 12px;
    padding-left: 3px;
    padding-right: 3px;
    text-align: center;
    vertical-align: bottom;
    color: #fff !important;
    background: #c75aff;
    -webkit-transform: scale(0.85);
    -moz-transform: scale(0.85);
    transform: scale(0.85);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
.post .floor {
    padding-right: 10px;
    color: #868686;
    display: inline-block;
    font-size: 12px;
    float: right;
}

.post p {
    display: inline-block;
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    color: #3d464d;
    margin-top: 6px;
    word-break: break-word;
    overflow: hidden;
    pointer-events: none;
    user-select: none;
}
.post time {}

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
.thread_title span {
    height: 30px;
    width: 40px;
    border-radius: 15px;
    -o-border-radius: 15px;
    -moz-border-radius: 15px;
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

.clearfix {
    font-size: 12px;
    color: #7f7f7f;
    margin-right: -72px;
    position: relative;
}

.thread_title {
    padding: 20px 100px 12px 35px;
    border-bottom: 1px solid #f8f8f8;
    font-weight: bold;
    line-height: 30px;
    font-size: 19px;
    color: #242424;
    position: relative;
}

.thread_title h1 {
    font-weight: bold;
    line-height: 30px;
    font-size: 19px;
    color: #242424;
    padding: 0;
    margin: 0;
}

.thread {
    width: 697px;
    float: left;
    margin-bottom: 10px;
}

.thread {
    background: #fff;
    margin: 0 auto;
    border: 1px solid #f4f4f4;
    -webkit-border-radius: 4px;
    border-radius: 4px;
}

.thread p {
    display: inline-block;
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    color: #3d464d;
    margin-top: 6px;
    word-break: break-word;
    overflow: hidden;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

ul.posts {
    list-style: none;
    padding: 0;
    margin: 0;
}
ul.posts > li {
    margin-top: 20px;
    margin-left: 70px;
    position: relative;
    /*border-bottom: 1px solid #eee;*/
}
/*
ul.posts>li:last-child {
  border: none;
}
*/

.content {
    margin-top: 20px;
    margin-left: 70px;
    position: relative;
    /*border-bottom: 1px solid #eee;*/
}

.content > div.left {
    height: 40px;
    float: left;
    margin-left: -50px;
    margin-top: 5px;
}

.content > div.left > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    -o-border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    cursor: pointer;

    display: block;
    z-index: 1;

    border: 0;
}

.content > div.right {
    width: 100%;
    border-bottom: 1px solid #f8f8f8;
}

/* post */
ul.posts > li > div.left {
    height: 40px;
    float: left;
    margin-left: -50px;
    margin-top: 5px;
}

ul.posts > li > div.left > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    -o-border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    cursor: pointer;

    display: block;
    z-index: 1;

    border: 0;
}

.user_name span {
    display: inline-block;
    font-size: 12px;
    color: #4c4c4c;
}

.user_name span.user_reply_level {
    font-size: 12px;
    margin: 0 4px;
    padding-left: 3px;
    padding-right: 3px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    background: #FD4C86;
    color: #fffcdf;
    vertical-align: middle;
    -webkit-transform: scale(0.85);
    -moz-transform: scale(0.85);
    -ms-transform: scale(0.85);
    transform: scale(0.85);
    border-radius: 2px;
    -o-border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
}

.user_name span:first-child {
    height: 16px;
    font-weight: bold;
    cursor: pointer;
}

.louzhu {
    /* width: 32px; */
    height: 15px;
    line-height: 15px;
    font-size: 12px;
    padding-left: 3px;
    padding-right: 3px;
    text-align: center;
    vertical-align: bottom;
    color: #fff !important;
    background: #c75aff;
    -webkit-transform: scale(0.85);
    -moz-transform: scale(0.85);
    transform: scale(0.85);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}

.user_name span.ie2 {
    padding-right: 10px;
    color: #868686;
    float: right;
}
</style>
