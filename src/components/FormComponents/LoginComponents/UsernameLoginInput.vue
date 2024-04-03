<template>
  <div class="username">
            <label for="username">{{ props.label }}</label>
            <input
            v-bind="$attrs"
      v-model="syncValue"
      :class="{'error-input': errorMessage,'focus:ring-0': errorMessage}" 
           
              />
    
              <p
    id="outlined_error"
    :class="{'error':errorMessage}"
  >
    {{ errorMessage }}
  </p>  
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

const syncValue = computed({
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