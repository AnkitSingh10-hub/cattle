<script lang="ts" setup>
import { RouterView } from "vue-router";
import { useJwtStore } from './stores/jwt'
import { onBeforeMount } from "vue";
const JwtStore = useJwtStore()

onBeforeMount(async () => {
  await JwtStore.refreshAccessToken()
})
</script>

<template>
  <RouterView />
</template>
