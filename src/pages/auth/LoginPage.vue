<template>
  <auth-card title="Авторизация">
    <login-form />
  </auth-card>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import AuthCard from "@/components/auth/AuthCard.vue"
  import LoginForm from "@/components/auth/LoginForm.vue"

  export default defineComponent({
    components: { LoginForm, AuthCard }
  })
</script>

<style lang="scss" scoped></style>
