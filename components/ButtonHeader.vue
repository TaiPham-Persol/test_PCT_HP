<template>
  <component
    :is="href ? 'NuxtLink' : 'button'"
    :to="href || undefined"
    class="btn-header flex flex-row items-center justify-start shrink-0 relative bg-white/70 rounded-full p-2 pl-6 pr-2 pb-2 gap-5 w-64 h-14 shadow-drop overflow-hidden"
    @click="handleClick"
  >
    <div
      class="icon-arrow-wrapper rounded-full shrink-0 w-10 h-10 absolute left-52 top-2"
    >
      <div
        class="bg-style rounded-full w-[474px] h-[474px] absolute -left-56 -top-56"
      />
      <div
        class="bg-white rounded-full opacity-30 w-10 h-10 absolute left-0 top-0"
      />
      <div
        class="icon-ground bg-white rounded-full w-1.5 h-1.5 absolute left-[17px] top-[17px] transition-transform duration-500 ease-in-out"
      />
      <img
        class="icon-arrow absolute top-2 left-2 transition-all duration-500 ease-in-out"
        :src="require(`@/assets/images/icon-arrow-r.svg`)"
        alt="arrow icon"
      />
    </div>
    <span
      class="view-all-open-positions text-black text-left font-notosan text-sm leading-relaxed font-bold relative"
    >
      <slot />
    </span>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonHeader',
  props: {
    href: {
      type: String,
      default: null,
      required: false,
    },
  },
  emits: ['click'],
  setup(_props, { emit }) {
    /**
     * Handle button click event
     */
    const handleClick = () => {
      emit('click');
    };

    return {
      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.btn-header .icon-arrow-wrapper .icon-arrow {
  transform: translateX(-20px);
  opacity: 0;
}
.btn-header:hover .icon-arrow-wrapper {
  .icon-arrow {
    transform: translateX(0px);
    opacity: 1;
  }

  .icon-ground {
    transform: scale(5);
  }
}
</style>
