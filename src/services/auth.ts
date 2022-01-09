import { reactive } from "vue"
import { useFetch } from "@/services"

interface IErrors {
  email: string | null
  password: string | null
}

export const authService = {
  login: (credentials: { email: string; password: string }) => {
    const initialErrors: IErrors = {
      email: null,
      password: null
    }
    const errors = reactive<IErrors>({ ...initialErrors })

    const { data, execute, isFetching, onFetchResponse, onFetchError } = useFetch("/auth/login", {
      immediate: false,
      beforeFetch: () => {
        Object.assign(errors, { ...initialErrors })
      }
    })
      .post(credentials)
      .json()

    onFetchResponse(() => {
      localStorage.setItem("user", data.value.user)
      localStorage.setItem("tenant", data.value.tenant)
    })
    onFetchError(() => Object.assign(errors, data.value.detail))

    return { data, execute, errors, isFetching }
  }
}
