<template>
<div class="tag">
  <ul>
    <li v-for="r in list">
      <a href="#" v-text="r.name"></a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'tag',
  data() {
    return {
      list: [{
        id: 12,
        name: 'tiao'
      }, {
        id: 12,
        name: 'tiao'
      }, {
        id: 12,
        name: 'tiao'
      }]
    }
  }
}
</script>

<style lang="less">
div.tag {
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        li {
            color: #333;
            margin: 3px;
            padding: 3px 5px;
            background: #c0ffee;
            border-radius: 3px;
        }
    }
}
</style>
