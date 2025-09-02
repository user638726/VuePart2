import type { AuthError } from '@supabase/supabase-js'
import type { LoginForm } from '@/types/AuthForm.ts'

type FormErrors<T> = {
  [K in keyof T]: string[]
}

export const useFormErrors=()=>{
const serverError = ref('')
const realtimeErrors = ref<FormErrors<LoginForm>>()
const handleServerError = (error: AuthError) => {
  serverError.value = error.message === "Invalid login credentials" ? "Invalid email or password" : error.message
}
const handleLoginForm = async (formData:LoginForm)=>{
   realtimeErrors.value = {
     email: [],
     password: []
   }
   const { validateEmail, validatePassword } = await import('@/utils/formValidations.ts')

   const emailErrors = validateEmail(formData.email)
   if(emailErrors.length) realtimeErrors.value.email = emailErrors
   const passwordErrors = validatePassword(formData.password)
   if(passwordErrors.length) realtimeErrors.value.password = passwordErrors
}
return {
  serverError,
  handleServerError,
  realtimeErrors,
  handleLoginForm
}
}
