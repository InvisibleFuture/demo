<template>
<div id="team">
    <h1 v-text="title"></h1>
    <p v-text="msg"></p>
    <ul>
        <li v-for="r in list" v-text="r.msg"></li>
    </ul>
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
