<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiBallotOutline" title="Forms example" main>

      </SectionTitleLineWithButton>
      <CardBox>
        <Form ref="observer" v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <q-btn no-caps class="register-button" label="Register" type="submit" />
            <UsernameLoginInput label="Select country" lazy-rules rules="email|required" />
            <qv-input outlined label="Please enter an email" custom-label-name="Email" color="green" lazy-rules
              qv-validate="email|required" />

              <EmailInput label="Select country" lazy-rules rules="email|required"/>

          </form>
        </Form>
      </CardBox>
    </SectionMain>

    <SectionTitle>Custom elements</SectionTitle>

    <SectionMain>
      <CardBox>
        <FormField label="Checkbox">
          <FormCheckRadioGroup v-model="customElementsForm.checkbox" name="sample-checkbox"
            :options="{ lorem: 'Lorem', ipsum: 'Ipsum', dolore: 'Dolore' }" />
        </FormField>

        <BaseDivider />

        <FormField label="Radio">
          <FormCheckRadioGroup v-model="customElementsForm.radio" name="sample-radio" type="radio"
            :options="{ one: 'One', two: 'Two' }" />
        </FormField>

        <BaseDivider />

        <FormField label="Switch">
          <FormCheckRadioGroup v-model="customElementsForm.switch" name="sample-switch" type="switch"
            :options="{ one: 'One', two: 'Two' }" />
        </FormField>

        <BaseDivider />

        <FormFilePicker v-model="customElementsForm.file" label="Upload" />
      </CardBox>

      <SectionTitle>Form with status example</SectionTitle>

      <CardBox class="md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto" is-form is-hoverable
        @submit.prevent="formStatusSubmit">
        <NotificationBarInCard :color="formStatusOptions[formStatusCurrent]"
          :is-placed-with-header="formStatusWithHeader">
          <span>
            <b class="capitalize">
              {{ formStatusOptions[formStatusCurrent] }}
            </b>
            state
          </span>
        </NotificationBarInCard>
        <FormField label="Fields">
          <FormControl v-model="form.name" :icon-left="mdiAccount" help="Your full name" placeholder="Name" />
        </FormField>

        <template #footer>
          <BaseButton label="Trigger" type="submit" color="info" />
        </template>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script setup lang="ts">
import type { ColorKey } from "@/colors";
import { reactive, ref } from "vue";
import { mdiBallotOutline, mdiAccount, mdiMail, mdiGithub } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import FormCheckRadioGroup from "@/components/FormCheckRadioGroup.vue";
import FormFilePicker from "@/components/FormFilePicker.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons";
import SectionTitle from "@/components/SectionTitle.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import NotificationBarInCard from "@/components/NotificationBarInCard.vue";
import TInput from "@/components/FormComponents/TailwindComponents/TInput.vue";
import { Form } from 'vee-validate'
import UsernameLoginInput from "@/components/FormComponents/LoginComponents/UsernameLoginInput.vue";
import QvInput from "@/components/FormComponents/QvInput.vue";
import EmailInput from "@/components/FormComponents/RegisterClientComponents/EmailInput.vue";
const selectOptions = [
  { id: 1, label: "Business development" },
  { id: 2, label: "Marketing" },
  { id: 3, label: "Sales" },
];

const form = reactive({
  name: "",
  email: "",
  phone: "",
  department: selectOptions[0],
  subject: "",
  question: "",
});

const customElementsForm = reactive({
  checkbox: ["lorem"],
  radio: "one",
  switch: ["one"],
  file: undefined,
});

const submit = () => {
  //
};

const formStatusWithHeader = ref(true);

const formStatusCurrent = ref(0);

const formStatusOptions: ColorKey[] = ["info", "success", "danger", "warning"];

const formStatusSubmit = () => {
  formStatusCurrent.value = formStatusOptions[formStatusCurrent.value + 1]
    ? formStatusCurrent.value + 1
    : 0;
};


const onSubmit = async (): Promise<any> => {
  console.log("Submitted")
}

</script>
