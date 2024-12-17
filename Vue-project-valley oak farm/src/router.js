import Vue from "vue";
import Router from "vue-router";
import xMap from "./components/xMap";
import Desktop1 from "./components/Desktop1";
import MapPin from "./components/MapPin";
import Desktop3 from "./components/Desktop3";
import Desktop2 from "./components/Desktop2";
import Desktop6 from "./components/Desktop6";
import Desktop5 from "./components/Desktop5";
import Desktop4 from "./components/Desktop4";
import { desktop1Data, desktop3Data, desktop2Data, desktop6Data, desktop5Data, desktop4Data } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/map",
      component: xMap,
    },
    {
      path: "/map-pin",
      component: MapPin,
    },
    {
      path: "/desktop-3",
      component: Desktop3,
      props: { ...desktop3Data },
    },
    {
      path: "/desktop-2",
      component: Desktop2,
      props: { ...desktop2Data },
    },
    {
      path: "/desktop-6",
      component: Desktop6,
      props: { ...desktop6Data },
    },
    {
      path: "/desktop-5",
      component: Desktop5,
      props: { ...desktop5Data },
    },
    {
      path: "/desktop-4",
      component: Desktop4,
      props: { ...desktop4Data },
    },
    {
      path: "*",
      component: Desktop1,
      props: { ...desktop1Data },
    },
  ],
});
