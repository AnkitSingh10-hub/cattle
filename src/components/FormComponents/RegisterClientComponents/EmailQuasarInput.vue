<template>
     <div class="fields">
                  <label class="label-2" for="email">{{ props.label }}</label>
                  <q-input
                    v-bind="$attrs"
                    outlined
                    v-model="syncValue"
                    label="Email"
                    color="green"
                    lazy-rules
                    :rules="[rules]"
                  />
</div>

  </template>
  
  <script setup lang="ts">
  import {defineEmits, defineProps, onMounted, computed, ref, toValue} from 'vue'
  import { useField} from 'vee-validate'
  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
      label:{
          type:String,
          default:''
      },
      modelValue:{
          type: [String, Number, Object],
          default: '',
      },
      vid: {
      type: String,
      default: function (props: any) {
        return props.label;
      },
    },
    rules: {
      type: String,
      required: false,
    },
  })
  const { value, errorMessage } = useField(props.label, props.rules)
  
  const syncValue:any = computed({
      get(){
          return value.value
      },
      set(data){
          value.value = data
          emit('update:modelValue', data)
      }
  })
  
  
  
  onMounted(() => {
    if (props.modelValue) value.value = props.modelValue
  })
  
  
  
  </script>
  
  <style scoped>
    @import '../../../styles/validation.css';

  
  </style>
  