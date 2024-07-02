// import { defineNuxtPlugin } from "#app";
// import * as vt from "vue-toastification";
// import "vue-toastification/dist/index.css";

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(vt.default);
//   return {
//     provide: {
//       toast: vt.useToast(),
//     },
//   };
// });

import { defineNuxtPlugin } from "#app";
import Toast, { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast);
  const toast = useToast();
  return {
    provide: {
      toast: toast,
    },
  };
});
