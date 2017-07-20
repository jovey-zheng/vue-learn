<template>
  <div>
    <Tap @tap="log" :cl="123" className="name" :fn="logFn">
      tap
    </Tap>
  </div>
</template>

<script>
import Tap from './tap'

export default {
  name: 'transform',
  components: {
    Tap
  },
  methods: {
    log (msg) {
      console.log(msg)
    },
    logFn () {
      console.log(1)
    }
  }
}
</script>
