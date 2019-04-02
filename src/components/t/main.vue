<template>
<div id="guild">
  <section @click.stop>
    <master></master>
    <tag></tag>
    <file></file>

    <item></item>
    <div class="res">
      发起项目
      关注
      打赏
      赞同
    </div>
    <reply></reply>
  </section>

  <aside @click.stop>
    <author></author>
    <status></status>
    <recommend></recommend>
  </aside>

</div>
</template>

<script>
export default {
  name: 'guild',
  components: {
    'master': () => import('./master'),
    'item': () => import('./item'),
    'file': () => import('./file'),
    'tag': () => import('./tag'),
    'reply': () => import('./reply'),
    'author': () => import('./author'),
    'recommend': () => import('./recommend'),
    'status': () => import('./status')
  },
  data() {
    return {}
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
    display: flex;
    section {
        flex: 10;
        padding: 24px 35px;
        border: 1px solid #f4f4f4;
        border-radius: 4px;
        background: #fff;
    }
    aside {
        flex: 4;
        margin: 0 0 0 8px;
    }
}
</style>
