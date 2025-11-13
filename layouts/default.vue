<template>
  <div class="bg-dark min-h-screen text-white">
    <Navbar />
    <main class="pt-16">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import Footer from "~/components/layout/Footer.vue";
</script>
