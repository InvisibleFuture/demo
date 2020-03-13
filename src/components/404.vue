<template>
<div id="none">
  <h1>404</h1>
  <p>资源不曾存在或已经消失..</p>
</div>
</template>


<script>
export default {
  name: 'error',
  data() {
    return {
      id: 9,
      name: '404',
    }
  }
}
</script>

<style lang="less">
#none {
    width: 100%;
    padding: 120px 0;
    text-align: center;
    //writing-mode:vertical-rl;
    h1 {
        font-size: 5rem;
        color: #555;
    }
    p {
        font-size: 1.5rem;
        color: #555;
    }
}
</style>
