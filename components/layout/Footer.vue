<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <footer
    class="bg-dark text-gray-400 text-sm py-10 mt-12 border-t border-gray-800"
  >
    <div class="max-w-6xl mx-auto px-6">
      <nav aria-label="Footer Navigation">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <section>
            <h2 class="font-semibold text-white mb-2 text-base">Browse</h2>
            <ul class="space-y-1">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/tv">TV Shows</NuxtLink></li>
            </ul>
          </section>

          <section>
            <h2 class="font-semibold text-white mb-2 text-base">Company</h2>
            <ul class="space-y-1">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </section>

          <section>
            <h2 class="font-semibold text-white mb-2 text-base">Support</h2>
            <ul class="space-y-1">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </section>

          <section>
            <h2 class="font-semibold text-white mb-2 text-base">Follow</h2>
            <div
              class="flex gap-3"
              role="group"
              aria-label="Social media links"
            >
              <a href="#" aria-label="Visit our Facebook page"
                ><Icon icon="mdi:facebook"
              /></a>
              <a href="#" aria-label="Visit our Instagram page"
                ><Icon icon="mdi:instagram"
              /></a>
              <a href="#" aria-label="Visit our Twitter page"
                ><Icon icon="mdi:twitter"
              /></a>
            </div>
          </section>
        </div>
      </nav>

      <p class="text-center text-xs text-gray-600 mt-8">
        © 2025 Elemes Movie App. All rights reserved.
      </p>
    </div>
  </footer>
</template>
