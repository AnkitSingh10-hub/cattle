import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiCurrencyUsd,
  mdiCup
} from "@mdi/js";

export interface MenuItem {
  to?: string;
  icon?: string;
  label?: string;
  href?: string;
  color?: string;
  target?: "_blank" | "_self";
  menu?: MenuItem[];
}

const menuAside: MenuItem[] = [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    to: "/tables",
    label: "Tables",
    icon: mdiTable,
  },
  {
    label: "Economic",
    icon: mdiCurrencyUsd,
    menu: [
      {
        to: "/income",
        label: "Income",
      },
      {
        to: "/expenses",
        label: "Expenses",
      },
    ],
  },
  {
    label: "Milk",
    icon: mdiCup,
    menu: [
      {
        to: "/milk-production",
        label: "Milk Production",
      },
      {
        to: "/milk-sold",
        label: "Milk Sold",
      }
    ],
  },
  
  {
    to: "/forms",
    label: "Forms",
    icon: mdiSquareEditOutline,
  },
  {
    to: "/ui",
    label: "UI",
    icon: mdiTelevisionGuide,
  },
  {
    to: "/responsive",
    label: "Responsive",
    icon: mdiResponsive,
  },
  {
    to: "/",
    label: "Styles",
    icon: mdiPalette,
  },
  {
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "/login",
    label: "Login",
    icon: mdiLock,
  },
  {
    to: "/error",
    label: "Error",
    icon: mdiAlertCircle,
  },
   
];

export default menuAside;
