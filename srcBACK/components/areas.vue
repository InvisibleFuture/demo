<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p>
      默化角色系统 / 无障碍高效联络 / 隐私<br>
      事件推力
    </p>
    <p>
      维持存在的基础与形态/基本与网络的连接<br>
      项目与角色均是IP<br>
      注册挑战<br>
      找到您感兴趣的未解决的问题<br>
      使用设置Docker的说明运行本地环境<br>
      阅读Concept to Clinic的文档<br>
      将您的拉取请求提交给GitHub仓库<br>

      领域 / 专长<br>
      公共领域贡献系统 / 声望<br>

      对项目划分领域
      对创意划分领域
      对需求划分领域 / 感兴趣的 / 未解决的 / 专业领域的<br>
      项目 - 课题(项目中遇到的问题或项目面临的的主要问题) 确定没有成熟解决方案的, 可能存在成熟解决方案的
      需求 - 也是课题? 需求是针对某个领域 具有局限性, 满足需求不能是已有的成熟方案的交易, 而是课题与研发
      想法 - 灵感, 快速记录灵感, 思维导图, 分析灵感与获得参考数据
      项目组 - 一个项目组可以有多个项目, 一个项目也可以有多个组, 项目完成或不能完成都可以快速组织团队与解耦
      资源与数据供应商, 公共领域供应者 - 可以是持续维护的项目组, 亦可以是非持续的 /(防止数据倒卖, 供应商应通过资质认证且数据监管, 防止数据造假)
      供应商的供应服务可以看作为一个项目, 项目可分类为 组建中的, 活跃的(更新维护), 冷却的, 失效的, 

      <br>
      假设此处为当前角色头像 不是"本", 是目标值
      <img src="/static/back.jpg">
    </p>
    <ul>
      <li><router-link to="u8848556">user8848556</router-link></li>
      <li><router-link to="p8798797">project</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to areas',
        list:{}
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
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
