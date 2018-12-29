<template>
<div id="structure">
  <h1 v-text="title"></h1>
  <!--p v-text="msg"></p-->


  <div class="conte">
    <h2># 远程协作</h2><br>
    <p></p>
    <br>

    <h2># 程序架构</h2><br>
    <h3>Client</h3>
    <p>
      WEB(vue) | Android | IOS | Windows | Linux<br>
      Router {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;www.xxx.com:8080<br>
      &nbsp;&nbsp;&nbsp;&nbsp;G:id > Gulid<br>
      &nbsp;&nbsp;&nbsp;&nbsp;T:id > Team<br>
      &nbsp;&nbsp;&nbsp;&nbsp;U:id > User<br>
      &nbsp;&nbsp;&nbsp;&nbsp;P:id > Project<br>
      }<br>
      <br>
    </p>
    <h3>Server</h3>
    <p>
      Golang | php | node | java <br>
      API {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;www.xxx.com:8000<br>
      &nbsp;&nbsp;&nbsp;&nbsp;/API? package=user, id=2<br>
      &nbsp;&nbsp;&nbsp;&nbsp;/API? T=x,x,x,x,x<br>
      },<br>
      IMG {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;img.xxx.com<br>
      &nbsp;&nbsp;&nbsp;&nbsp;5785924792387.webp?x=2<br>
      },<br>
      File {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;file.xxx.com<br>
      &nbsp;&nbsp;&nbsp;&nbsp;4382746832742.zip<br>
      }<br>
      <br>
    </p>
    <h3>cache / redis</h3>
    <p>
      (1)token > key:id, value:token, time:30d<br>
      <br>
    </p>

    <h3>database / nosql</h3>
    <p>
      Guild > id name info [100]user.id<br>
    </p>
    <p>
      Team > id name info [20]user.id<br>
    </p>
    <p>
      User > id name info img
    </p>
    <p>
      Project > id name info list..
    </p>
  </div>

</div>
</template>

<script>
export default {
  name: 'structure',
  data() {
    return {
      title: 'Structure',
      msg: '没有架构文档..'
    }
  }
}
</script>

<style lang="less">
#structure {
    padding: 30px;
    min-height: 600px;
    text-align: center;

    .conte {
        width: 100%;
        max-width: 1000px;
        margin: auto;
        padding: 40px;
        text-align: left;
    }
}
</style>
