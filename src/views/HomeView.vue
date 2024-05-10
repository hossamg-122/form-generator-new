<template>
  <div class="p-8">
    <h1 class="font-inter uppercase font-semibold text-2xl text-primary leading-7 text-center mb-5">
      sign up
    </h1>
    <FormGenerator
      :fields="fields"
      submitButtonText="submit"
      dataUrl="/register"
      :successCallBack="onSuccess"
      successMessage="You are logged in successfully"
      :isAuthForm="true"
    >
      <template #form-footer>
        <RoutingLink
          route="/login"
          name="SIGN IN"
          routeStyle="text-info text-sm font-heading font-semibold underline underline-info underline-offset-2 "
          containerStyle="text-center -mt-4"
        >
          <template #pre-text
            ><span class="text-gray-300 font-heading">Already A Member? </span></template
          >
        </RoutingLink>
      </template>
    </FormGenerator>
  </div>
</template>

<script lang="ts">
import { required, email } from '@vuelidate/validators'

import { FormGenerator, RoutingLink } from '@/components'

export default {
  components: {
    FormGenerator,
    RoutingLink
  },
  data() {
    return {
      formData: {},
      fields: [
        {
          component: 'TextField',
          key: 'full_name',
          bindOptions: {
            labelName: 'Full Name',
            placeholder: 'Enter your name',
            requiredTag: true
          },
          validations: {
            required
          }
        },
        {
          component: 'TextField',
          key: 'email',
          bindOptions: {
            labelName: 'Email Address',
            placeholder: 'Enter your email',
            requiredTag: true
          },
          validations: {
            required,
            email
          }
        },
        {
          component: 'PhoneNumber',
          key: 'phone',
          bindOptions: {
            labelName: 'Phone Number',
            requiredTag: true
          },
          validations: {
            required
          }
        },
        {
          component: 'PasswordField',
          key: 'password',
          bindOptions: {
            labelName: 'Create Password',
            placeholder: 'Enter your password',
            requiredTag: true
          },
          validations: {
            required
          }
        },
        {
          component: 'CheckBoxInput',
          key: 'terms',
          bindOptions: {
            labelName: 'I’ve read and accept',
            hyperLink: 'Terms&Conditions',
            route: '/',
            routeStyle:
              'text-info text-sm font-heading font-semibold underline underline-info underline-offset-2 ml-1',
            containerStyle: ' mb-1'
          },
          validations: {
            required
          }
        },
        {
          component: 'CheckBoxInput',
          key: 'is_robot',
          bindOptions: {
            labelName: 'I’m not a robot'
          },
          validations: {
            required
          }
        }
      ]
    }
  },
  methods: {
    onSuccess() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped></style>
