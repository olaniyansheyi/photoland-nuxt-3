<script setup>
import { NuxtLink } from "#build/components";
import { useError } from "#app";

useError({ statusCode: 404, message: "Page Not Found" });
</script>

<template>
  <div
    class="flex justify-center items-center text-center flex-col px-5 text-white my-16"
  >
    <h3 class="font-semibold text-2xl tracking-wide">404-Page not found</h3>
    <NuxtLink
      to="/"
      class="px-6 py-3 rounded-lg text-primary font-semibold bg-accent hover:bg-accent-hover mt-8"
    >
      Go Back Home
    </NuxtLink>
  </div>
</template>
