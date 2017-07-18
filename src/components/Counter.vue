<script>
  import hello from './Hello'
  import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'counter',

    data () {
      return {
        name: 'keke',
        num: 0
      }
    },

    // 其他组件
    components: {
      hello
    },

    methods: {
      ...mapActions(['incAction', 'decAction', 'inputAction']),
      ...mapMutations(['inc', 'dec', 'input'])
    },

    // 重新渲染
    computed: {
      ...mapState(['count']),
      ...mapGetters(['countGet'])
    },

    // 监听组件内状态
    watch: {
      count (val) { // 监听 computed 中 count 的变化，作出相应动作
        this.num = val  // 修改 data 中 num 的值（将 computed 中 count 的值赋予 num）
      }
    },

    render (h) {
      return (
        <hello kk={this.name}>
          {this.count} other {this.countGet} num {this.num}
          <button onClick={this.incAction}>action +1</button>
          <button onClick={this.decAction}>action -1</button>
          <button onClick={() => this.inputAction(10)}>action input</button>
          <button onClick={this.inc}>mutation +1</button>
          <button onClick={this.dec}>mutation -1</button>
        </hello>
      )
    }
  }
</script>
