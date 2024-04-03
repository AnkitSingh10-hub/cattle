<template>
    <div class="password">
      <label for="password">{{ props.label }}</label>
              <input
              v-bind="$attrs"
        v-model="syncValue"
        :class="{'error-input': errorMessage}"       
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
  import {defineEmits, defineProps, onMounted, computed} from 'vue'
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

label {
  color: #3f3f3f;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

input {
  width: 100%;
  height: 53px;
  border-radius: 5px;
  border: 1px solid #c8c8c8;
  padding: 15px;
  color: #3f3f3f;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

p {
    font-family: Poppins;
  }

.username {
  margin: 2rem 0;
}


.error {
  
  color: #c10015;
}

.error-input {
  border: 1px solid #c10015;
}
p{
  font-family: Poppins;
}


input:focus {
  outline: none;
}

</style>