<template>
<ul id="login">
  <li>
    <a href="#login" @click="show=true">You login</a>
    <div v-if="show" @click.stop="show=false" @keyup.esc="show=false" tabindex="-1" v-focus>
      <div class="login" v-if="mode==0" v-on:click.stop>
        <h2>Login</h2>
        <ul>
          <li><input value="" placeholder="account.."></li>
          <li><input value="" placeholder="password.."></li>
          <li><button>登录</button></li>
        </ul>
        <p>还没有帐号? <span @click="mode=1">注册</span>一个</p>
      </div>
      <div class="regist" v-else @click.stop>
        <h2>Regist</h2>
        <ul>
          <li><input value="" placeholder="account.."></li>
          <li><input value="" placeholder="password.."></li>
          <li><input value="" placeholder="password re.."></li>
          <li><button>注册</button></li>
        </ul>
        <p>已有帐号? <span v-on:click="mode=0">登录</span></p>
      </div>
    </div>
  </li>
</ul>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      show: false,
      mode: 0,
      title: 'User',
      msg: '没有创建角色..'
    }
  },
  watch: {
    show: function(val) {
      //if (val) {
      //  let lay = document.getElementById('layer')
      //  focus()
      //}
    }
  },
  directives: {
    focus: {
      // 指令的定义 用于聚焦元素
      inserted: function(el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="less">
ul#login {
    flex: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    > li {
        float: right;
        > a {
            display: block;
            padding: 1.5rem;
            color: #fff;
            border-radius: 3px;
            text-decoration: none;
            transition: all 0.3s linear;
        }
        > div {
            position: fixed;
            background: rgba(255,255,255,.8);
            z-index: 999;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            outline: none;

            display: flex;
            justify-content: center;
            /* 水平居中 */
            align-items: center;
            /* 垂直居中 */
            > div {
                color: #ccc;
                background: #fff;
                width: 100%;
                max-width: 400px;
                border-radius: 3px;
                padding: 1rem 0;
                span {
                    color: #42b983;
                    //background: #ff0000;
                }
                h2 {
                    padding: 1rem;
                }
                p {
                    padding: 0.5rem 1rem;
                }
                ul {
                    list-style: none;
                    li {
                        text-align: center;
                        input {
                            border: none;
                            outline: none;
                            //border-bottom: 1px solid #e8e8e8;
                            padding: 1rem;
                            margin: 1px 0;
                            width: 95%;
                            color: #666;
                            background: #f8f8f8;
                            font-size: 1.2rem;
                            box-sizing: border-box;
                        }
                        input::-moz-placeholder {
                            color: #ccc;
                        }
                        input::-webkit-input-placeholder {
                            color: #ccc;
                        }
                        input:-ms-input-placeholder {
                            color: #ccc;
                        }
                        button {
                            border: none;
                            outline: none;
                            width: 95%;
                            padding: 0.5rem 0;
                            margin: 1rem 0;
                            background: #c3c3c3;
                            border-radius: 3px;
                            font-size: 1.5rem;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
}
</style>
