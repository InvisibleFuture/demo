<template>
<div id="msg">
  <header>
    aoaoao!!!
  </header>
  <ul>
    <li v-for="item in list" :class="{'left':item.id!=id, 'right':item.id==id}">
      <img src="item.img">
      <p v-text="item.msg"></p>
    </li>
  </ul>
  <footer>
    <input type="text" value="">
  </footer>
</div>
</template>

<script>
export default {
  name: 'msg',
  data() {
    return {
      id: 66,
      list: [{
          id: 55,
          msg: "不可以, 那里, 不可以.."
        },
        {
          id: 66,
          msg: "不可以, 那里, 不可以.. a.. 不可以, 那里, 不可以.. a.. 不可以, 那里, 不可以.. a.. 不可以, 那里, 不可以.. a.."
        },
        {
          id: 77,
          msg: "不可以, 那里, 不可以.."
        }
      ]
    }
  }
  // body...
};
</script>

<style lang="less">
#msg {
    font: normal normal 100% "intercom-font", "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;
    position: fixed;
    top: 20px;
    left: 60px;
    height: 440px;
    width: 380px;
    border-radius: 6px;
    background: #fff;
    z-index: 9990;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    //box-shadow: 10px 10px 5px #888;
    header {
        height: 8rem;
        background: #c3c3c3;
    }
    ul {
        list-style: none;
        flex: auto;
        li {
            display: flex;
            padding: 5px;
            img {
                border-radius: 50%;
                background: #ccc;
                width: 42px;
                height: 42px;
                border: none;
            }
            p {
                flex: auto;
                padding: 0 .5rem;
                margin: 0;
            }
        }
        li.left {
            flex-direction: row;
        }
        li.right {
            flex-direction: row-reverse;
        }
    }
    footer {
        border-top: solid 1px #f1f1f1;
        input {
            border: none;
            outline: none;
            width: 100%;
            height: 3rem;
        }
    }
}
</style>
