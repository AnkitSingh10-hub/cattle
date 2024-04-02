import type { RouteRecordRaw } from "vue-router";
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router'
import Style from "@/views/StyleView.vue";
import Home from "@/views/HomeView.vue";

const routes: RouteRecordRaw[] = [
  {
    meta: {
      title: "Select style",
    },
    path: "/",
    name: "style",
    component: Style,
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
    },
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },
  {
    meta: {
      title: "Tables",
    },
    path: "/tables",
    name: "tables",
    component: () => import("@/views/TablesView.vue"),
  },

  {
    meta: {
      title: "IncomeList",
    },
    path: "/income",
    name: "income",
    component: () => import("@/views/economic/IncomeListView.vue"),
  },
  
  {
    meta: {
      title: "ExpensesList",
    },
    path: "/expenses",
    name: "expenses",
    component: () => import("@/views/economic/ExpensesListView.vue"),
  },
  {
    meta: {
      title: "MilkProduction",
    },
    path: "/milk-production",
    name: "milk_production",
    component: () => import("@/views/analysis/MilkProductionList.vue"),
  },
  {
    meta: {
      title: "MilkSold",
    },
    path: "/milk-sold",
    name: "milk_sold",
    component: () => import("@/views/analysis/MilkSoldList.vue"),
  },
  {
    meta: {
      title: "MilkContent",
    },
    path: "/milk-content",
    name: "milk_content",
    component: () => import("@/views/analysis/MilkContentList.vue"),
  },
  {
    meta: {
      title: "Animal",
    },
    path: "/animal",
    name: "animal",
    component: () => import("@/views/animal/AnimalList.vue"),
  },

  {
    meta: {
      title: "Forms",
    },
    path: "/forms",
    name: "forms",
    component: () => import("@/views/FormsView.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    meta: {
      title: "Ui",
    },
    path: "/ui",
    name: "ui",
    component: () => import("@/views/UiView.vue"),
  },
  {
    meta: {
      title: "Responsive layout",
    },
    path: "/responsive",
    name: "responsive",
    component: () => import("@/views/ResponsiveView.vue"),
  },
  {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    meta: {
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
