<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="onSubmit">
        <FormField label="Login" help="Please enter your login">
          <FormControl v-model="user.username" :icon="mdiAccount" name="login" autocomplete="username" />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl v-model="user.password" :icon="mdiAsterisk" type="password" name="password"
            autocomplete="current-password" />
        </FormField>

        <!-- <FormCheckRadio v-model="form.remember" name="remember" label="Remember" :input-value="true" /> -->

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Login" />
            <BaseButton to="/dashboard" color="info" outline label="Back" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { Ref } from 'vue'
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import CardBox from "@/components/CardBox.vue";
import FormCheckRadio from "@/components/FormCheckRadio.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import { useJwtStore } from "@/stores/jwt";
import { useQuasar } from 'quasar'
import type { UserLoginInfo } from '@/models/JWT.interface'




const $q = useQuasar()

const JwtStore = useJwtStore()
const router = useRouter();
const user: Ref<UserLoginInfo> = ref({} as UserLoginInfo)

const onSubmit = async (): Promise<void> => {
  await JwtStore.getJWT(user.value)
  $q.notify({
    message: 'Login successfull',
    type: 'positive',
    position: 'top-right'
  })
  router.push({ name: 'dashboard' })
}

</script>
