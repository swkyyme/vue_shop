<template>
    <button class="square" :disabled="disabled" @click="handleClick">{{value}}</button>
</template>
<script>
export default {
  name: 'Square',
  props: {
    value: String,
    disabled: Boolean
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.square {
    border: 1px solid black;
    font-size: 32px;
    font-weight: 600;
    width: 40px;
    height: 40px;
}
</style>
