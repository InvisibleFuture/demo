<template>
<div id="team">
    <h1 v-text="title"></h1>
    <p v-text="msg"></p>
</div>
</template>

<script>
export default {
  name: 'team',
  data () {
    return {
      title: 'Structure',
      msg: '没有架构文档..'
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
