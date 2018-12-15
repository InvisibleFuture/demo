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
      <div class="content">
        <div class="left">
          <img src="static/u1.jpg" onclick="gotoUserPage('/user/home/6294360860113072660')" :alt="thread.user.username">
        </div>
        <div class="right">
          <div class="user_name">
            <span onclick="gotoUserPage('/user/home/6294360860113072660')">{{ thread.user.username }}</span>
            <span class="user_reply_level">Lv12</span>
            <span class="louzhu">楼主</span>
            <!-- span class="f2 ie2">4楼</span -->
          </div>
          <!-- 主贴 最好避免直接插入标签防止 xss 攻击 -->
          <div v-html="first.message_fmt"></div>

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

          <!--
          <p>功能一览</p>
          <ul>
            <li>全局ajax免刷新</li>
            <li>资源按需加载</li>
            <li>图像懒加载</li>
            <li>配色模式</li>
            <li>直接编辑修改主贴</li>
            <li>直接发布主贴 所见即所得</li>
            <li>当前讨论页面即时推送 免刷新</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li>行为记录 轨迹追踪</li>
            <li>数据统计 & 数据分析</li>
            <li>debug 动态调试模式</li>
            <li>组件协作开发平台</li>
            <li>A&T互联</li>
            <li></li>
            <li></li>
            <li></li>
            <li>任务奖励系统</li>
            <li>成就系统</li>
            <li>竞技场</li>
            <li>纪念碑</li>
            <li></li>
            <li>用户流向控制</li>
            <li>国际化 翻译</li>
            <li></li>
            <li></li>
            <li>3D建模在线查看</li>
            <li>Markdowm发帖</li>
            <li>图像 在线裁切</li>
            <li>语音回复</li>
            <li>在线商店</li>
            <li>库存管理</li>
            <li></li>
            <li>随机类型验证码</li>
            <li>邮件通知 x 短信通知 验证</li>
            <li></li>
            <li>代码渲染 高亮</li>
            <li>帖内回复 楼中楼</li>
            <li>关注话题动态追踪</li>
            <li>兴趣推荐</li>
            <li>关注作者</li>
            <li></li>
            <li>邀请注册</li>
            <li>社会化分享</li>
            <li>打赏 投币</li>
            <li>附件购买</li>
            <li>大会员</li>
            <li></li>
            <li>举报滥用</li>
            <li>黑名单</li>
            <li></li>
            <li>@ 帖内提名或邀请</li>
            <li>纸条, 消息, 即时聊天</li>
            <li>好友系统</li>
            <li>家族/公会 组团系统</li>
            <li>组队 组队协作任务</li>
            <li>聊天频道 分频聊天 组队聊天</li>
            <li>即时公告消息推送 管理员直接推送即时通知</li>
            <li>集结号 会员可使用金币购买集结号</li>
            <li>BGM 场景音</li>
            <li>提示音</li>
          </ul>
          -->
        </div>
      </div>
 




    <div class="post">
      <!-- 只有一级回复 -->
      <ul>
        <li v-for="item in postlist">
          <div><img :src="'http://127.0.0.1/'+item.user.avatar_url"/></div>
          <div>
            <span class="name">{{ item.user.username }}</span>
            <span class="level">Lv{{ item.user.gid }}</span>
            <span class="master" v-if="item.user.uid == thread.uid">Master</span>
            <span class="floor">{{ item.floor }}楼</span>
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
      </ul>
    </div>

    </section>

    <aside v-if="Object.keys(thread).length != 0">

      <!-- Component : author information -->
      <div class="author" @click.stop>
        <div class="user_head_div">
          <img src="static/u1.jpg" onclick="gotoUserPage('/user/home/6294360860113072660')" :alt="first.user.username">
          <div class="ie2">
            <p>
              <span onclick="gotoUserPage('/user/home/6294360860113072660')">{{ first.user.username }}</span>
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
    data () {
      return {
        id: 0,
        thread:{},
        first:{},
        postlist:{}
      }
    },
    mounted: function () {

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
      fetchData: async function () {
        axios.get('http://127.0.0.1/?thread-' + this.id + '.htm?ajax=1').then(
          // 对接收到的数据格式重新处理以与后端适配? 理想状态下收发都使用不超过二维的无序数据列
          r => (
            this.thread   = r.data.message.thread,
            this.first    = r.data.message.first,
            this.postlist = r.data.message.postlist
          )
        )
      }
    }
  }
</script>

<style>
/* Add "scoped" attribute to limit CSS to this component only
 * 全局使用色块构建 禁止使用线框!
 * 使用语义化图标 非数据禁止使用文字!
 * 避免复杂的样式表
 * 避免使用浮动属性, 优先flex
 */

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
  display:flex;
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
    margin: 0 4px 0 4px;
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
.post time {
}







/* 右侧栏: 推荐 */
#thread aside .recommend {
  color: #656565;
  background: #fff;
  border-radius: 4px;
  /*border: 1px solid #f4f4f4;*/
  padding-bottom: 20px;
  overflow:hidden;
}


/* 组件化 */
#thread {
  width: 1000px;
  height: auto;
  margin: 0 auto;
  padding: 0 0 40px 0;
  padding-top: 30px !important;
  overflow: auto; zoom: 1;
}

/* 右侧栏 维持独立高度跟随滚动*/
#thread aside {
  width: 290px;
  float: right;
}


/* 右侧栏: 作者 */
#thread aside .author {
  background-color: #fff;
  /*border: 1px solid rgba(0,0,0,.05);*/
  -webkit-border-radius: 4px;
  border-radius: 4px;
  /* height: 120px; */
  /* margin-top: 43px; */
  margin: 0 0 10px 0;
  position: relative;
  color: #656565;
  padding-bottom: 20px;
  overflow:hidden;
}

#thread aside .author img {
  border-radius: 4px 4px 0 0;
}

#thread aside .author .ie2 {
  padding: 10px 0 0 10px;
}

#thread aside .follow_div {
  padding: 0 10px 0 10px;
}









.post_is_original {
  width: 30px;
  height: 20px;
  float: left;
  margin-top: 4px;
  margin-right: 8px;
}
.post_is_original img {
  display: block;
  width: 100%;
}

.post_is_digest {
  width: 20px;
  height: 21px;
  float: left;
  margin: 5px 8px 0 0;
}
.post_is_digest img {
  display: block;
  width: 100%;
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
  min-height: 2000px;
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
ul.posts>li {
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

.content>div.left {
  height: 40px;
  float: left;
  margin-left: -50px;
  margin-top: 5px;
}

.content>div.left>img {
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


.content>div.right {
  width: 100%;
  border-bottom: 1px solid #f8f8f8;
}

/* post */
ul.posts>li>div.left {
  height: 40px;
  float: left;
  margin-left: -50px;
  margin-top: 5px;
}

ul.posts>li>div.left>img {
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
  margin: 0 4px 0 4px;
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
