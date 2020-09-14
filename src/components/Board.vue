<template>
    <div class="board">
        <div v-for="row in 3" :key="row" class="board-row">
            <square v-for="i in 3" :key="indexByRow(i, row)"
                :value="squares[indexByRow(i, row)]"
                @click="click(i, row)"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Board',
  data () {
    return {
      squares: Array(9).fill(null)
    }
  },
  //   props: {
  //     squares: Array
  //   },
  components: {
    Square: () => import('./Square')
  },
  methods: {
    indexByRow (i, row) {
      return (row * 3 + i - 4)
    },
    click (i, row) {
      this.$emit('click', this.indexByRow(i, row))
    }
  }
}
</script>

<style scoped>
.board {
    /* width: 120px;
    height: 120px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr); */
}
</style>
