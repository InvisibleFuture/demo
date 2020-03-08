<template>
    <ul id="user">
      <li :class="{new:msgcount}">
        <a href="user">You name</a>
        <div class="msg">
          <div>
            <span>清空记录</span>
          </div>
          <ul>
            <li v-for="item in msg" v-bind:key="item.id" :class="{new:item.new}" v-on:mouseover="reading(item.id,item.new);item.new=false">
              <img :src="item.user.img">
              <div>
                <p v-text="item.content"></p>
                <a v-text="item.user.name" :href="item.user.url"></a>
                <time v-text="item.time"></time>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
</template>
<script>
export default {
    name:'user',
    data(){
        return {
            msgcount: 2,
            msg: [{
                id: 12,
                content: "弱小 可怜又无助的 msgBox..",
                time: "2分钟前",
                new: false,
                user: {
                  id: 2,
                  name: "Last",
                  img: "http://xiaoyaozj.com/upload/avatar/000/104112.png?1583608106",
                  url: "u2"
                }
              },
              {
                id: 15,
                content: "用户点击不那么频繁，但是第一请求的数据量较多，花费的时间较长，第二次请求的数据较少，比第一次请求的数据早回来，先显示在界面上，等到第一次的数据回来之后，再把数据显示，就会覆盖掉第二次的显示的数据，这样让用户体验很不好",
                time: "3分钟前",
                new: true,
                user: {
                  id: 2,
                  name: "Last",
                  img: "http://xiaoyaozj.com/upload/avatar/000/104112.png?1583608106",
                  url: "u2"
                }
              },
              {
                id: 13,
                content: "wo.. Welcome to the remote collaboration team",
                time: "15分钟前",
                new: true,
                user: {
                  id: 2,
                  name: "Last",
                  img: "http://xiaoyaozj.com/upload/avatar/000/104112.png?1583608106",
                  url: "u2"
                }
              }
            ]
        }
    },
    methods: {
      // 阅读消息时将转变为已阅状态的消息反馈给服务器, 注意必须异步执行
      async reading(id, news) {
        if (news) {
          // ajax 通知服务器, 或许可以设置一个记录池, 3s内不发送, 以降低连接数?
          console.log(id)
          // 每次读队列减少阅读计数
          this.msgcount--
          console.log(this.msgcount)
        }
      },
      msgloading() {
        // websoker 长连接更新消息队列
        // 每次入队列增加未读计数
        this.msgcount++
      }
    }
}
</script>
<style lang="less">
ul#user {
    flex: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    > li {
        float: right;
        position: relative; // 为了让 msgbox 使用绝对定位
        > a {
            display: block;
            padding: 1.5rem;
            color: #fff;
            border-radius: 3px;
            text-decoration: none;
            transition: all 0.3s linear;
        }

        > img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
        div.msg {
            // 相对父元素的绝对定位 ?
            position: absolute;
            visibility: hidden;
            opacity: 0;
            right: -50%;
            top: 50px;
            width: 300px;
            //height: 0px;
            z-index: 9999;
            border-radius: 0 0 3px 3px;
            background: rgba(50,50,50,1);
            transition: all 0.2s linear;
            > div {
                color: #555;
                padding: 5px 5px 0 0;
                text-align: right;
            }
            > ul {
                margin: 0;
                padding: 0;
                max-height: 700px;
                list-style: none;
                > li {
                    padding: 1rem;
                    display: flex;
                    position: relative;
                    transition: all 0.2s linear;
                    > img {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                    }
                    > div {
                        width: 100%;
                        padding-left: 8px;
                        p {
                            color: #ffeeee;
                        }
                        a {
                            color: #cceeee;
                        }
                        time {
                            color: #999;
                            padding-left: 1rem;
                        }
                    }
                }
                > li:hover {
                    background: rgba(50,50,50,.4);
                    transition: all 0.2s linear;
                }
                > li::before {
                    content: "";
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: #c0ffee;
                    position: absolute;
                    right: 8px;
                    top: 12px;
                    opacity: 0;
                    transition: all 0.2s linear;
                }
                > li.new::before {
                    opacity: 1;
                    transition: all 0.2s linear;
                }
            }
        }
    }
    > li:hover {
        // 弹出 msg and setting
        //background: #ff1414;
        div.msg {
            visibility: visible;
            //height: 400px;
            opacity: 1;
            background: rgba(50,50,50,.9);
            transition: all 0.2s linear;
        }
    }
    > li::before {
        content: "";
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #c0ffee;
        position: absolute;
        right: 8px;
        top: 12px;
        opacity: 0;
        transition: all 0.2s linear;
    }
    > li.new::before {
        opacity: 1;
        transition: all 0.2s linear;
    }
}
</style>
