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

//import FreshFish from "db.json";
//
// More products...
const FreshFish = [
  {
    Id: 1,
    Category: "Fresh Fish",
    Name: "Wild Bass",
    Description: "Whole wild Bass with an average weight between 1 - 1.5 kg",
    Options: "Sold by weight",
    Price: "21.50",
    UnitOfSale: "kg",
    ImageName: "/wildbass.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 2,
    Category: "Fresh Fish",
    Name: "Dover Sole",
    Description: "Whole Dover Sole",
    Options: "Sold by weight",
    Price: "32.50",
    UnitOfSale: "kg",
    ImageName: "/doversole.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 4,
    Category: "Fresh Fish",
    Name: "Hake Fillet",
    Description: "Large fillet of Hake between 800 gm / 1 kg to serve 4",
    Options: "Sold by weight",
    Price: "21.50",
    UnitOfSale: "kg",
    ImageName: "/hakefillet.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 5,
    Category: "Fresh Fish",
    Name: "Whole Turbot",
    Description:
      "A whole Turbot with an average weight between 1 - 2 kg, with other sizes available",
    Options: "Sold by weight",
    Price: "25.00",
    UnitOfSale: "kg",
    ImageName: "/wholeturbot.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 6,
    Category: "Fresh Fish",
    Name: "Whole Brill",
    Description: "A whole Brill averaging 2-3 kg to provide 4 - 6 portions",
    Options: "Sold by weight",
    Price: "24.00",
    UnitOfSale: "kg",
    ImageName: "/wholebrill.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 7,
    Category: "Fresh Fish",
    Name: "Line Caught Bass",
    Description: "An individual Bass averaging 800 gm / 1 kg or 1 kg - 2 kg",
    Options: "Sold by weight",
    Price: "22.00",
    UnitOfSale: "kg",
    ImageName: "/linecaughtbass.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 8,
    Category: "Fresh Fish",
    Name: "Rye Bay Lemon Sole",
    Description: "Available with average weights of 450, 550 and 700 grms",
    Options: "Sold by weight",
    Price: "20.50",
    UnitOfSale: "kg",
    ImageName: "/ryebaylemonsole.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 9,
    Category: "Fresh Fish",
    Name: "Squid",
    Description: "Fresh local Squid averaging 300 - 500 gm each",
    Options: "Sold by weight",
    Price: "19.00",
    UnitOfSale: "kg",
    ImageName: "/localsquid.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 12,
    Category: "Fresh Fish",
    Name: "Whole Mackerel",
    Description: "Whole Mackerel with an average weight of 450 - 500 gm",
    Options: "Sold by weight",
    Price: "10.50",
    UnitOfSale: "kg",
    ImageName: "/wholemackerel.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 13,
    Category: "Fresh Fish",
    Name: "Cod Fillet",
    Description:
      "A large Cod fillet with an averake weight of 1 kg providing 3 - 4 portions",
    Options: "Sold by weight",
    Price: "19.75",
    UnitOfSale: "kg",
    ImageName: "/largecodfillet.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 14,
    Category: "Fresh Fish",
    Name: "Whole Plaice",
    Description: "A large whole Plaice with an average weight of 800 gm",
    Options: "Sold by weight",
    Price: "12.50",
    UnitOfSale: "kg",
    ImageName: "/wholeplaice.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 15,
    Category: "Fresh Fish",
    Name: "Whole John Dory",
    Description: "A whole John Dory with an average weight between 1 - 1.5 kg",
    Options: "Sold by weight",
    Price: "21.00",
    UnitOfSale: "kg",
    ImageName: "/wholejohndory.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 16,
    Category: "Fresh Fish",
    Name: "MonkFish",
    Description: "A tail of Monkfish with an average weight between 1 - 2 kg ",
    Options: "Sold by weight",
    Price: "21.00",
    UnitOfSale: "kg",
    ImageName: "/monkfish.jpg",
    Visible: "Yes",
    Href: "#",
  },
  {
    Id: 17,
    Category: "Fresh Fish",
    Name: "Gurnard",
    Description: "Whole tub Gurnard",
    Options: "Sold by weight",
    Price: "10.50",
    UnitOfSale: "kg",
    ImageName: "/tubgurnard.jpg",
    Visible: "Yes",
    Href: "#",
  },
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
      <h2 class="sr-only">FreshFish</h2>

      <div
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          v-for="fish in FreshFish"
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
