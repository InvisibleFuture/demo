<template>
<div id="app">
  <header id="header">
    <nav>
      <ul class="nav">
        <li v-for="item in navs">
          <router-link :to="item.url">{{ item.name }}</router-link>
        </li>
      </ul>
      <!-- 此处判断角色登录状态 快捷键 i , 角色属于异步组件, 游客不加载这部分数据 -->
      <!--

      <li title="动态通知/ 事务通知/ 声音开关">通知</li>
      <li title="提案/ 设想/ 思路">创建</li>
      <li title="角色/ 角色属性数据 / 角色中心/设置包括声音/语言">
        <img src="./assets/logo.png">
      </li>


        <ul id="Setting">
            <li id="lang">
                <span>Language</span>
                <ul>
                  <li v-for="item in langs">
                    <router-link :to="item.url">{{ item.name }}</router-link>
                  </li>
                </ul>
            </li>
        </ul>
          -->

    </nav>
  </header>

  <main id="main">
    <transition name="fade">
      <router-view />
    </transition>
  </main>

  <footer id="footer"></footer>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      lang: 'English',
      langs: [{
          id: 666,
          name: 'English',
          url: '/'
        },
        {
          id: 666,
          name: '中文',
          url: '/'
        },
        {
          id: 666,
          name: '日本語',
          url: '/'
        },
        {
          id: 666,
          name: 'русский',
          url: '/'
        },
        {
          id: 666,
          name: '한국어',
          url: '/'
        },
        {
          id: 666,
          name: 'Korean',
          url: '/'
        }
      ],
      navs: [{
          id: 666,
          name: 'home',
          url: '/'
        },
        {
          id: 666,
          name: 'collect',
          url: 'forum-1.htm'
        }
      ]
    }
  }
}
</script>

<style lang="less">
#lang {
    display: flex;
    flex-direction: column;
    span {
        padding: 20px;
    }
    ul {
        display: flex;
        flex-direction: column;
        color: #656565;
        transition: all 0.3s linear;
    }
}
#lang:hover ul {
       color: #FD4C86;
       background: #fafafa;
       //transform: scale(2);
       transition: all 0.3s linear;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

/* .fade-leave-active, 2.1.8 版本以下 */
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

#attributes {
    position: fixed;
    top: 110px;
    right: 10px;
    left: 10px;
    bottom: 10px;
    color: #666;
}

#app {
    //position: absolute;
    //left: 0;
    //right: 0;
    //top: 0;
    //bottom: 0;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: rgba(248, 249, 251, 1);
}

* {
    margin: 0;
    padding: 0;
    //transition: all 0.3s linear;
}

//#app,
body,
html {
    font-size: 12px;
    height: 100%;
}

a {
    text-decoration: none;
}
a,
a:active {
    color: #000;
}

#header {
    color: #fff;
    background-color: #3c4146;
    border-bottom-color: #202326;
    display: flex;
    justify-content: center;
    //position: fixed;
    //top: 0;
    //left: 0;
    //z-index: 9;
    //width: 100%;

    nav {
        display: flex;
        width: 1000px;

        ul {
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

        ul.user {
            li {
                float: right;

                img {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                }
            }
        }
    }
    .logo {
        font-size: 1rem;
        padding: 0;
        color: #24292e;
        background: #444;
    }
}

// 占据全屏
#main {
    //overflow: auto;
    //position: absolute;
    //left: 0;
    //right: 0;
    //top: 0;
    //bottom: 0;
}

#footer {
    display: none;
    background: #ff1414;
}
</style>
