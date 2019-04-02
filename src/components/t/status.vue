<template>
<div class="status">
  <div class="" v-if="status">
    此项目运转中
    <div class="" v-if="recruit">
      当前招募中, 加入项目组
    </div>
    <div class="" v-else>
      招募已结束, 申请加入项目组
    </div>
  </div>
  <div class="" v-else>
    此项目已结束
    此项目已成功结束 > 产出
    它未能解决你所遇到的问题? [发起新项目]
    此项目已失败, 失败原因: 市场支持不足 超时未执行 招募人数不足
    若是你理解并能够规避由此导致的失败, 则可以 [再次发起此项目]
    此项目被终止, 终止原因: 内部矛盾 项目非法
    若是你理解并能妥善解决此问题, 则可以 [再次发起此项目]
  </div>
  <p>这个场所的作用并非招募员工, 而是招募能够解决问题的合作伙伴, 它不是平庸者的平台</p>
</div>
</template>

<script>
export default {
  name: 'status',
  data() {
    return {
      id: 12,
      status: true, // 运转状态
      recruit: true, // 招募状态
      // 失败状态从任务推送调取(无法完成的)
    }
  }
}
</script>

<style lang="less">
div.status {
    margin: 0 0 10px;
    color: #656565;
    background: #fff;
    border-radius: 4px;
    padding: 10px;
    overflow: hidden;
    >p {
        color: #ff1414
    }
}
</style>
