<template>
<div id="forum">
  <vue-waterfall-easy :imgsArr="imgsArr" :end="end" @scrollReachBottom="getData" ref="child1">
      <ul class="seca">
        <li>上海</li>
        <li>安徽</li>
        <li>湖北</li>
        <li>四川</li>
        <li>甘肃</li>
      </ul>

    <div style="display:flex; justify-content:center;">
      <div style="background:#ccc; display:flex; margin:15px; border-radius:4px;">
        <label for="cityA" style="background:#5c6166;border-radius:4px 0 0 4px;line-height: 28px; padding:0 5px;color:#ddd; font-size:12px;">途经城市</label>
        <city-picker v-on:child-say="listenToMyBoy" field="cityA" placeholder="添加您的途经城市" :city-list="cityList" :no-hot="false" :value.sync="cityId"></city-picker>
      </div>
    </div>
  </vue-waterfall-easy>
</div>
</template>

<script>
import vueWaterfallEasy from './vue-waterfall-easy/vue-waterfall-easy.vue' // 瀑布流
import axios from 'axios'

import 'babel-polyfill'
import cityList     from '@/components/vue-city-picker/china-city-data.json' // 城市数据
import myCityPicker from '@/components/vue-city-picker/city-picker.vue' // 城市选择
//import 'babel-polyfill';
//import cityList from 'china-city-data';
//import myCityPicker from 'vue-city-picker';

//默认值，可以注册一个城市列表全局变量（考虑到cityList会比较大，如项目中多次使用，单独为一个js文件比较好）

export default {
  name: 'forum',
  data() {
    return {
      id: 1,
      imgsArr: [],
      group: 1, // request param
      end: false, // 是否已经到底.......
      maxpage: 50,
      forum: {},
      threadlist: {},
      cityId: '', //选择城市ID
		  cityList: cityList, // 城市数据
    }
  },
  components: {
    'vue-waterfall-easy': vueWaterfallEasy,
    'city-picker': myCityPicker,
    //'vueWaterfallEasy': () => import('./vue-waterfall-easy/vue-waterfall-easy')
  },
  created() {
  },
  mounted: function() {
      this.id = this.$route.params.id
      this.getData()
  },
  methods: {
    listenToMyBoy: function (somedata){
      console.log(somedata)
      // 更新视图, 即置空现存数据, 带参数 getData()
      this.group = 1 // 重置翻页
      //this.imgsArr = [] // 置空数据
      this.$refs.child1.reset(); // 置空数据
      this.cityId = somedata
      this.getData() // 载入新数据
      // 数据源: 按活跃时间排序全部的, 加精的, 关键词搜索的
    },
    getData() {
      // 替换的方法 , 后端不必再建表存储图像字段, 约定 x1 格式为 data/x1/xxx.webp 文件, 视网膜屏适配 x2, 文件名使用帖子id尽量避免后端输出
      let token = this.$store.state.token
      let server = this.$store.state.server.master.domain
      //axios.get(server + '/forum-'+this.id+'-' + this.group + '.htm?ajax=1').then(r => {
      axios.get(server + '/index-' + this.group + '.htm?ajax=1&bbs_token='+token).then(r => {
        let obj = r.data.message
        console.log(obj)
        obj.forEach((item, i) => {
          // 将相对路径转换成绝对路径
          var reg=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/;
          if(!reg.test(item.img)){
            item.img = server + '/' + item.img
          }
          if(!reg.test(item.user.avatar_url)){
            item.user.avatar_url = server + '/' + item.user.avatar_url
          }
          //window.console.log(item)
          this.imgsArr.push({
            id: item.tid,
            src: item.img,
            info: item.subject,
            user: {
              id: 1,
              name: item.user.username,
              img: item.user.avatar_url,
            },
            list:{
                id: 3,
                name: '逍遥自驾'
            },
            data: item
          })
        })

        this.group++
        if (this.group >= this.maxpage || obj.length != 20) {
          this.end = true
        }
      })
    }
  }
}
</script>

<style lang="less">
ul.seca {
  display:flex; justify-content:center; list-style:none; padding: 10px 0 0 0;
  li {
    margin: 4px; padding: 4px 8px;
    border-radius: 4px;
    background: #e8e8e8;
  }
}

#content {
    position: absolute;
    top: 50px; // 这里缩进不能全屏
    bottom: 0;
    width: 100%;
    background: #f8f9fb;
}

#forum {
    //position: relative;
    //left: 0;
    //top: 0;
    //height: 100%;
    //width: 100%;
    // 卡片标题
    .description {
        display: block;
        padding: 0 16px;
        margin: 10px 0;
        line-height: 1.35em;
        overflow: hidden;
        word-wrap: break-word;
    }
    // 卡片底部
    .attribution {
        color: #999;
        border-top: 1px solid #F2F2F2;
        background: #FAFAFA;
        position: relative;
        padding: 0 15px;
        background: #fff;
        .img {
            width: 34px;
            height: 34px;
            margin: 16px 0;
            display: block;
            float: left;
        }
        a {
            color: #9E7E6B;
        }
        a.img {
            background-color: #faf7f7;
        }
        .avt {
            width: 34px;
            height: 34px;
            display: block;
            border-radius: 50%;
        }
        .text {
            margin-left: 34px;
            height: 51px;
            padding: 15px 0 0 10px;
            line-height: 1.5;
            .inner {
                height: 37px;
                overflow: hidden;
                .line {
                    display: inline-block;
                    width: 100%;
                    .author {
                        float: left;
                        max-width: 120px;
                        white-space: nowrap;
                        max-height: 80px;
                        overflow: hidden;
                    }
                }
            }
        }
        .replyButton {
            display: block;
            visibility: hidden;
            position: absolute;
            right: 0;
            bottom: 0;
            width: 26px;
            height: 16px;
            background: url("/img/home_comment_act_icon.png") 0 0 no-repeat;
            cursor: pointer;
            transition: opacity 0.2s linear;
            transition-property: opacity,right,bottom;
            opacity: 0;
        }
    }
}

/* 操作 */
.stats {
    padding: 0 15px;
    margin: 10px 0;
    span {
        display: inline-block;
        width: auto;
        height: 12px;
        line-height: 12px;
        font-size: 12px;
        margin-right: 10px;
    }
}
.less {
    color: #8c7e7e;
}
</style>
