<template>
<div id="team">
    <h1 v-text="title"></h1>
    <p v-text="msg"></p>
    <p>
        公会页面, 这里展示所有公会的列表
        若是带有id号, 则展示对应id的公会页面
        公会页面展示招募信息, 也是排行榜
        公会页面内是公会内务信息, 可以部分公开
        决策系统中, 需要有投票系统
        暂时还不需要协会系统
    </p>
    <!--
    <ul>
        <li v-for="r in list" v-text="r.msg"></li>
    </ul>
    -->
</div>
</template>

<script>
export default {
  name: 'guild',
  data () {
    return {
      title: 'Guild',
      msg: '没有新的公会..',
      list:[
          {msg:'任何人都可以创建自己的公会'},
          {msg:'公会作为一个集合体接受或自主发起项目'},
          {msg:'公会招募的会员代表对其能力与品格的认可, 公会对其在内部事务上的行为负责'},
          {msg:'自由化的(任务自主参与), 无权责的'},
          {msg:''},
          {msg:''},
          {msg:''},
          {msg:''},
          {msg:''},
          {msg:''},
          {msg:''},
          {msg:''}
      ]
    }
  }
}
</script>

<style lang="less">
#team {
    padding: 30px;
    min-height: 600px;
    text-align: center;
}
</style>
