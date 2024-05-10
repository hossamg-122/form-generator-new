<template>
  <form @submit.prevent="">
    {{ data }}
    <div class="grid grid-cols-12 gap-5">
      <div
        v-for="(field, index) in customFields"
        :class="field.cols ? field.cols : 'col-span-12'"
        :key="index"
      >
        <component
          :is="field.component"
          :errors="
            v$.$invalid
              ? field.validations && v$.data[field.key].$errors
              : responseErrors[field.key]
          "
          v-bind="field.bindOptions"
          v-model="data[field.key]"
          @update:modelValue="clearError($event, field.key)"
        />
      </div>
    </div>

    <slot name="form-body" />

    <CustomButton
      v-if="isAuthForm"
      class="my-8"
      :loading="submitted"
      :name="submitButtonText"
      :disabled="!isDisabled"
      @click="submit"
    />
    <div class="flex items-center justify-end my-8" v-else-if="isEditable">
      <CustomButton
        class="mr-4"
        customStyle="capitalize px-16 bg-gray-225"
        @click="$emit('resetForm')"
        :name="resetButtonText"
      />
      <CustomButton
        :loading="submitted"
        customStyle="capitalize px-16"
        :name="submitButtonText"
        :disabled="!isDisabled"
        @click="submit"
      />
    </div>

    <slot name="form-footer" />
  </form>
</template>

<script lang="ts">
import { useVuelidate } from '@vuelidate/core'
import type { IField } from '@/types'
import {
  TextField,
  PasswordField,
  RoutingLink,
  CustomButton,
  PhoneNumber,
  CheckBoxInput,
  RepeaterInput,
  SelectInput,
  TextAreaField,
  UploadField,
  RadioInput
} from '@/components'

import { useToast } from 'vue-toastification'

export default {
  components: {
    TextField,
    PasswordField,
    RoutingLink,
    CustomButton,
    RepeaterInput,
    PhoneNumber,
    CheckBoxInput,
    SelectInput,
    TextAreaField,
    UploadField,
    RadioInput
  },
  props: {
    fields: {
      type: Array<IField>,
      required: true
    },
    formValues: {
      type: Object,
      default: null
    },
    submitButtonText: {
      type: String,
      default: 'Save Changes'
    },
    resetButtonText: {
      type: String,
      default: 'Cancel Changes'
    },
    dataUrl: { type: String },
    successMessage: { type: String },
    errorMessage: { type: String },
    successCallBack: {
      type: Function,
      default(data: any) {
        return data
      }
    },
    isAuthForm: {
      type: Boolean,
      default: false
    },
    isEditable: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    const toast = useToast()
    return { toast, v$: useVuelidate() }
  },

  data(): any {
    return {
      data: {},
      dataValidation: {},
      submitted: false,
      responseErrors: {},
      customFields: []
    }
  },
  computed: {
    isDisabled() {
      return this.customFields
        .filter((field: IField) => field.validations)
        .map(({ key }: IField) => {
          if (Array.isArray(this.data[key])) {
            return this.data[key].map((el: any) => el.length)
          } else {
            return this.data[key]?.length || this.data[key]
          }
        })
        .flat()
        .every((length: number) => length > 0)
    },
    customValidation() {
      return this.dataValidation
    },
    displayErrors() {
      return this.responseErrors
    }
  },
  watch: {
    fields: {
      immediate: true,
      deep: true,
      handler() {
        this.customFields = this.fields.filter((field: IField) => field.show !== false)
      }
    },
    formValues: {
      immediate: true,
      deep: true,
      handler() {
        if (this.formValues) {
          this.data = this.formValues
        }
      }
    }
  },
  created() {
    this.fields.map((field: IField) => {
      if (field.validations) {
        this.dataValidation[field.key] = { ...field.validations }
      }
    })
  },
  validations() {
    return {
      data: { ...this.customValidation }
    }
  },
  methods: {
    async submit() {
      this.v$.$touch()

      if (this.v$.$invalid) return

      this.submitted = true

      try {
        const { data } = await this.apiRequest(false).post(this.dataUrl, this.data)
        if (this.successMessage) {
          this.toast.success(this.successMessage)
        }
        this.successCallBack(data)
      } catch ({ response }) {
        if (this.errorMessage) {
          this.toast.error(this.errorMessage)
        }

        if (response?.data?.data?.message) {
          this.toast.error(response.data.data.message)
        }
        if (!response.data.errors) {
          Object.keys(response.data).map((key) => {
            this.responseErrors[key] = response.data[key].map((error: String) => ({
              $message: error
            }))
          })
        } else {
          Object.keys(response.data.errors).map((key) => {
            this.responseErrors[key] = response.data.errors[key].map((error: String) => ({
              $message: error
            }))
          })
        }
      } finally {
        this.submitted = false
      }
    },
    clearError(field: IField) {
      if (this.responseErrors[field]) {
        delete this.responseErrors[field]
      }
    },
    fieldSpan(span: number) {
      return span ? span : 'col-span-12'
    }
  }
}
</script>

<style scoped></style>
