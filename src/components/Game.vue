<template>
    <div class="game">
        <board :squares="squares" @click="click"/>
    </div>
</template>

<script>
export default {
  name: 'Game',
  data () {
    return {
      squares: Array(9).fill(null),
      currentPlayer: 'X'
    }
  },
  components: {
    Board: () => import('./Board')
  },
  methods: {
    click (i) {
      console.log(this)
      this.$set(this.squares, i, this.currentPlayer)
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
    }
  }
}
</script>
