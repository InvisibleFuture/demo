<template>
<div id="app">
  <header id="header">
    <nav>
      <ul class="nav">
        <li v-for="item in navs">
          <router-link :to="item.url">{{ item.name }}</router-link>
        </li>
      </ul>
      <ul class="user">
        <li><a href="msg">msg 实际是和名字叠加的</a></li>
        <li>
          <a href="user">You name</a>
          <div class="msg">
            <div>
              <span>清空记录</span>
            </div>
            <ul>
              <li v-for="item in msg" :class="{new:item.new}" v-on:mouseover="reading(item.id,item.new);item.new=false">
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
    </nav>
  </header>
  <!-- img src="./assets/logo.png" -->
  <main id="main">
    <transition name="fade">
      <router-view />
    </transition>
  </main>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      navs: [{
          id: 666,
          name: 'home',
          url: '/'
        },
        {
          id: 666,
          name: 'collect',
          url: 'forum3'
        }
      ],
      msg: [{
          id: 12,
          content: "弱小 可怜又无助的 msgBox..",
          time: "5分钟前",
          new: false,
          user: {
            id: 2,
            name: "Last",
            img: "https://xn--uesr8q.com/upload/preview/131.png",
            url: "u2"
          }
        },
        {
          id: 13,
          content: "wo.. Welcome to the remote collaboration team",
          time: "5分钟前",
          new: true,
          user: {
            id: 2,
            name: "Last",
            img: "https://xn--uesr8q.com/upload/preview/131.png",
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
      }
    }
  }
}
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
    //transition: all 0.3s linear;
}
a {
    text-decoration: none;
}
a,
a:active {
    color: #000;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

/* .fade-leave-active, 2.1.8 版本以下 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: rgba(248, 249, 251, 1);
}

#header {
    color: #fff;
    background-color: #3c4146;
    border-bottom-color: #202326;
    display: flex;
    justify-content: center;

    nav {
        display: flex;
        width: 1000px;
        > ul.user {
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
                    // 相对父元素的绝对定位
                    position: absolute;
                    //visibility:hidden;
                    left: -50%;
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
                            > img {
                                width: 32px;
                                height: 32px;
                                border-radius: 50%;
                            }
                            > div {
                                width: 100%;
                                padding-left: 1rem;
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
                        > li.new::before {
                            content: "";
                            width: 5px;
                            height: 5px;
                            border-radius: 50%;
                            background: #c0ffee;
                            position: absolute;
                            right: 8px;
                            top: 12px;
                        }
                    }
                }
            }
            > li:hover {
                // 弹出 msg and setting
                background: #ff1414;
                div.msg {
                    visibility: visible;
                    //height: 400px;
                    background: rgba(50,50,50,.9);
                    transition: all 0.2s linear;
                }
            }
        }

        ul.nav {
            flex: 1;
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                float: left;
                padding: 0;
                margin: 0;

                a {
                    display: block;
                    padding: 1.5rem;
                    color: #fff;
                    border-radius: 3px;
                    text-decoration: none;
                    transition: all 0.3s linear;
                }
            }
            li:hover {
                a {
                    color: #4fffff;
                    background: rgba(150, 150, 150, 0.1);
                    transition: all 0.3s linear;
                }
            }
        }

        ul:after {
            content: "";
            display: block;
            clear: both;
        }
    }
    .logo {
        font-size: 1rem;
        padding: 0;
        color: #24292e;
        background: #444;
    }
}

#main {}

#footer {
    display: none;
    background: #ff1414;
}
</style>
