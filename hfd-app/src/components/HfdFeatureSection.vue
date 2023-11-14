<script setup lang="ts">
// const props = defineProps({
// 	name: {
// 		type: String,
// 		default: 'HfdFeatureSection',
// 	},
// })

// const emit = defineEmits(['addToCart'])

// // Use the addToCart function like this:
// // Eg-1: addToCart('pizza', 10)
// // Eg-2: (event) => addToCart('pizza', 10, event)
// const addToCart = (item, quantity /*, event*/) => {
// 	emit('addToCart', { item, quantity })
// }
import {
  BuildingStorefrontIcon,
  CurrencyPoundIcon,
  PhoneIcon,
  TruckIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Select your fish",
    description:
      "Browse through the fish we have on offer and make your selection.",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Call to order",
    description:
      "Call us to place your order. We'll confirm availability and price.",
    icon: PhoneIcon,
  },
  {
    name: "Make payment",
    description:
      "Chose how you want to pay and we'll advise you of the cost and any delivery charges if applicable.",
    icon: CurrencyPoundIcon,
  },
  {
    name: "Await Delivery",
    description:
      "Sit back and await the delivery of your fish.  Generally it's next day.",
    icon: TruckIcon,
  },
];
</script>

<template>
  <div class="py-24 bg-white dark:bg-gray-800 sm:py-32">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div
        class="max-w-2xl mx-auto text-gray-900 lg:text-center dark:text-gray-300"
      >
        <!--<h2 class="text-base font-semibold leading-7 text-indigo-600">
          Deploy faster
        </h2>-->
        <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          The benefits of local service online
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          We source the finest local fish, advise you on what's suitable
          according to availability and then deliver it to your door.
        </p>
      </div>
      <div class="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt
              class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-300"
            >
              <div
                class="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg"
              >
                <component
                  :is="feature.icon"
                  class="w-6 h-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd
              class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400"
            >
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
