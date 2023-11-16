<script setup lang="ts">
import { usePage } from "iles";
const { meta } = usePage();
</script>

<template>
  <NavigationBar :meta="meta" client:load />
  <slot />
  <HfdFooter />
</template>
