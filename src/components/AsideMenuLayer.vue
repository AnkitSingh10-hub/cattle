<script setup lang="ts">
import type { MenuItem } from "@/menuAside";
import { mdiLogout, mdiClose } from "@mdi/js";
import { computed } from "vue";
import { useStyleStore } from "@/stores/style.js";
import AsideMenuList from "@/components/AsideMenuList.vue";
import AsideMenuItem from "@/components/AsideMenuItem.vue";
import BaseIcon from "@/components/BaseIcon.vue";

defineProps<{
  menu: MenuItem[];
}>();

const emit = defineEmits<{
  (e: "menu-click", event: MouseEvent, item: MenuItem): void;
  (e: "aside-lg-close-click", event: MouseEvent): void;
}>();

const styleStore = useStyleStore();

const logoutItem = computed(() => ({
  label: "Logout",
  icon: mdiLogout,
  color: "info",
  isLogout: true,
}));

const menuClick = (event: MouseEvent, item: any) => {
  emit("menu-click", event, item);
};

const asideLgCloseClick = (event: MouseEvent) => {
  emit("aside-lg-close-click", event);
};

</script>

<template>
  <aside id="aside" class="lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden">
    <div :class="styleStore.asideStyle" class="lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900">
      <div :class="styleStore.asideBrandStyle"
        class="flex flex-row h-14 items-center justify-between dark:bg-slate-900">
        <div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
          <b class="font-black">One</b>
        </div>
        <button class="hidden lg:inline-block xl:hidden p-4" @click.prevent="asideLgCloseClick">
          <BaseIcon :path="mdiClose" />
        </button>
      </div>


      <q-scroll-area style="height: 519px; max-width: 300px;">
        <div class="q-pa-xs">
          <AsideMenuList :menu="menu" @menu-click="menuClick" />
        </div>

        <ul>
          <AsideMenuItem :item="logoutItem" @menu-click="menuClick" />
        </ul>
      </q-scroll-area>

    </div>
  </aside>
</template>
