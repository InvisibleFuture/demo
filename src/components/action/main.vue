<style lang="less" scoped>
  div.share {
    padding: 0 0 30px 0;
    display: flex;
    flex-direction: column;
    >ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content:center;
      >li {
        margin: 10px;
        font-size: 32px;
      }
    }
    >div {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      >div {
        width: 100%;
        max-width: 200px;
        margin: 0 auto;
      }
      >div:nth-child(2) {
        padding: 8px;
        text-align: center;
      }
    }
  }
</style>
<template>
  <div class="share">
    <ul>
      <li @click="copy()"><svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20853"><path d="M678.2375 911.76875H231.3125c-65.6625 0-119.090625-53.41875-119.090625-119.08125V345.771875c0-65.6625 53.41875-119.090625 119.090625-119.090625h446.915625c65.6625 0 119.090625 53.428125 119.090625 119.090625V792.6875c0 65.6625-53.41875 119.08125-119.08125 119.08125zM231.3125 284.95625c-33.534375 0-60.80625 27.28125-60.80625 60.815625V792.6875c0 33.534375 27.28125 60.80625 60.80625 60.80625h446.915625c33.534375 0 60.80625-27.271875 60.80625-60.80625V345.771875c0-33.534375-27.28125-60.815625-60.80625-60.815625H231.3125z" p-id="20854"></path><path d="M911.76875 653.73125V244.090625c0-72.825-59.034375-131.859375-131.859375-131.859375H345.95c-16.096875 0-29.1375 13.05-29.1375 29.1375 0 16.096875 13.05 29.1375 29.1375 29.1375h433.959375c40.640625 0 73.575 32.94375 73.575 73.575v426.05625c0 16.096875 13.05 29.1375 29.1375 29.1375 16.096875 0 29.1375-13.05 29.1375-29.1375v-16.40625z" p-id="20855"></path></svg></li>
      <li @click="print()"><svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20243"><path d="M752 528H672a32 32 0 0 1 0-64h80a32 32 0 0 1 0 64zM560 464a32 32 0 1 0 32 32 32 32 0 0 0-32-32zM736 368a32 32 0 0 1-32-32V152a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v184a32 32 0 0 1-64 0V152A96 96 0 0 1 352 56h320a96 96 0 0 1 96 96v184a32 32 0 0 1-32 32zM816 848H736v-64h80a32 32 0 0 0 32-32V432a32 32 0 0 0-32-32H208a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h64a32 32 0 0 1 0 64h-64a96 96 0 0 1-96-96V432a96 96 0 0 1 96-96h608a96 96 0 0 1 96 96v320a96 96 0 0 1-96 96zM672 968H352a96 96 0 0 1-96-96V744a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v128a96 96 0 0 1-96 96zM352 712a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32V744a32 32 0 0 0-32-32H352z" p-id="20244"></path></svg></li>
      <li @click="onlike()">
          <svg v-show="data.like==0" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8164"><path d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z" fill="#F44336" p-id="8165"></path></svg>
          <svg v-show="data.like==1" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19182"><path d="M512 923.76a96 96 0 0 1-67.84-27.76L144 595.68C32.88 484.4 28.64 302.56 134.8 190.4a288 288 0 0 1 412.96-5.76L584 220.96a32 32 0 1 1-45.28 45.28l-36.32-36.32a222.16 222.16 0 0 0-158.4-65.6h-3.2a222.4 222.4 0 0 0-160 70.16c-82.56 87.2-78.88 228.96 8 316l300 300a32 32 0 0 0 45.28 0l300.16-300.16a232.88 232.88 0 0 0 67.28-164.8 219.44 219.44 0 0 0-65.12-157.04 223.36 223.36 0 0 0-205.92-58.8 32 32 0 1 1-13.92-62.48 287.12 287.12 0 0 1 264.72 75.68 282.96 282.96 0 0 1 84.24 202.4A297.28 297.28 0 0 1 880 595.6L579.92 896a96 96 0 0 1-67.92 27.76zM640 292.32a32 32 0 1 0 32 32 32 32 0 0 0-32-32z" p-id="19183"></path></svg>
      </li>
      <li @click="shareshow = !shareshow"><svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8346"><path d="M753.371429 570.514286c-71.899429 0-135.153371 37.332114-171.695543 93.549714l-71.328915-35.664457A232.506514 232.506514 0 0 0 533.942857 526.628571c0-29.9008-5.851429-58.426514-16.120686-84.728685l151.6544-88.458972A174.782171 174.782171 0 0 0 782.628571 394.971429c96.797257 0 175.542857-78.7456 175.542858-175.542858s-78.7456-175.542857-175.542858-175.542857c-96.782629 0-175.542857 78.7456-175.542857 175.542857 0 32.314514 8.923429 62.507886 24.224915 88.546743l-141.429029 82.505143C447.370971 331.307886 378.133943 292.571429 299.885714 292.571429c-129.053257 0-234.057143 105.003886-234.057143 234.057142s105.003886 234.057143 234.057143 234.057143c71.445943 0 135.416686-32.270629 178.3808-82.885485l78.818743 39.394742A203.951543 203.951543 0 0 0 548.571429 775.314286c0 112.932571 91.882057 204.8 204.8 204.8 112.9472 0 204.8-91.867429 204.8-204.8s-91.8528-204.8-204.8-204.8z m29.257142-468.114286a117.028571 117.028571 0 1 1 0 234.057143 117.028571 117.028571 0 0 1 0-234.057143z m-482.742857 599.771429c-96.943543 0-175.542857-78.599314-175.542857-175.542858s78.599314-175.542857 175.542857-175.542857 175.542857 78.599314 175.542857 175.542857-78.599314 175.542857-175.542857 175.542858z m453.485715 219.428571c-80.764343 0-146.285714-65.492114-146.285715-146.285714s65.521371-146.285714 146.285715-146.285715c80.7936 0 146.285714 65.492114 146.285714 146.285715s-65.492114 146.285714-146.285714 146.285714z" fill="" p-id="8347"></path><path d="M299.885714 389.12c-9.230629 0-18.505143 0.936229-27.516343 2.779429a14.628571 14.628571 0 1 0 5.880686 28.657371A108.2368 108.2368 0 0 1 299.885714 418.377143a14.628571 14.628571 0 1 0 0-29.257143zM189.864229 444.123429A136.279771 136.279771 0 0 0 162.377143 526.628571a14.628571 14.628571 0 1 0 29.257143 0c0-23.6544 7.4752-46.109257 21.621028-64.9216a14.628571 14.628571 0 1 0-23.391085-17.583542zM666.901943 714.532571a127.341714 127.341714 0 0 0-25.673143 77.048686 14.628571 14.628571 0 1 0 29.257143 0c0-21.664914 6.8608-42.232686 19.807086-59.465143a14.628571 14.628571 0 1 0-23.391086-17.583543zM711.972571 229.463771a14.657829 14.657829 0 0 0 18.110172-10.020571 86.9376 86.9376 0 0 1 31.392914-45.728914c6.4512-4.871314 7.738514-14.043429 2.881829-20.494629a14.657829 14.657829 0 0 0-20.48-2.8672 115.946057 115.946057 0 0 0-41.910857 61.015772 14.628571 14.628571 0 0 0 10.005942 18.095542z" fill="" p-id="8348"></path></svg></li>
    </ul>
    <share v-show="shareshow" :data="data"></share>
    <div v-show="shareshow">
      <div id="qrcode" ref="qrcode"></div>
      <div>微信扫一扫分享</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import share from './share.vue'
export default {
    props: ['data'],
    data: function(){
        console.log(this.data)
        return {
            shareshow: false
        }
    },
    components: {
        share //action,//amap,journey,share
    },
    methods: {
        copy: function () { // 未能验证token
            let token = this.$store.state.token
            let server = this.$store.state.server.master.domain
            let bodyFormData = new FormData()
            bodyFormData.set('token', token)
            bodyFormData.set('copy_id', this.data.rbid)
            axios({
                method: 'post',
                url: server + '/api/v1/rb/copy?token='+token,
                data: bodyFormData,
                headers: {'Content-Type': 'multipart/form-data'}
            }).then(r => {
                console.log(r.data)
                if(r.data.error_code==0) {
                    alert("复制成功, 请进入'我的路书'查看")
                }else{
                    alert(r.data.error_msg)
                }
            })
        },
        print: function () {
            window.print()
        },
        onlike: function () {
            //this.data.like = !this.data.like
            let server = this.$store.state.server.master.domain
            let token = this.$store.state.token
            let bodyFormData = new FormData()
            bodyFormData.set('pid', this.data.firstpid)
            if (this.data.like===0) {
                axios({
                    method: 'post',
                    url: server + '/?post-post_like-create.htm?ajax=1&bbs_token=' + token,
                    data: bodyFormData,
                    headers: {'Content-Type': 'multipart/form-data'}
                }).then(r => {
                    // 登陆失效会返回 302 重定向且指向 login.html, 待前端完全剥离, 使之返回 401
                    console.log(r.data)
                    //if (r.data.code == "1") {
                    //    this.data.like = 1
                    //}
                    this.data.like = 1
                })
            }else if(this.data.like===1){
                axios({
                    method: 'post',
                    url: server + '/?post-post_like-delete.htm?ajax=1&bbs_token=' + token,
                    data: bodyFormData,
                    headers: {'Content-Type': 'multipart/form-data'}
                }).then(r => {
                    // 登陆失效会返回 302 重定向且指向 login.html, 待前端完全剥离, 使之返回 401
                    console.log(r.data)
                    //if (r.data.code == "1") {
                    //    this.data.like = 0
                    //}
                    this.data.like = 0
                })
            }
        }
    },
}
</script>

<style media=print type="text/css">  
 .noprint{visibility:hidden}  
</style>  