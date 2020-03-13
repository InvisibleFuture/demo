<template>
<div id="thread">
  <div>
  <!--section class="thread" @click.stop v-if="Object.keys(thread).length != 0"-->
  <section class="thread" @click.stop v-if="Object.keys(thread).length != 0">
    <div class="thread_title" v-if="Object.keys(thread).length != 0">
      <div class="post_is_original "><img src="//www-static.diyidan.net/static/image/post_is_original_logo.png?v=c4183c2a12a7f239a458b0dac14c135d"></div>
      <div class="post_is_digest"><img src="//www-static.diyidan.net/static/image/post_is_digest_logo.png?v=9b0f46baaee318150be35922db5b5f38"></div>
      <h1>{{ thread.subject }}</h1>
      <span onclick=" document.getElementById('textarea').scrollIntoView(true)">
        <svg class="icon" style="margin-top:-4px; width: 26px; height: 26px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21687"><path d="M731.733333 509.866667c-12.8 0-25.6-8.533333-29.866666-21.333334-21.333333-61.866667-76.8-89.6-76.8-89.6-14.933333-8.533333-21.333333-27.733333-12.8-42.666666s27.733333-21.333333 42.666666-12.8c2.133333 2.133333 76.8 40.533333 106.666667 125.866666 6.4 17.066667-2.133333 34.133333-19.2 40.533334h-10.666667z" fill="#FBAA00" p-id="21688"></path><path d="M541.866667 177.066667c185.6 0 334.933333 151.466667 334.933333 334.933333S725.333333 849.066667 541.866667 849.066667c-51.2 0-100.266667-10.666667-145.066667-34.133334l-12.8-6.4h-138.666667v-138.666666l-6.4-12.8c-21.333333-46.933333-34.133333-96-34.133333-145.066667 0-183.466667 151.466667-334.933333 337.066667-334.933333m0-59.733334C324.266667 117.333333 147.2 294.4 147.2 512c0 61.866667 14.933333 119.466667 40.533333 170.666667v145.066666c0 21.333333 17.066667 38.4 38.4 38.4h145.066667c51.2 25.6 108.8 38.4 170.666667 38.4 217.6 0 394.666667-177.066667 394.666666-394.666666 0-215.466667-177.066667-392.533333-394.666666-392.533334z" p-id="21689"></path></svg>
        回复
      </span>

      <div class="clearfix" style="font-size: 12px; color: #7f7f7f;margin-right: -72px;position: relative;">
        来自版区：
        <a style="color: #ffaa00;" href="/list3">{{ thread.forumname }}</a>
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

    <!-- 点赞, 复制, 打印, 分享 -->
    <amap :data="maps.data"></amap>
    <journey :days="days"></journey>
    <!--share :data="thread"></share-->
    <action :data="thread"></action>

    <!--div class="thread_main" v-html="first.message_fmt" v-if="Object.keys(first).length != 0"></div-->

    <!-- 附件 注意这个url会直接暴露附件真实地址, API还需要修改--
    <div class="files" v-if="Object.keys(thread).length != 0">
      <ul>
        <li v-for="r in first.filelist" v-bind:key="r.id">
          <a :href="r.url" :download="r.orgfilename" v-text="r.orgfilename"></a>
          <time v-text="r.create_date_fmt"></time>
        </li>
      </ul>
    </div-->
  </section>
  <section @click.stop class="post" id="post">
      <!-- 只有一级回复 -->
      <ul>
        <li v-for="item in postlist" v-bind:key="item.id">
          <div><avatar :user="item.user"></avatar></div>
          <div>
            <name :user="item.user"></name>
            <level :user="item.user"></level>
            <span class="master" v-if="item.user.uid == thread.uid">Master</span>
            <span class="floor"># {{ item.floor }}</span>
            <p>{{ item.message }}</p>
            <time>{{ item.create_date_fmt }}</time>
          </div>
        </li>
        <li v-if="online">
          <div><img :src="user.avatar_url" onclick="gotoUserPage('/user6294360860113072660')" :alt="thread.user.username"></div>
          <div style="display:flex; flex-direction: column; padding: 1em; border: 1px dashed transparent; background: linear-gradient(white,white) padding-box, repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.25em,white 0,white 0.75em);">
            <textarea id="textarea" v-model="form.message" placeholder="内容" name="message" v-on:keyup.ctrl.enter="submit"></textarea>
            <div id="textareas">
              <button title="Alt + Enter" @click="submit">回复</button>
              <!--span>1 / 1024</span-->
            </div>
          </div>
        </li>
      </ul>
  </section>
  </div>

  <aside v-if="Object.keys(thread).length != 0">
    <!-- Component : author information -->
    <card :user="thread.user"></card>
  </aside>
</div>
</template>

<script>
import axios from 'axios'

import action from './action/main.vue'
//import share from '@/components/thread/share.vue'
import amap    from '@/components/thread/amap.vue'
import journey from '@/components/thread/journey.vue'

import level  from '@/components/user/level.vue'
import avatar from '@/components/user/avatar.vue'
import name   from '@/components/user/name.vue'
import card   from '@/components/user/card.vue'

export default {
  name: 'thread',
  components: {
    action, 
    avatar, name, level, card,
    amap,journey, //share
  },
  props: ['tid', 'data'],
  //props: {
  //  tid: {
  //    type: Number,
  //    default: 0
  //  },
  //  data: {
  //    type: Object,
  //    default: function(){
  //      return {}
  //    }
  //  }
  //},
  data() {
    return {
      online: this.$store.state.token,
      token: this.$store.state.token,
      user: this.$store.state.user,
      id: 0,
      thread: {
        fid: "1",
        tid: "412",
        top: "3",
        uid: "104057",
        subject: "川西环线",
        create_date: "1577720170",
        last_date: "1583922693",
        views: "484",
        posts: "10",
        images: "0",
        files: "0",
        mods: "0",
        closed: "0",
        rbid: "13952",
        firstpid: "456",
        lastuid: "104112",
        lastpid: "621",
        digest: "1",
        likes: "0",
        create_date_fmt: "2月前",
        last_date_fmt: "1小时前",
        username: "逍遥游",
        user_avatar_url: "view/img/avatar.png",
        user: {
            uid: "104057",
            gid: "1",
            username: "逍遥游",
            threads: "0",
            posts: "7",
            credits: "0",
            golds: "0",
            rmbs: "0",
            avatar: "0",
            digests: "0",
            digests_3: "0",
            groupname: "管理员组",
            avatar_url: "view/img/avatar.png",
            avatar_path: "",
            online_status: 1
        },
        forumname: "逍遥自驾",
        lastusername: "Last",
        img: "http://store.is.autonavi.com/showpic/77cc787c37338b087792f58c1797c2e6",
        url: "thread-412.htm",
        user_url: "user-104057.htm",
        top_class: "top_3",
        pages: 1,
        like: 0
      },
      days: [],
      maps: {},
      postlist: [],
      form: {
        message: '',
        doctype: 1, // 默认类型1, 是文本回帖
        return_html: 0, // 1 是返回 html 片段, 0 是返回 json. 需要从中取得新的pid
        quotepid: 0, // 引用的 pid, 默认0不引用
        lock: false, // 锁定防止连续提交
      },
    }
  },
  mounted: function() {
    // 给弹出层聚焦以支持使用Esc关闭, 但独立的 thread 没有 layer
    const aNode = document.getElementById('layer')
    if (aNode) {
      aNode.focus()
      this.id = this.tid
      this.thread = this.data
      this.fetchMaps(this.data.rbid) // 读路数数据
      this.fetchData() // 读到 post 时才触发加载
    } else {
      this.id = this.$route.params.id
      this.getThread(this.id)// 不是從列表訪問, 需要單獨獲取主題數據
    }
  },
  methods: {
    submit: function() {
      if (this.form.message == '' || this.form.lock) {
        return
      }
      this.form.lock = true // 锁定发帖按钮, 防止重复发帖
      let server = this.$store.state.server.master.domain
      let bodyFormData = new FormData()
      bodyFormData.set('tid', this.thread.tid)
      bodyFormData.set('message', this.form.message)
      bodyFormData.set('doctype', this.form.doctype)
      bodyFormData.set('return_html', this.form.return_html)
      bodyFormData.set('quotepid', this.form.quotepid)
      axios({
        method: 'post',
        url: server+'/?post-create.htm?ajax=1&bbs_token='+this.token,
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data'}
      }).then(r => {
        // 登陆失效会返回 302 重定向且指向 login.html, 待前端完全剥离, 使之返回 401
        console.log(r.data)
        if (r.data.code == "0") {
          r.data.message.user_avatar_url = server+'/'+r.data.message.user_avatar_url
          r.data.message.user.avatar_url = server+'/'+r.data.message.user.avatar_url
          this.postlist.push(r.data.message)
          this.form.message = '' // 只在发帖成功时才清空输入框
          this.form.lock = false // 解锁发帖按钮
        }else{
          // 返回了错误信息, 回收已经添加的元素
          this.form.lock = false // 失败也解锁
        }
      })
      // 当返回的http状态码错误时 回收已经添加的元素
      this.form.lock = false // 解锁发帖按钮
    },
    base: function(data){
        var arr_tmp = [], time_tmp = data[0].start
        var start = '', end = ''
        var scape = 0, distance = 0, drive_time = 0
        data.forEach((item, i)=>{
            if (item.type=='stay') {
              scape++
            }else{
              // 为当日统计属性
              drive_time = drive_time + item.drive_time
              distance = distance + item.distance

              // 为行程计算属性
              item.drive_time = this.formatSeconds(item.drive_time)
              item.distance = Math.round(item.distance/1000) + "公里"
            }

            let dateA = new Date(item.start.replace(/-/g, "/"))
            let dateB = new Date(time_tmp.replace(/-/g, "/"))
            if(dateA.setHours(0, 0, 0, 0) != dateB.setHours(0, 0, 0, 0)){
                this.days.push({
                  open: false,
                  start: arr_tmp[0].type=='stay'?arr_tmp[0].title:arr_tmp[1].title, //item.title,
                  end: arr_tmp[arr_tmp.length-1].type=='stay'?arr_tmp[arr_tmp.length-1].title:item.title,
                  scape: scape + '个景点',
                  distance: Math.round(distance/1000) + " Km",
                  drive_time: this.formatSeconds(drive_time),
                  children: arr_tmp,
                })
                time_tmp = item.start
                arr_tmp = []
                scape = 0
                distance = 0
                drive_time = 0
            }
            arr_tmp.push(item)
            if(i+1 >= data.length){
                this.days.push({
                  open: false,
                  start: arr_tmp[0].type=='stay'?arr_tmp[0].title:arr_tmp[1].title,
                  end: arr_tmp[arr_tmp.length-1].type=='stay'?arr_tmp[arr_tmp.length-1].title:item.title,
                  scape: scape + '个景点',
                  distance: Math.round(distance/1000) + " Km",
                  drive_time: this.formatSeconds(drive_time),
                  children: arr_tmp,
                })
            }
        })
        //console.log(this.days)
    },
    formatSeconds: function (value) { // 秒数转叙述时间
      	var secondTime = parseInt(value);
      	var minuteTime = 0;
      	var hourTime = 0;
      	if(secondTime > 60) {
      		minuteTime = parseInt(secondTime / 60);
      		secondTime = parseInt(secondTime % 60);
      		if(minuteTime > 60) {
      			hourTime = parseInt(minuteTime / 60);
      			minuteTime = parseInt(minuteTime % 60)
      		}
      	}
      	var result = "" //+ parseInt(secondTime) + "秒";
      	if(minuteTime > 0) {
      		result = "" + parseInt(minuteTime) + "分" + result;
      	}
      	if(hourTime > 0) {
      		result = "" + parseInt(hourTime) + "小时" + result;
      	}
      	return result;
    },
    fetchMaps: async function(id) { // 從路書 API 取得數據
      let server = this.$store.state.server.master.domain
      axios.get( server + '//api/v1/rb/rb?id='+id+'&token='+this.token).then(r => {
        if(r.data.error_code == 0 && r.data.data.length > 0){
          r.data.data[0].data = JSON.parse(r.data.data[0].data)
          this.maps = r.data.data[0]
          this.base(r.data.data[0].data)
        }else{
          console.log("没有获得数据")
        }
      })
    },
    fetchData: async function() {
      let server = this.$store.state.server.master.domain
      axios.get( server + '/thread-' + this.id + '.htm?ajax=1&bbs_token='+this.token).then(r => {
        r.data.message.forEach((item, i) => {
          item.user_avatar_url = server+'/'+item.user_avatar_url
          item.user.avatar_url = server+'/'+item.user.avatar_url
        })
        this.postlist = r.data.message
      })
    },
    getThread: async function(id){
      let server = this.$store.state.server.master.domain
      axios.get( server + '/thread-p.htm?ajax=1&tid='+this.id+'&bbs_tokenn='+this.token).then(r => {
        r.data.message.user_avatar_url = server+'/'+r.data.message.user_avatar_url
        r.data.message.user.avatar_url = server+'/'+r.data.message.user.avatar_url
        this.thread = r.data.message
        this.fetchMaps(this.thread.rbid) // 讀路書数据
        this.fetchData() // 讀取回帖列表
      })
    },
  }
}
</script>

<style lang="less">
ul.share {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  li {
    margin: 10px;
    font-size: 32px;
  }
}
#thread {
    width: 100%;
    max-width: 1000px;
    height: auto;
    margin: 0 auto;
    padding-bottom: 40px;
    padding-top: 30px;
    overflow: auto;
    zoom: 1;
    display: flex;
    > div {
      flex: 1;
      margin: 0 1rem;
    //box-shadow: 0 0 8px #fafafa;
    }
    .thread_main {
        padding: 0 20px;
        img {
            max-width: 100%;
            border: none;
        }
    }
    aside {
        margin: 0 1rem 0 0;
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
    }
}

/* 使用模拟输入框 */
#textarea {
  resize: none;
  box-sizing: border-box;
  min-height: 80px;
  width: 100%;
  padding: 1rem;
  outline: 0;
  border: none;
  border-radius: 12px 12px 0 0;
  background: rgba(200, 200, 200, .1);
  //word-wrap: break-word;
  //overflow-x: hidden;
  //overflow-y: auto; //超过最大高度就出现滚动条
  //_overflow-y: visible;
}

#textareas {
    overflow: hidden;
    border-radius: 0 0 12px 12px;
    background: rgba(200, 200, 200, .1);
    display: flex;
    justify-content: flex-end;
    button {
        border: none;
        outline: 0;
        padding: 1rem;
        //border-radius: 0 12px 0 12px;
        background: rgba(200, 200, 200, .3);
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
.thread {
    width: 100%;
    max-width: 720px;
    margin-bottom: 20px;
    background: #fff;
    margin: 0 auto;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
}
.post {
    width: 100%;
    max-width: 720px;
    margin-bottom: 10px;
    background: #fff;
    margin: 0 auto;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
    //background: #ffcccc;
    //padding-left: 20px;
    //padding-right: 20px;
    //margin-bottom: 30px;
    //border-top: 1px solid #f8f8f8;
    ul {
        //background: #c75aff;
        list-style: none;
        padding: 0;
        margin: 1rem 0 0 0;
        li {
            //background: #242424;
            //margin-top: 20px;
            padding: 8px 15px 16px 15px;
            display: flex;
            flex-direction: row;
            justify-content:space-between;
            div:first-child {
                padding-right: 20px;
            }
        }
    }
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
    width: 75px;
    border-radius: 15px;
    -o-border-radius: 15px;
    -moz-border-radius: 15px;
    letter-spacing: 2px;
    line-height: 30px;
    text-align: left;
    padding-left: 5px;
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

@media screen and (max-width:800px) {
  #thread {
    padding-top: 0;
    > div {
      margin: 0 0;
    }
  }
  aside {
    display: none;
  }
}
</style>
