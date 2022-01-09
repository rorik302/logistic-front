<template>
  <el-config-provider :locale="locale"></el-config-provider>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import locale from "element-plus/es/locale/lang/ru"

  export default defineComponent({
    setup() {
      return {
        locale
      }
    }
  })
</script>

<style lang="scss" scoped></style>
