
<template>
    <LayoutAuthenticated>
      <SectionMain>
        <SectionTitleLineWithButton :icon="mdiCurrencyUsd" title="Milk sold" main>
         
        </SectionTitleLineWithButton>
        
  
        <CardBox class="mb-6" has-table>
          <div class="q-pa-md">
  
          <q-table :grid="$q.screen.xs" class="my-sticky-header-column-table w-[100%]" title="Milk sold list" :rows="milksoldPaginationdata.results"
            :columns="columns" row-key="name" @request="onRequest" :filter="filter" v-model:pagination="MilkSoldPagination"
            separator="cell" square>
            <template v-slot:top-right>
              <q-input borderless dense debounce="300" v-model="filter" placeholder="Search by Name" class="input-style">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
        
  
            <template v-slot:body-cell-action="props">
              <q-td key="action" :props="props">
                <q-btn no-caps size="12px" flat color="green" icon="visibility"
                  :to="{ name: 'farmer-detail', params: { id: props.row.id } }" />
                <q-btn no-caps size="12px" flat color="green" icon="manage_accounts"
                  :to="{ name: 'usersregisteredplantlist', params: { id: props.row.id } }" />
              </q-td>
            </template>
          </q-table>
        </div>
  
          <CardBoxModal v-model="isModalActive" title="Sample modal">
      <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
      <p>This is sample modal</p>
    </CardBoxModal>
  
    <CardBoxModal
      v-model="isModalDangerActive"
      title="Please confirm"
      button="danger"
      has-cancel
    >
      <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
      <p>This is sample modal</p>
    </CardBoxModal>
  
    <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
      <span
        v-for="checkedRow in checkedRows"
        :key="checkedRow.id"
        class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"
      >
        {{ checkedRow.name }}
      </span>
    </div>
  </CardBox>
      </SectionMain>
    </LayoutAuthenticated>
  </template>
  
  <script setup lang="ts">
  import {
    mdiMonitorCellphone,
    mdiTableBorder,
    mdiTableOff,
    mdiGithub,
    mdiCurrencyUsd
  } from "@mdi/js";
  import SectionMain from "@/components/SectionMain.vue";
  import NotificationBar from "@/components/NotificationBar.vue";
  import TableSampleClients from "@/components/TableSampleClients.vue";
  import CardBox from "@/components/CardBox.vue";
  import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
  import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
  import BaseButton from "@/components/BaseButton.vue";
  import CardBoxComponentEmpty from "@/components/CardBoxComponentEmpty.vue";
  import type { Clients } from "@/stores/main";
  import { computed, ref, onBeforeMount } from "vue";
  import { useMainStore } from "@/stores/main";
  import { mdiEye, mdiTrashCan } from "@mdi/js";
  import CardBoxModal from "@/components/CardBoxModal.vue";
  import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
  import BaseLevel from "@/components/BaseLevel";
  import BaseButtons from "@/components/BaseButtons";
  import UserAvatar from "@/components/UserAvatar.vue";
  
  import type { QTablePagination } from '../../models/page.interface'
  import type { PaginatedMilkSold } from '../../models/Milk.interface'
  import '../../styles/tablelist.sass'
  import { useMilkSoldStore } from '@/stores/milksold'
  
  const MilkSoldStore = useMilkSoldStore()
  
  const milksoldPaginationdata = computed((): PaginatedMilkSold => {
    return MilkSoldStore.PaginatedMilkSold
  })
  
  const MilkSoldPagination = computed({
    get(): QTablePagination {
      return MilkSoldStore.MilkSoldTablePagination
    },
    set(data: QTablePagination) {
      MilkSoldStore.setMilkSoldTablePagination(data)
    }
  })
  
  onBeforeMount(() => {
    onRequest({ pagination: MilkSoldPagination.value, filter: '' })
  })
  
  const loading = ref(false)
  const filter = ref('')
  
  const onRequest = async (props: any): Promise<void> => {
    const { page, rowsPerPage, sortBy, descending } = props.pagination
    const filter = props.filter
    loading.value = true
  
    const ordering = `${descending ? '-' : ''}${sortBy}`
    const queryParams = {
      page: page,
      search: filter,
      ordering: ordering,
      pageSize: rowsPerPage
    }
    await MilkSoldStore.getMilkSold(queryParams)
    loading.value = false
  
    MilkSoldPagination.value = {
      page: milksoldPaginationdata.value.currentPage,
      rowsPerPage: milksoldPaginationdata.value.pageSize,
      rowsNumber: milksoldPaginationdata.value.totalObjects,
      sortBy: sortBy,
      descending: descending
    }
  }
  
  const columns: Array<any> = [
    {
      name: 'sn',
      label: 'S.N.',
      align: 'center',
      field: (row: any) => {
        return (
            milksoldPaginationdata.value.results.findIndex((x: any) => x == row) +
          1 +
          (MilkSoldPagination.value.page - 1) * MilkSoldPagination.value.rowsPerPage
        )
      }
    },
   
    {
      name: 'User',
      align: 'center',
      label: 'User',
      field: 'user',
      sortable: true
    },
    {
      name: 'Date',
      align: 'center',
      label: 'Date',
      field: 'month_year',
      sortable: true
    },
    {
      name: 'Milktocoop',
      align: 'center',
      label: 'Milk to coop',
      field: 'milk_to_coop',
      sortable: true
    },
   
    {
      name: 'Milktoothers',
      align: 'center',
      label: 'Milk to others',
      field: 'milk_to_others',
      sortable: true
    },
    {
      name: 'Totalmilksold',
      align: 'center',
      label: 'Total milk sold',
      field: 'total_milk_sold',
      sortable: true
    },
    
    { name: 'action', align: 'center', label: 'Action' },
   

  ]
  
  
  
  const mainStore = useMainStore();
  
  const items = computed(() => mainStore.clients);
  
  const isModalActive = ref(false);
  
  const isModalDangerActive = ref(false);
  
  const perPage = ref(5);
  
  const currentPage = ref(0);
  
  const checkedRows = ref<Clients[]>([]);
  
  const itemsPaginated = computed(() =>
    items.value.slice(
      perPage.value * currentPage.value,
      perPage.value * (currentPage.value + 1)
    )
  );
  
  const numPages = computed(() => Math.ceil(items.value.length / perPage.value));
  
  const currentPageHuman = computed(() => currentPage.value + 1);
  
  const pagesList = computed(() => {
    const pageList = [];
  
    for (let i = 0; i < numPages.value; i++) {
      pageList.push(i);
    }
  
    return pageList;
  });
  
  const remove = (arr: Clients[], cb: Function) => {
    const newArr: Clients[] = [];
  
    arr.forEach((item) => {
      if (!cb(item)) {
        newArr.push(item);
      }
    });
  
    return newArr;
  };
  
  const checked = (isChecked: boolean, client: Clients) => {
    if (isChecked) {
      checkedRows.value.push(client);
    } else {
      checkedRows.value = remove(
        checkedRows.value,
        (row: Clients) => row.id === client.id
      );
    }
  };
  </script>
  