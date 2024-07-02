export default {
  buildModules: ["@nuxtjs/fontawesome"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  build: {
    transpile: ["vue-toastification"],
  },

  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      regular: true,
      brands: true,
    },
  },

  runtimeConfig: {
    public: {
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    },
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  },

  css: ["~/assets/css/global.css"],
  plugins: [
    { src: "~/plugins/supabase.js", mode: "client" },
    "~/plugins/fontawesome.js",
    "~/plugins/vue-toastification.js",
  ],
};
