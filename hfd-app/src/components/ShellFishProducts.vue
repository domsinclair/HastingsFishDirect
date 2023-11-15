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
const ShellFish = [
  {
    Id: 3,
    Category: "Shell Fish",
    Name: "Live Razor Clams",
    Description: "One kilogramme of live Razor Clams",
    Options: "Sold by weight",
    Price: "21.50",
    UnitOfSale: "kg",
    ImageName: "/liverazorclams.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 10,
    Category: "Shell Fish",
    Name: "Mussels",
    Description: "2 kg net of Cornish Mussels (prepared and ready to cook)",
    Options: "Sold by weight",
    Price: "6.50",
    UnitOfSale: "kg",
    ImageName: "/cornishmussels.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 11,
    Category: "Shell Fish",
    Name: "Native Live Lobster",
    Description:
      "Local live Lobster available in a wide range of sizes from 400 gm",
    Options: "Sold by weight",
    Price: "38.00",
    UnitOfSale: "kg",
    ImageName: "/localnativelobster.jpg",
    Visible: "Yes",
    Href: "#",
  },
  // More products...
];
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
      <h2 class="sr-only">ShellFish</h2>

      <div
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          v-for="fish in ShellFish"
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
              <a :href="fish.href">
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
