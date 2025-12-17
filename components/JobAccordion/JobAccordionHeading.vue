<template>
  <h3 class="inline-flex items-center gap-[6px] mb-3 md:mb-0">
    <div class="w-[6px] h-[6px] rounded-[10px] bg-yellow" />
    <span
      class="font-notosan font-bold text-sm md:text-base leading-[1.5em] text-black"
    >
      {{ label }}
    </span>
  </h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JobAccordionHeading',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>
