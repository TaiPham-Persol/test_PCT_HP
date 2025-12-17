<template>
  <button
    class="btn-expand flex items-center justify-center w-full h-10 md:w-[66px] md:h-[66px] relative p-[5px]"
    @click="handleClick"
  >
    <div
      class="bg-yellow rounded-[30px] md:rounded-full w-full h-full absolute right-[0%] left-[0%] bottom-[0%] top-[0%] opacity-50 z-0"
    />
    <div
      class="icon-ground bg-yellow rounded-[30px] md:rounded-full flex flex-row gap-0 items-center justify-center w-full h-full md:w-1.5 md:h-1.5 relative z-10 transition-all duration-500 ease-in-out z-0"
    />
    <div
      class="icon-arrow h-6 w-6 max-w-none absolute md:top-[21px] md:left-[21px] transition-all duration-500 ease-in-out z-10"
    >
      <img
        :src="require(`@/assets/images/icon-arrow-s.svg`)"
        class="h-6 w-6"
        :class="isExpanded ? 'rotate-180' : ''"
        alt="expand icon"
      />
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/**
 * AccordionExpandButton component
 *
 * A reusable expand/collapse button for accordion components.
 * Features a yellow circular button with an arrow icon that rotates based on state.
 *
 * @example
 * <AccordionExpandButton
 *   :is-expanded="isOpen"
 *   @click="toggleAccordion"
 * />
 */
export default defineComponent({
  name: 'AccordionExpandButton',
  props: {
    /**
     * Whether the accordion is currently expanded
     */
    isExpanded: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  methods: {
    /**
     * Handles the button click event and emits to parent
     */
    handleClick() {
      this.$emit('click');
    },
  },
});
</script>
<style lang="scss" scoped>
@media (min-width: 768px) {
  .btn-expand .icon-arrow {
    transform: translateY(-20px);
    opacity: 0;
  }
  .btn-expand:hover {
    .icon-arrow {
      transform: translateY(0px);
      opacity: 1;
    }

    .icon-ground {
      transform: scale(9);
    }
  }
}
</style>
