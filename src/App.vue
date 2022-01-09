<template>
  <el-config-provider :locale="locale">
    <component :is="layout">
      <router-view />
    </component>
  </el-config-provider>
</template>

<script lang="ts">
  import { defineComponent, markRaw, ref, watch } from "vue"
  import locale from "element-plus/es/locale/lang/ru"
  import { useRoute } from "vue-router"
  import AuthLayout from "@/layouts/AuthLayout.vue"
  import DefaultLayout from "@/layouts/DefaultLayout.vue"
  import "@/styles/default.scss"

  export default defineComponent({
    setup() {
      const route = useRoute()

      const layout = ref()

      watch(
        () => route.meta,
        (routeMeta) => {
          switch (routeMeta.layout) {
            case "AuthLayout":
              layout.value = markRaw(AuthLayout)
              break
            default:
              layout.value = markRaw(DefaultLayout)
          }
        }
      )

      return { locale, layout }
    }
  })
</script>

<style lang="scss" scoped></style>
