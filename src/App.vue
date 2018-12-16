<template>
<div id="app">
  <header id="header">
    <nav>
      <ul class="nav">
        <li v-for="item in navs">
          <router-link :to="item.url">{{ item.name }}</router-link>
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
      ]
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

#main {
}

#footer {
    display: none;
    background: #ff1414;
}
</style>
