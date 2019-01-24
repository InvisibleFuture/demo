<template>
<div class="file">
  <ul>
    <li v-for="r in list">
      <span v-text="r.name"></span>
      <span v-text="r.time"></span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'file',
  data() {
    return {
      count: 6,
      list: [{
        id: 12,
        name: '数学作业.zip',
        time: '2019-1-2'
      }, {
        id: 12,
        name: '生物作业.zip',
        time: '2019-1-2'
      }]
    }
  }
}
</script>

<style lang="less">
div.file {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            color: #ccc;
        }
    }
}
</style>
