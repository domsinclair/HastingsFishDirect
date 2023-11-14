<script setup lang="ts">
// const props = defineProps({
// 	name: {
// 		type: String,
// 		default: 'HfdHeaderImage',
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
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/vue/20/solid";

const cards = [
  {
    name: "Sales",
    description:
      "Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.",
    icon: PhoneIcon,
  },
  {
    name: "Technical Support",
    description:
      "Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
    icon: LifebuoyIcon,
  },
  {
    name: "Media Inquiries",
    description:
      "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
    icon: NewspaperIcon,
  },
];
</script>

<template>
  <div class="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32">
    <img
      src="/sunset.jpg"
      alt=""
      class="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
    />
    <div
      class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div class="px-6 mx-auto max-w-7xl lg:px-8 lg:h-96">
      <div class="max-w-2xl mx-auto lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Hastings Fish Direct
        </h2>
        <!--<p class="mt-6 text-lg leading-8 text-gray-300">
			Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
			cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
			aliqua.
		  </p>-->
      </div>
      <!-- <div
		  class="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
		>
		  <div
			v-for="card in cards"
			:key="card.name"
			class="flex p-6 gap-x-4 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10"
		  >
			<component
			  :is="card.icon"
			  class="flex-none w-5 text-indigo-400 h-7"
			  aria-hidden="true"
			/>
			<div class="text-base leading-7">
			  <h3 class="font-semibold text-white">{{ card.name }}</h3>
			  <p class="mt-2 text-gray-300">{{ card.description }}</p>
			</div>
		  </div>
		</div> -->
    </div>
  </div>
</template>

<style scoped></style>
