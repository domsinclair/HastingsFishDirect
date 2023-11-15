<script setup lang="ts">
// const props = defineProps({
// 	name: {
// 		type: String,
// 		default: 'LobsterPriceBanner',
// 	},
// })

// const emit = defineEmits(['addToCart'])

// // Use the addToCart function like this:
// // Eg-1: addToCart('pizza', 10)
// // Eg-2: (event) => addToCart('pizza', 10, event)
// const addToCart = (item, quantity /*, event*/) => {
// 	emit('addToCart', { item, quantity })
// }
import { MegaphoneIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="fixed inset-x-0 pb-2 sm:pb-5">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="p-2 bg-indigo-600 rounded-lg shadow-lg sm:p-3">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex items-center flex-1 w-0">
            <span class="flex p-2 bg-indigo-800 rounded-lg">
              <MegaphoneIcon class="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="md:hidden">Lobster prices will rise soon!</span>
              <span class="hidden md:inline"
                >Lobster prices will rise in December. Buy yours now and have it
                cooked by us.</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
