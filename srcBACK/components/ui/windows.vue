<template>
    <div class="windows"  v-bind:style="{width: width+'px', height:height+'px', top:top+'px', left:left+'px'}">
        <header>
          <slot name="header"></slot>
      </header>
      <!--main-->
          <slot></slot>
      <!--/main-->
      <footer>
          <slot name="footer">{{title}}</slot>
      </footer>
  </div>
</template>

<script>
    export default {
        name: 'windows',
        props: {
            title:  String,
            width:  String,
            height: String,
            //windows: Object
            //likes: Number,
            //isPublished: Boolean,
            //commentIds: Array,
            //author: Object
        },
        data () {
            return {
                top: 120,
                left: 339
                //bottom: windows.bottom,
                //width: windows.width,
                //height: windows.height
            }
        }
    }
</script>

<style>
.windows {
    position: fixed;
    background: rgba(100,100,100,.8);
    border-radius: 3px;
}
</style>