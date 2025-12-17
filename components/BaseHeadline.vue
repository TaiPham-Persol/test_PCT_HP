<template>
  <div class="headline flex items-center gap-3.5">
    <div class="w-5 h-5 flex flex-col justify-center gap-2.5 py-1.5">
      <div class="h-1.5 rounded" :class="blockClasses" />
    </div>
    <BaseTypography
      :id="id"
      :tag="tag"
      size="size_32"
      class="leading-tight"
      :class="textClasses"
    >
      <slot />
    </BaseTypography>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseHeadline',
  props: {
    /**
     * HTML tag for the headline text
     */
    tag: {
      type: String,
      default: 'h2',
      validator: (value: string) =>
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value),
    },
    blockClasses: {
      type: String,
      default: 'bg-yellow',
    },
    textClasses: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: null,
    },
  },
});
</script>
