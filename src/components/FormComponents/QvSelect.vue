<template>

  <q-select
    v-bind="$attrs"
    v-model="value"
    :error-message="errorMessage"
    :error="!!errorMessage"
    :label="props.label"
    :class="{
      'q-field--required':
        props.qvValidate && props.qvValidate.includes('required'),
    }"
  >
    <template v-for="(_, slot) of slots" :key="slot" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </q-select>
</template>
<script lang="ts">
import { defineComponent, useSlots } from "vue";
defineComponent({
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
import type { QSelectSlots } from "quasar";
import { useField } from "vee-validate";
// eslint-disable-next-line
const slots: QSelectSlots = useSlots() as any;
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  vid: {
    type: String,
    default: function (props: any) {
      return props.customLabelName || props.label
    }
  },
  qvValidate: {
    type: String,
    required: false,
  },
  customLabelName: {
    type: String,
    required: false
  }
});

const { errorMessage, value } = useField<string | number | null | undefined>(
  props.vid,
  props.qvValidate
);
</script>

<style scoped>

</style>