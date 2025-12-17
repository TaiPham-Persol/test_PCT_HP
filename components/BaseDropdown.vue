<template>
  <div class="dropdown">
    <div class="cursor-pointer">
      <slot name="trigger"></slot>
    </div>
    <div
      class="menu absolute top-full left-0 w-[180px] bg-gray-800/80 backdrop-blur-[8px] rounded-md shadow-lg p-3.5 flex flex-col gap-2.5 z-[10000]"
    >
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseDropdown',
  props: {
    id: {
      type: String,
      default: undefined,
    },
  },
});
</script>

<style scoped>
.dropdown {
  position: relative;
}
.dropdown .menu {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
}

.dropdown:hover .menu {
  opacity: 1;
  visibility: visible;
}
</style>
