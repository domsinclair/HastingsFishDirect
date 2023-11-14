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
const products = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "$256",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
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
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg dark:bg-gray-600 group"
        >
          <div
            class="bg-gray-200 aspect-h-4 aspect-w-3 sm:aspect-none group-hover:opacity-75 sm:h-96"
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="object-cover object-center w-full h-full sm:h-full sm:w-full"
            />
          </div>
          <div class="flex flex-col flex-1 p-4 space-y-2">
            <h3 class="text-sm font-medium text-gray-900 dark:text-gray-200">
              <a :href="product.href">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ product.name }}
              </a>
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-300">
              {{ product.description }}
            </p>
            <div class="flex flex-col justify-end flex-1">
              <p class="text-sm italic text-gray-500 dark:text-gray-300">
                {{ product.options }}
              </p>
              <p class="text-base font-medium text-gray-900 dark:text-gray-200">
                {{ product.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
