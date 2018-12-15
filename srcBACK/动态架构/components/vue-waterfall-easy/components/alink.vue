<style>
.alink{
}
</style>

<template>
  <a class="alink" :href="to">
    <slot></slot>
  </a>
</template>

<script>
//import XXX from './components/XXX'

export default {
  name: 'alink',
  props:['to'],
  data () {
    return {
      msg: 'this is from alink.vue'
    }
  },
  methods: {

  }
}
</script>
