<template>
<div class="item">
  由此想法衍生的项目
  <ul>
    <li v-for="r in list">
      <span v-text="r.name"></span>
    </li>
  </ul>
  + 发起项目
</div>
</template>

<script>
export default {
  name: 'item',
  data() {
    return {
      count: 12,
      list: [{
        id: 12,
        name: '熔火核心项目组',
        time: '21212'
      }, {
        id: 12,
        name: '黄昏预案',
        time: '21212'
      }]
    }
  }
}
</script>

<style lang="less">
div.item {
    padding: 0 0 10px 0;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            color: #555;
        }
    }
}
</style>
