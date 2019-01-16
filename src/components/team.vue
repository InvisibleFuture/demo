<template>
<div id="team">
    <h1 v-text="title"></h1>
    <p v-text="msg"></p>
    <p>
        是项目组系统<br>
        项目组可以直接对外招募<br>
        组队没有排行榜<br>
        组队随时可以离队和解散<br>
    </p>
    <ul>
        <li v-for="r in list">
            <a :href="'team'+r.id">
            <div>
                <p>招募说明或条件列表</p>
                <p>招募说明或条件列表</p>
                <p>招募说明或条件列表</p>
            </div>
            <div>
                <h3 v-text="r.name"></h3>
                <span>2/39 剩余招募人数/应募人数</span>
                <span>2/39 当前公会规模</span>
            </div>
            </a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'team',
  data () {
    return {
      title: 'Team',
      msg: '没有新的组队..',
      list:[
          {id:32, name:"苦涩砂糖"},
          {id:32, name:"苦涩砂糖"},
          {id:32, name:"苦涩砂糖"},
          {id:32, name:"苦涩砂糖"},
          {id:32, name:"苦涩砂糖"},
      ]
    }
  }
}
</script>

<style lang="less">
#team {
    padding: 30px;
    min-height: 600px;
    text-align: center;
    >ul {
        padding: 0;
        margin: 0;
        list-style: none;
        background: #ffcccc;
        display: flex;
        flex-wrap: wrap;
        li {
            background: #fff;
            border-radius: 3px;
            padding: 1rem;
            margin: 4px;
            //min-width: 300px;
            //width: 100%;
            //max-width: 400px;
            >div:first-child {
                // 发表信息
                padding-bottom: .5rem;
            }
            >div:last-child {
                // 基准信息
                display: flex;
                border-top: 1px solid #ccc;
                padding-top: .5rem;
                img {
                    border-radius: 50%;
                }
            }
        }
    }
}
</style>
