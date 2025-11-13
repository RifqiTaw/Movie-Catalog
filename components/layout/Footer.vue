<template>
  <footer
    class="bg-dark text-gray-400 text-sm py-10 mt-12 border-t border-gray-800"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <p class="font-semibold text-white mb-2">Browse</p>
          <ul class="space-y-1">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/tv">TV Shows</NuxtLink></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-white mb-2">Company</p>
          <ul class="space-y-1">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-white mb-2">Support</p>
          <ul class="space-y-1">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-white mb-2">Follow</p>
          <div class="flex gap-3">
            <Icon icon="mdi:facebook" />
            <Icon icon="mdi:instagram" />
            <Icon icon="mdi:twitter" />
          </div>
        </div>
      </div>
      <p class="text-center text-xs text-gray-600 mt-8">
        © 2025 Elemes Movie App. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
