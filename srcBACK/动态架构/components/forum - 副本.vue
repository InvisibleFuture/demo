<template>
  <main id="thread">
    <!-- 主题列表 并具有排序方式和黑名单机制 -->
    <section class="thread">
      <!-- 排序: 图集 话题 事务 文章 -->
      <ul class="list">
        <li v-for="item in list" style="background:#fff; margin:0 0 8px 0; max-width: 200px">
          <div>
            <img src="static/u1.jpg" title="图像" alt="图像" style="width: 100%">
          </div>
          
          <div>
            标题<a :href="item.id" title="item.title">{{ item.title }}</a>
            简介信息 亦或讨论
            围观/讨论/收藏/打赏 (数值)
          </div>

          <div class="footer">
            <img src="static/u1.jpg" style="width: 24px;height: 24px;border-radius: 50%;" onclick="gotoUserPage('/user/home/6294360860113072660')" :alt="author"> 作者名字
          </div>
        </li>
      </ul>
      <!-- 如无主题 -->
    </section>

    <aside>

      <!-- Component : author information -->
      <div class="lord">
        <div class="user_head_div">
          <img src="static/u1.jpg" onclick="gotoUserPage('/user/home/6294360860113072660')" :alt="author">
          <div class="ie2">
            <p>
              <span onclick="gotoUserPage('/user/home/6294360860113072660')">{{ author }}</span>
              <span class="ie2">Lv&nbsp;12</span>
            </p>
            <p class="ie2">「今でもあなたは私の光。」</p>
          </div>
        </div>
        <div class="follow_div">
          <span id="post_detail_follow_btn" class="follow_span" style="display: none" onclick="setRelation(this, '6294360860113072660')">关注</span>
          <span id="post_detail_user_login" class="follow_span" style="" onclick="do_login()">关注</span>
          <p><span style="margin-right: 20px;">粉丝：3324</span><span>糖果：8935</span></p>
        </div>
      </div>


    </aside>
  </main>
</template>

<script>
  export default {
    name: 'forum',
    data () {
      return {
        title: 'Welcome to thread',
        author: 'Last',
        list: [
        { title: 'Foo', author:'miis', id:'99', item: '5665465' },
        { title: 'Bar', author:'miis', id:'99', item: '5665465' }
        ]
      }
    },
    mounted: function () {
      this.fetchData()
    },
    methods: {
      fetchData: async function () {
      //this.apiGet('p','66996') // 载入数据
      //this.msg = this.$route.params.id
      /*
      // 直接要数据, 而不作错误判断处理
      const res = await this.getData('p','88848')

      // 将取得的数据处理为自己的数据结构
      if (res) {
        this.msg = res
      }else{
        alert('失败了')
      }
      */
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* 全局使用色块构建 禁止使用线框! */

.post_is_original {
  width: 30px;
  height: 20px;
  float: left;
  margin-top: 4px;
  margin-right: 8px;
}
.post_is_original img {
  display: block;
  width: 100%;
}

.post_is_digest {
  width: 20px;
  height: 21px;
  float: left;
  margin: 5px 8px 0 0;
}
.post_is_digest img {
  display: block;
  width: 100%;
}

.thread_title span {
  height: 30px;
  width: 40px;
  border-radius: 15px;
  -o-border-radius: 15px;
  -moz-border-radius: 15px;
  letter-spacing: 2px;
  line-height: 30px;
  text-align: left;
  padding-left: 40px;
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


.thread {
  width: 697px;
  float: left;
  margin-bottom: 10px;
}







.thread {
  /*min-height: 2000px;
  background: #fff;*/
  margin: 0 auto;
  border: 1px solid #f4f4f4;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}


ul.posts {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul.posts>li {
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

.content>div.left {
  height: 40px;
  float: left;
  margin-left: -50px;
  margin-top: 5px;
}

.content>div.left>img {
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


.content>div.right {
  width: 100%;
  border-bottom: 1px solid #f8f8f8;
}

/* post */
ul.posts>li>div.left {
  height: 40px;
  float: left;
  margin-left: -50px;
  margin-top: 5px;
}

ul.posts>li>div.left>img {
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


ul.posts>li>div.right {
  width: 100%;
  border-bottom: 1px solid #f8f8f8;
}


.user_name span {
  display: inline-block;
  font-size: 12px;
  color: #4c4c4c;
}

.user_name span.user_reply_level {
  font-size: 12px;
  margin: 0 4px 0 4px;
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









/* 组件化 */
main#thread {
  width: 1000px;
  height: auto;
  margin: 0 auto;
  padding: 0 0 40px 0;
  padding-top: 30px !important;
  overflow: auto; zoom: 1;
}

/* 右侧栏 */
main#thread aside {
  width: 290px;
  float: right;
}


/* 右侧栏: 作者 */
main#thread aside .Lord {
  background-color: #fff;
  border: 1px solid #f4f4f4;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  /* height: 120px; */
  /*margin-top: 43px;*/
  position: relative;
  color: #656565;
  padding-bottom: 20px;
  overflow:hidden;
}

main#thread aside .Lord img {
  border-radius: 4px 4px 0 0;
}

main#thread aside .Lord .ie2 {
  padding: 10px 0 0 10px;
}

main#thread aside .follow_div {
  padding: 0 10px 0 10px;
}

</style>
