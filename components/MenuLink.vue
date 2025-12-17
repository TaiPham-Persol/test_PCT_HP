<template>
  <NuxtLink
    v-if="href"
    :to="href"
    class="flex items-center space-x-2 p-4 cursor-pointer"
  >
    <span
      class="font-bold text-base"
      :class="transparent ? 'text-white' : 'text-black'"
      v-html="label"
    />
  </NuxtLink>
  <span v-else class="flex items-center space-x-2 p-4 cursor-pointer">
    <span
      class="font-bold text-base"
      :class="transparent ? 'text-white' : 'text-black'"
      v-html="label"
    />
    <img
      v-if="hasArrow"
      :src="
        require(transparent
          ? '@/assets/images/icon-arrow-s-white.svg'
          : '@/assets/images/icon-arrow-s.svg')
      "
      alt="arrow"
      class="w-6 h-6"
    />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/**
 * MenuLink component for rendering menu links with optional arrow
 */
export default defineComponent({
  name: 'MenuLink',
  props: {
    href: {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      required: true,
    },
    hasArrow: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
