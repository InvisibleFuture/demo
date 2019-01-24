<template>
<div class="item">
    发起项目
    由此想法衍生的项目
  <ul>
    <li v-for="r in list">
        <span v-text="r.name"></span>
    </li>
  </ul>
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
        name: '21212',
        time: '21212'
      }]
    }
  }
}
</script>

<style lang="less">
div.item {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            color: #c0ffee;
        }
    }
}
</style>
