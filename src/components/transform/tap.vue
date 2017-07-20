<template>
  <div @click="logTap" cl :class="className">
    <slot></slot>
    <div v-show="visiable">visiable</div>
    <div v-if="visiable">show if</div>
    <div v-else="!visiable">show else</div>
  </div>
</template>

<script>
export default {
  name: 'tapComponent',
  props: ['className', 'cl', 'fn'],
  data () {
    return {
      visiable: true
    }
  },
  methods: {
    logTap () {
      this.$emit('tap', 'tap me')
      console.log(this.$props)
      this.$props.fn()
      this.visiable = !this.visiable
    }
  }
}
</script>
