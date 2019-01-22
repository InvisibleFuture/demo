<template>
<div id="work">
  <ul class="task">
    <li v-for="r in task">
      <span v-if="r.status==0">待确认</span>
      <span v-if="r.status==0">进行中</span>
      <span v-if="r.status==0">失败</span>
      <span v-if="r.status==0">已完成</span>
      <span v-if="r.status==0">已关闭</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'project',
  data() {
    return {
      id: 55,
      name: 'Last',
      task: [{
        id: 66,
        name: '创建工作台',
        status: 0
      }]
    }
  }
}
</script>

<style lang="less">
#work {}
</style>
