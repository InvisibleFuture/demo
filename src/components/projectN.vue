<template>
<div id="projectN">
    <h1 v-text="title"></h1>
    <p v-text="msg"></p>
    <h3>它解决什么问题</h3>
    <p>项目本质</p>
    <h3>市场空间有多大</h3>
    <p>面向未来的工作方式, 潜力是无限的, 预计参与者也会是指数增涨的</p>
    <h3>如何盈利</h3>
    <p>目前可见的为增值服务盈利<br>
        但由于平台特殊性而不能使用权力垄断, 这将导致盈利的困境<br>
        但, 即使无法盈利, 它也是值得实施的<br>
        因为它被需要<br>
    </p>
    <h3>风险</h3>
    <p>被阻断的可能, 如政策法规, 或是科技突破</p>

    <h3>简介/归档</h3>
    <ul>
        <li></li>
    </ul>
    <h3>参与者/项目组</h3>
    <ul class="user">
        <li v-for="r in user">
            <!--img :src="r.avatar"-->
            <div>
                <span v-text="r.name"></span>
            </div>
        </li>
    </ul>
    <ul class="team">
        <li v-for="r in team">
            <h3 v-text="r.name"></h3>
            <p v-text="r.msg"></p>
            <span ></span>
            <ul>
                <li v-for="id in r.user">
                    <!-- 此处效率略低, 是否必要 -->
                    <span v-for="u in user" v-if="u.id==id" v-text="u.name"></span>
                </li>
            </ul>
        </li>
    </ul>

    <ul class="main">
        <li v-for="r in main">
            <h3 v-text="r.name"></h3>
            <ul>
                <li v-for="rs in r.list" v-text="rs.name"></li>
            </ul>
        </li>
    </ul>
    <div class="situation" v-if="situation==1">
        这个项目活跃状态
        加入它 / 关注它
    </div>
    <div class="situation" v-if="situation==2">
        这个项目已终止
    </div>
</div>
</template>

<script>
export default {
  name: 'projectN',
  data () {
    return {
      title: 'projectN 远程协作平台',
      msg: '项目组详细.. 创建一个基于互信,氛围融洽的远程平台',
      situation: 1,
      main:[
          {
              id:1,
              name:"它解决什么问题",
              list:[
                  {id:1, name:"时间浪费", type:"doc"},
                  {id:2, name:"自由度", type:"file"},
                  {id:3, name:"友善的可控的环境", type:"url"}
              ]
          },
      ],
      user:[
          {id:1, name:"Last", avatar:"av4747.webp", task:[1,2,3]},
          {id:2, name:"落静雪", avatar:"av4747.webp", task:[1,2,3]},
          {id:3, name:"霜月", avatar:"av4747.webp", task:[1,2,3]},
          {id:4, name:"橘纸", avatar:"av4747.webp", task:[1,2,3]},
          {id:5, name:"砂糖", avatar:"av4747.webp", task:[1,2,3]},
      ],
      team:[
          {
              id:1,
              name:"前端",
              msg:"Web and client development",
              user:[1,2,3],
              task:[
                  {id:1, name:"web前端开发", time:4654655},
                  {id:1, name:"ios APP开发", time:4654655},
                  {id:1, name:"web前端开发", time:4654655},
                  {id:1, name:"web前端开发", time:4654655},
                  {id:1, name:"web前端开发", time:4654655},
              ]
          },
          {id:2, name:"后端", msg:"Server development", user:[3,4,5]},
          {id:3, name:"运营", msg:"Functional department", user:[1,2,4]},
          {id:4, name:"策划", msg:"Project direction", user:[1,2,3]},
          {id:5, name:"产品", msg:"Product manager", user:[1,2,3]},
          {id:6, name:"公关", msg:"Public relations maintenance", user:[1,2,3]},
      ],
      task:[
          {id:1, name:""}
      ]
    }
  }
}
</script>

<style lang="less">
#projectN {
    padding: 30px;
    min-height: 600px;
    text-align: center;
    ul.user {
        display: flex;
        list-style: none;
        >li {
            background: #eee;
            margin: .5rem;
        }
    }
    ul.team {
        display: flex;
        list-style: none;
        >li {
            background: #eee;
            margin: .5rem;
            ul {
                display: flex;
                list-style: none;
                li {
                    padding: .5rem
                }
            }
        }
    }
}
</style>
