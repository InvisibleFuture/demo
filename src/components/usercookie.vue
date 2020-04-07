<style lang="less" scoped>
#user {
    li.userinfo {
        a {
            display: flex;
            align-items: center;
            img {
                margin: -3px 5px;
                width: 20px;
                height: 20px;
                border-radius: 16px;
            }
        }
        //ul {
        //    list-style: none;
        //    margin: 0;
        //    padding: 0;
        //    position: absolute;
        //    left: 0;
        //    right: 0;
        //}
    }
}
.createrb {
    span {
        display: block;
        color: #dcaf29;
        border: 1px solid #dcaf29;
        border-radius: 5px;
        padding: 5px;
        margin: -6px;
    }
}
</style>
<template>
    <ul id="user">
      <li v-if="!online">
          <user-login></user-login>
      </li>
      <li v-if="online" class="createrb">
          <a href="http://xiaoyaozj.com/editor"><span>新建路书</span></a>
      </li>
      <li v-if="online" :class="{new:msgcount}">
        <a href="user">
            <!--img :src="user.avatar_url" :alt="user.username" :title="user.username"-->
            <!--span v-text="user.username"></span-->
            <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6781"><path d="M896 704c-35.328 0-64-28.672-64-64V384c0-155.648-110.592-284.672-257.024-313.344 0-2.048 1.024-4.096 1.024-6.656C576 28.672 547.328 0 512 0S448 28.672 448 64c0 2.56 1.024 4.096 1.024 6.656-146.432 29.696-257.024 158.72-257.024 313.344v256c0 35.328-28.672 64-64 64s-64 28.672-64 64 28.672 64 64 64h768c35.328 0 64-28.672 64-64s-28.672-64-64-64zM512 1024c70.656 0 128-57.344 128-128H384c0 70.656 57.344 128 128 128z" p-id="6782"></path></svg>
            <!--You-->
        </a>
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
      <li v-if="online" class="userinfo">
        <a :href="'http://xiaoyaozj.com/my.htm'">
          <img :src="user.avatar_url" :alt="user.username" :title="user.username">
          <span v-text="user.username"></span>
        </a>
        <!--ul>
            <li>个人中心</li>
            <li>我的路书</li>
        </ul-->
      </li>
      <li v-if="online">
        <a href="http://xiaoyaozj.com/user-logout.htm" @click="userexit">
          <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1960"><path d="M951.737186 488.212224 802.424532 301.56936c-7.222495-9.027607-18.034748-14.011108-29.157064-14.011108-4.131087 0-8.300037 0.688685-12.349259 2.106987-14.957667 5.246491-24.970718 19.371186-24.970718 35.223223l0 111.98756-298.631448 0c-41.232077 0-74.656327 33.42425-74.656327 74.656327 0 41.2331 33.42425 74.656327 74.656327 74.656327l298.631448 0 0 111.98756c0 15.852036 10.013051 29.977755 24.970718 35.223223 4.049223 1.424442 8.218172 2.108011 12.349259 2.108011 11.123338 0 21.934568-4.978385 29.157064-14.013155l149.311631-186.643887C962.64563 521.221012 962.64563 501.848803 951.737186 488.212224L951.737186 488.212224zM586.628698 810.162774 362.66074 810.162774l-74.656327 0 0-0.011256c-0.199545 0-0.393973 0.011256-0.587378 0.011256-40.906665 0-74.076112-33.42425-74.076112-74.656327l0-74.656327 0-298.631448 0-74.656327 0.011256 0c0-0.199545-0.011256-0.393973-0.011256-0.587378 0-40.906665 33.429367-74.076112 74.66349-74.076112l74.656327 0 223.967958 0c41.2331 0 74.66349-33.422204 74.66349-74.656327 0-41.232077-33.429367-74.656327-74.66349-74.656327L213.340923 63.586201c-82.459037 0-149.311631 66.853617-149.311631 149.311631l0 597.262896c0 82.4662 66.853617 149.311631 149.311631 149.311631l373.286752 0c41.2331 0 74.66349-33.422204 74.66349-74.656327C661.291165 843.586001 627.861798 810.162774 586.628698 810.162774L586.628698 810.162774zM586.628698 810.162774" p-id="1961"></path></svg>
          退出
        </a>
      </li>
    </ul>
</template>
<script>
import axios from 'axios'
export default {
    components: {
        'user-login': () => import('@/components/login'),
    },
    computed: {
        online () {
            return this.$store.state.online
        },
        user () {
            return this.$store.state.user
        }
    },
    data(){
        return {
            msgcount: 2,
        }
    },
    methods: {
      userexit(e) {
        let server = this.$store.state.server.master.domain
        axios({
            method: 'get',
            url: server + '/user-logout.htm?ajax=1&bbs_token=xxxx',
        }).then(r => {
            console.log(r.data)
            this.$store.commit('settoken', '')
            //this.$store.commit('setuser', r.data.message.user)
            this.$store.commit('setonline', false)
        })
        e.preventDefault()
      },
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
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    > li {
        //float: right;
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
