<template>
        <div class="q-pa-md">
        <q-table :grid="$q.screen.xs" class="my-sticky-header-column-table w-[100%]" title="Income list" :rows="incomePaginationdata.results"
          :columns="columns" row-key="name" @request="onRequest" :filter="filter" v-model:pagination="IncomePagination"
          separator="cell" square>
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search by Name">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
      

          <template v-slot:body-cell-action="props">
            <q-td key="action" :props="props">
              <q-btn no-caps size="12px" flat color="blue-6" icon="visibility"
                :to="{ name: 'farmer-detail', params: { id: props.row.id } }" />
              <q-btn no-caps size="12px" flat color="orange" icon="edit"
                :to="{ name: 'usersregisteredplantlist', params: { id: props.row.id } }" />
                <q-btn no-caps size="12px" color="red" flat @click="confirm = true; row_id=props.row.id"  icon="delete"/>

            </q-td>
          </template>
        </q-table>
        <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete_forever" color="red" text-color="white" />
          <span class="q-ml-sm">Are you sure you want to delete ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="No" color="primary" v-close-popup />
          <q-btn flat label="Yes" @click="deleteIncome(row_id)" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
</template>

<script setup lang="ts">
import { useIncomeStore } from '@/stores/income'
import type { QTablePagination } from '../../models/page.interface'
import type { PaginatedIncome } from '../../models/Income.interface'
import '../../styles/tablelist.sass'
import { computed, ref, onBeforeMount } from "vue";
const confirm = ref(false)

const IncomeStore = useIncomeStore()

const incomePaginationdata = computed((): PaginatedIncome => {
  return IncomeStore.PaginatedIncome
})

const IncomePagination = computed({
  get(): QTablePagination {
    return IncomeStore.IncomeTablePagination
  },
  set(data: QTablePagination) {
    IncomeStore.setIncomeTablePagination(data)
  }
})

onBeforeMount(() => {
  onRequest({ pagination: IncomePagination.value, filter: '' })
})

const loading = ref(false)
const filter = ref('')
const row_id = ref()

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
  await IncomeStore.getIncome(queryParams)
  loading.value = false

  IncomePagination.value = {
    page: incomePaginationdata.value.currentPage,
    rowsPerPage: incomePaginationdata.value.pageSize,
    rowsNumber: incomePaginationdata.value.totalObjects,
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
        incomePaginationdata.value.results.findIndex((x: any) => x == row) +
        1 +
        (IncomePagination.value.page - 1) * IncomePagination.value.rowsPerPage
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
    field: 'date',
    sortable: true
  },
  {
    name: 'Particulars',
    align: 'center',
    label: 'Particulars',
    field: 'particulars',
    sortable: true
  },
  {
    name: 'Quantity',
    align: 'center',
    label: 'Quantity',
    field: 'quantity',
    sortable: true
  },
 
  {
    name: 'Amount',
    align: 'center',
    label: 'Amount',
    field: 'amount',
    sortable: true
  },
  
  { name: 'action', align: 'center', label: 'Action' },
 
 
]


const deleteIncome = async (id: number) => {
  try {
    await IncomeStore.deleteIncome(id);
  
    onRequest({ pagination: IncomePagination.value, filter: filter.value });
  } catch (error) {
    console.error('Error deleting income:', error);
  }
};


</script>

<style scoped>
:deep(.q-field__native){
    box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)
  }
</style>