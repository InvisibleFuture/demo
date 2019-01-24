<template>
<div id="guild" @click.stop>
  <section class="thread">
    <master></master>
    <item></item>
    <file></file>
    <tag></tag>
    <reply></reply>
  </section>

  <aside>
    <author></author>
    <recommend></recommend>
  </aside>

</div>
</template>

<script>
export default {
  name: 'guild',
  components: {
    'master': () => import('./content'),
    'item': () => import('./item'),
    'file': () => import('./file'),
    'tag': () => import('./tag'),
    'reply': () => import('./reply'),
    'author': () => import('./author'),
    'recommend': () => import('./recommend')
  },
  data() {
    return {
      title: 'Idea 尚未能发起项目的',
      msg: '没有新的公会..'
    }
  }
}
</script>

<style lang="less">
#guild {
    //padding: 30px;
    //min-height: 600px;
    //text-align: center;
    //padding-bottom: 40px;
    width: 1000px;
    height: auto;
    margin: 0 auto;
    padding-bottom: 40px;
    padding-top: 30px;
    overflow: auto;
    zoom: 1;
}
section.thread {
    background: #fff;
    margin: 0 auto;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
    width: 697px;
    float: left;

}
aside {
    width: 290px;
    float: right;
}
</style>
