<template>
  <div>
    <button v-bind:class="{toggled: isToggled}" @click="isToggled = !isToggled">
      Toggle Button
    </button>
    <button @click="count">
      Count  {{ number }}
    </button>
    <ul>
      <li v-for="item in items" :key="item.message">
          {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isToggled: false,
      number: 0,
      items: [
        { message: 'list1' },
        { message: 'list2' }
      ]
    }
  },
  methods: {
    count () {
      this.number++
    }
  }
}
</script>

<style scoped>
.toggled {
    background-color: red;
}
</style>
