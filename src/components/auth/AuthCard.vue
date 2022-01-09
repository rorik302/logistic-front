<template>
  <el-card>
    <template #header>
      <span class="auth-card-title">{{ title }}</span>
    </template>

    <slot />
  </el-card>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    props: {
      title: {
        type: String,
        default: ""
      }
    }
  })
</script>

<style lang="scss" scoped>
  .el-card {
    margin: auto;
    min-width: 450px;
  }
  .auth-card-title {
    font-weight: bolder;
  }
</style>
