<script setup lang="ts">
// const props = defineProps({
// 	name: {
// 		type: String,
// 		default: 'FreshFishProducts',
// 	},
// })

// const emit = defineEmits(['addToCart'])

// // Use the addToCart function like this:
// // Eg-1: addToCart('pizza', 10)
// // Eg-2: (event) => addToCart('pizza', 10, event)
// const addToCart = (item, quantity /*, event*/) => {
// 	emit('addToCart', { item, quantity })
// }
import { SmokedFish } from "~~/db.json";
// const SmokedFish = [
//   {
//     Id: 18,
//     Category: "Smoked Fish",
//     Name: "Salmon Fillet",
//     Description: "A whole side of smoked Salmon",
//     Options: "Sold by weight",
//     Price: "38.00",
//     UnitOfSale: "Kg",
//     ImageName: "/smokedsalmonfillet.jpg",
//     Visible: "Yes",
//     Href: "#",
//   },
//   {
//     Id: 19,
//     Category: "Smoked Fish",
//     Name: "Hot Smoked Salmon",
//     Description: "Portions of hot smoked Salmon",
//     Options: "Sold by weight",
//     Price: "35.00",
//     UnitOfSale: "kg",
//     ImageName: "/hotsmokedsalmon.jpg",
//     Visible: "Yes",
//     Href: "#",
//   },
//   {
//     Id: 20,
//     Category: "Smoked Fish",
//     Name: "Smoked Mackerel",
//     Description: "SmokedMackerel fillets",
//     Options: "Sold by weight",
//     Price: "21.00",
//     UnitOfSale: "kg",
//     ImageName: "/smokedmackerelfillet.jpg",
//     Visible: "Yes",
//     Href: "#",
//   },
//   {
//     Id: 21,
//     Category: "Smoked Fish",
//     Name: "Smoked Cod",
//     Description: "Smoked Cod loins",
//     Options: "Sold by weight",
//     Price: "22.50",
//     UnitOfSale: "kg",
//     ImageName: "/smokedcodloin.jpg",
//     Visible: "Yes",
//     Href: "#",
//   },
//   {
//     Id: 22,
//     Category: "Smoked Fish",
//     Name: "Smoked Haddock",
//     Description: "Undyed smoked Haddock fillets",
//     Options: "Sold by weight",
//     Price: "22.50",
//     UnitOfSale: "kg",
//     ImageName: "/undyedsmokedhaddockfillet.jpg",
//     Visible: "Yes",
//     Href: "#",
//   },
//   // More products...
// ];
</script>

<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white dark:bg-gray-800">
    <div
      class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">SmokedFish</h2>

      <div
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          v-for="fish in SmokedFish"
          :key="fish.Id"
          class="relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg dark:bg-gray-600 group"
        >
          <div
            class="bg-gray-200 aspect-h-4 aspect-w-3 sm:aspect-none group-hover:opacity-75 sm:h-96"
          >
            <img
              :src="fish.ImageName"
              :alt="fish.ImageName"
              class="object-cover object-center w-full h-full sm:h-full sm:w-full"
            />
          </div>
          <div class="flex flex-col flex-1 p-4 space-y-2">
            <h3 class="text-sm font-medium text-gray-900 dark:text-gray-200">
              <a :href="fish.Href">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ fish.Name }}
              </a>
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-300">
              {{ fish.Description }}
            </p>
            <div class="flex flex-col justify-end flex-1">
              <p class="text-sm italic text-gray-500 dark:text-gray-300">
                {{ fish.Options }}
              </p>
              <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                £{{ fish.Price }} {{ fish.UnitOfSale }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
