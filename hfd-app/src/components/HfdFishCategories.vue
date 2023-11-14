<script setup lang="ts">
// const props = defineProps({
// 	name: {
// 		type: String,
// 		default: 'HfdFishCategories',
// 	},
// })

// const emit = defineEmits(['addToCart'])

// // Use the addToCart function like this:
// // Eg-1: addToCart('pizza', 10)
// // Eg-2: (event) => addToCart('pizza', 10, event)
// const addToCart = (item, quantity /*, event*/) => {
// 	emit('addToCart', { item, quantity })
// }
const callouts = [
  {
    name: "Fresh Fish",
    description: "A wide variety of seasonal fresh fish",
    imageSrc: "/freshfish.jpg",
    imageAlt: "",
    href: "/freshfish",
  },
  {
    name: "Shell Fish",
    description: "Fantastic shellfish for every occasion",
    imageSrc: "/shellfish.jpg",
    imageAlt: "",
    href: "/shellfish",
  },
  {
    name: "Smoked Fish",
    description: "The finest smoked fish direct from our own smokery",
    imageSrc: "/smokedfish.jpg",
    imageAlt: "",
    href: "/smokedfish",
  },
];
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-800">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-2xl py-16 mx-auto sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-300">
          Our Fish
        </h2>

        <div
          class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
        >
          <div
            v-for="callout in callouts"
            :key="callout.name"
            class="relative group"
          >
            <div
              class="relative w-full overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
            >
              <img
                :src="callout.imageSrc"
                :alt="callout.imageAlt"
                class="object-cover object-center w-full h-full"
              />
            </div>
            <h3 class="mt-6 text-gray-500 text-md dark:text-gray-400">
              <a :href="callout.href">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900 dark:text-gray-300">
              {{ callout.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
