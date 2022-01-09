<template>
  <el-container direction="vertical">
    <slot />
  </el-container>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({})
</script>

<style lang="scss" scoped>
  .el-container {
    min-height: 100vh;
    background-color: #f5f5f5;
  }
</style>
