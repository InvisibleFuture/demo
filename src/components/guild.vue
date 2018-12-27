<template>
<div id="team">
    <h1 v-text="title"></h1>
    <p v-text="msg"></p>
</div>
</template>

<script>
export default {
  name: 'guild',
  data () {
    return {
      title: 'Guild',
      msg: '没有新的公会..'
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
