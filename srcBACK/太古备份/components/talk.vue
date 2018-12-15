<template>
<div id="talk">
  <!--
		<div class="windows"  v-bind:style="{width: width+'px', height:height+'px', top:top+'px', left:left+'px'}">
		</div>
		-->
  <div class="horn">
    <p v-if="info.list.length > 0">
      <marquee>{{ info.now }}</marquee>
    </p>
    <p v-if="horn.list.length > 0">
      <center>{{ horn.now }}</center>
    </p>
  </div>
  <div class="say">
    <ul>
      <li v-for="item in region.list">{{ item.name }}: {{ item.msg }}</li>
    </ul>
    <div>
      <input type="text" id="msg" @keyup.enter="chat_region" v-model="chat.region" placeholder="edit me" size="64" v-show="show.region" />
      <button v-on:click="chat_region">Send</button>
    </div>
  </div>
</div>
</template>

<!-- 降低复用率, 避免耦合件 -->
<!-- 快捷键挂载到全局 -->

<script>
export default {
  name: 'talk',
  data() {
    return {
      websock: null,
      top: 220,
      left: 130,
      width: 280,
      height: 300,
      chat: {
        region: "嗷嗷嗷嗷~w"
      },
      show: {
        region: true
      },
      region: {
        list: [{
            id: 3432,
            name: "Last",
            msg: "panana"
          },
          {
            id: 3432,
            name: "Last",
            msg: "panana"
          },
          {
            id: 3432,
            name: "Last",
            msg: "panana"
          }
        ]
      },
      horn: {
        now: "",
        show: false,
        list: [{
            id: 3432,
            name: "Last",
            msg: "pananaaa"
          },
          {
            id: 3432,
            name: "Last",
            msg: "pananabb"
          },
          {
            id: 3432,
            name: "Last",
            msg: "pananacc"
          }
        ]
      },
      info: {
        now: "公告信息,与号角在同一个位置但是..",
        time: 0,
        list: [
          "这是一条公告",
          "这是一条公告",
          "这是一条公告",
          "这是一条公告"
        ]
      }
    }
  },
  watch: {
    horn: {
      handler: function(newValue, oldValue) {
        console.log('你修改了a对象(watch deep)', newValue, oldValue)
      },
      deep: true
    }
  },
  created() {
    // 页面加载后即创建WebSocket连接
    this.initWebSocket()
  },
  destroyed() {
    //离开路由之后断开websocket连接
    this.websock.close()
  },
  methods: {
    initWebSocket() { //初始化weosocket
      const wsuri = "ws://127.0.0.1:8081/ws";
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      // this.websock.onerror = this.websocketonerror; 要限制重连次数
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() { //连接建立之后执行send方法发送数据
      let actions = {
        c: 2,
        data: {
          id: 54353,
          name: "Last",
          msg: "6666666"
        }
      }
      this.websocketsend(actions)
    },
    websocketonerror() { //连接建立失败重连
      this.initWebSocket()
    },
    websocketonmessage(e) { //数据接收
      const n = JSON.parse(e.data)
      console.log('收到数据', n)
      switch (n.c) {
        case 1:
          // 接收到的数据检查过滤关键字, 防止xxx
          // 消息盒子 向数据列追加 > 并在2s后删除
          this.region.list.push(n.data)
          setTimeout(() => {
            this.region.list.shift()
          }, 3500)
          break;
        case 2:
          // 不论是否显示, 都将信息装载到 list
          this.horn.list.push(n.data)
          // 检查主显示是否存在
          this.loopmsg()
          break;
        default:
          // error, 选择性忽略
      }
    },
    websocketsend(e) { //数据发送
      this.websock.send(JSON.stringify(e))
    },
    websocketclose(e) { //关闭 断开连接时也禁用 input?
      console.log('断开连接', e);
    },
    chat_region() { // 区域对话 发言
      if (this.chat.region != "") {
        // 发表前检查过滤关键字, 防止xxx
        let s = {
          c: 1,
          data: {
            id: 54353,
            name: "Last",
            msg: this.chat.region
          }
        }
        this.websocketsend(s)
        // 发表后清空输入框, 发表失败也忽略
      }
    },
    loopmsg() {
      // 通过递归延时.. 消息队列存在时快速显示
      // 有问题 待改进
      if (this.horn.list.length > 0) {
        this.horn.now = this.horn.list[0]
        setTimeout(() => {
          this.horn.list.shift()
          this.loopmsg()
        }, 3000)
      } else {
        setTimeout(() => {
          this.horn.list.shift()
          //this.horn.now = ""
          this.loopmsg()
        }, 8000)
      }
    }
  }
}
</script>

<style lang="less">
#talk > .say {
  position: fixed;
  bottom: 0;
  left: 100px;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 120px;
  padding: 8px;
  color: #fff;
  border-radius: 3px;
  background: rgba(100,100,100,.8);

  ul {
    display: -webkit-flex;
    display: flex;
    flex-direction: column-reverse;
    margin: 0;
    padding: 0;
    list-style: none;
    flex: 8;

    li {
      color: #fff;
    }
  }

  div {
    display: -webkit-flex;
    display: flex;
    flex: 2;

    input:focus {
      background: rgba(100,100,100,.5);
    }

    button {
      border: none;
      border-radius: 2px;
      background: rgba(100,100,100,.5);
      flex: 2;
    }

    input {
      width: 100%;
      padding: 5px;
      transition: background 0.5s;
      border: none;
      border-radius: 2px;
      outline: none;
      background: rgba(100,100,100,.8);
      flex: 8;
    }
  }
}
/* 缩减色差, 避免使用高饱和度 */
#talk {
  .windows {
    position: fixed;
    padding: 8px;
    color: #fff;
    border-radius: 3px;
    background: rgba(100,100,100,.8);
  }
  /* 世界频道号角 */
  .horn {
    font-size: 18px;
    position: fixed;
    top: 80px;
    left: 50%;
    overflow: hidden;
    width: 600px;
    margin: 0 0 0 -300px;
    padding: 5px;
    color: #f66;
    background: rgba(0,0,0,.6);

    p:nth-child(2) {
      -webkit-animation: fade 5000ms infinite;
      animation: fade 5000ms infinite;
      color: #f00;
    }

    p {
      display: inline-block;
      width: 100%;
      margin: 0;
      padding: 0;
      white-space: nowrap;
    }
  }
}
/* 号角闪烁 */
@keyframes fade {
  from {
    color: #f66;
  }

  10% {
    color: #ff6;
  }

  20% {
    color: #f66;
  }

  30% {
    color: #ff6;
  }

  50% {
    color: #f66;
  }

  to {
    color: #f66;
  }
}
@-webkit-keyframes fade {
  from {
    color: #f66;
  }

  10% {
    color: #ff6;
  }

  20% {
    color: #f66;
  }

  30% {
    color: #ff6;
  }

  50% {
    color: #f66;
  }

  to {
    color: #f66;
  }
}
/* 状态过渡 */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* ERR !!
#talk > .horn p:nth-child(2) {
	background:#ff0000;
	animation: fade 600ms infinite;
	-webkit-animation: fade 600ms infinite;
}
@keyframes fade {
	from { opacity: 1.0 }
	50% { opacity: 0.4 }
	to { opacity: 1.0 }
}

@-webkit-keyframes fade {
	from { opacity: 1.0 }
	50% { opacity: 0.4 }
	to { opacity: 1.0 }
}
*/
</style>
