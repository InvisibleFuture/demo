<template>
<div id="guilds">
    <h1 v-text="title"></h1>
    <p v-text="msg"></p>
    <p>
        公会页面, 这里展示所有公会的列表
        若是带有id号, 则展示对应id的公会页面
        公会页面展示招募信息, 也是排行榜
        公会页面内是公会内务信息, 可以部分公开
        决策系统中, 需要有投票系统
        暂时还不需要协会系统

        公会直接使用排行榜系统
        显示公会介绍
        显示招募状态 默认为开启 过滤停止招募的
        点开可以看到其公开的历史记录
    </p>
    <ul>
        <li v-for="r in list">
            <router-link :to="{ name: 'guild', params: {id:r.id} }">
                <span v-text="r.name"></span>
            </router-link>
        </li>
    </ul>
    <!--
    <ul>
        <li v-for="r in list" v-text="r.msg"></li>
    </ul>
    -->
</div>
</template>

<script>
export default {
  name: 'guilds',
  data () {
    return {
      title: 'Guild',
      msg: '没有新的公会..',
      list:[
          {id:12, name:'任何人都可以创建自己的公会', recruit:true},
          {id:12, name:'公会作为一个集合体接受或自主发起项目', recruit:true},
          {id:12, name:'公会招募的会员代表对其能力与品格的认可, 公会对其在内部事务上的行为负责', recruit:true},
          {id:12, name:'自由化的(任务自主参与), 无权责的', recruit:true},
          {id:12, name:'月', recruit:true},
          {id:12, name:'寒冬', recruit:true},
          {id:12, name:'水精灵', recruit:true},
          {id:12, name:'小楼听风', recruit:true},
          {id:12, name:'胖次', recruit:true},
          {id:12, name:'甜筒', recruit:true},
          {id:12, name:'落静雪', recruit:true},
          {id:12, name:'自由之翼', recruit:true}
      ]
    }
  }
}
</script>

<style lang="less">
#guilds {
    padding: 30px;
    min-height: 600px;
    text-align: center;
}
</style>
