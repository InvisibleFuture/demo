<template>
<div id="team">
    <h1 v-text="title"></h1>
    <p v-text="msg"></p>
</div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      title: 'User',
      msg: '没有创建角色..'
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
