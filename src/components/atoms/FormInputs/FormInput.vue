<template>
  <component :is="inputType" v-bind="bindOptions" v-model="localValue" />
</template>

<script lang="ts">
import {
  TextField,
  PasswordField,
  RoutingLink,
  PhoneNumber,
  CheckBoxInput,
  RepeaterInput,
  SelectInput,
  TextAreaField,
  UploadField,
  RadioInput
} from '@/components'

export default {
  components: {
    TextField,
    PasswordField,
    RoutingLink,
    RepeaterInput,
    PhoneNumber,
    CheckBoxInput,
    SelectInput,
    TextAreaField,
    UploadField,
    RadioInput
  },
  props: {
    modelValue: [String, Number, Boolean, Array],
    inputType: {
      type: String
    },
    bindOptions: {
      type: Object
    }
  },
  computed: {
    localValue: {
      get() {
        return this.modelValue
      },
      set(value: any) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<style scoped></style>
