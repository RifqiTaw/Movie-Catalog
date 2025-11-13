<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-dark text-white">
    <header>
      <Navbar />
    </header>

    <main id="main-content" class="flex-1 pt-16" role="main">
      <slot />
    </main>

    <Footer />
  </div>
</template>
