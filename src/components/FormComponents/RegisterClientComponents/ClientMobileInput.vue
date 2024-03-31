<template>
    <div class="fields">
      <label class="label-2" for="mobile_number">{{ props.label }}</label>
  
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
     
    >        
    </div>
    
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number, Object],
      default: ''
    },
    vid: {
      type: String,
      default: function (props: any) {
        return props.label;
      },
    },
   
  })

  </script>
  
  <style scoped>
    @import '../../../styles/validation.css';

  </style>
  