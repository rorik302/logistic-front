<template>
  <el-form
    ref="formRef"
    :model="formModel"
    :rules="formRules"
    hide-required-asterisk
    label-position="top"
    @keypress.enter="submitForm"
  >
    <el-form-item label="E-mail" prop="email" :error="errors.email">
      <el-input v-model="formModel.email" placeholder="email@example.com" />
    </el-form-item>
    <el-form-item label="Пароль" prop="password" :error="errors.password">
      <el-input v-model="formModel.password" type="password" />
    </el-form-item>
    <el-button v-loading="isFetching" class="submit-button" type="primary" @click="submitForm"> Войти </el-button>
  </el-form>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from "vue"
  import { authService } from "@/services/auth"
  import type { ElForm } from "element-plus"

  export default defineComponent({
    setup() {
      const formRef = ref<InstanceType<typeof ElForm>>()
      const formModel = reactive({ email: "", password: "" })
      const formRules = reactive({
        email: [
          { required: true, message: "Введите электронный адрес", trigger: ["blur", "change"] },
          { type: "email", message: "Неправильный формат электронного адреса", trigger: ["blur"] }
        ],
        password: [{ required: true, message: "Введите пароль", trigger: ["blur", "change"] }]
      })

      const { execute, errors, isFetching } = authService.login(formModel)

      const submitForm = () => {
        formRef.value?.validate((valid) => {
          if (valid) {
            execute()
          }
        })
      }

      return { formRef, formModel, formRules, submitForm, errors, isFetching }
    }
  })
</script>

<style lang="scss" scoped>
  .submit-button {
    width: 100%;
  }
</style>
