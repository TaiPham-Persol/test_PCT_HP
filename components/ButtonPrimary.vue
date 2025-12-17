<template>
  <component
    :is="href ? 'NuxtLink' : 'button'"
    :to="href || undefined"
    class="btn-primary flex flex-row items-center justify-start shrink-0 relative bg-white/70 rounded-full p-3.5 pl-7 pr-3.5 pb-3.5 gap-5 w-[290px] h-[68px] shadow-drop overflow-hidden backdrop-blur-[4px]"
    @click="handleClick"
  >
    <div
      class="icon-arrow-wrapper rounded-full shrink-0 w-[42px] h-[42px] absolute right-3 top-3.5"
    >
      <div
        class="bg-style rounded-full w-[552px] h-[552px] absolute -left-60 -top-60"
      />
      <div
        class="bg-white rounded-full opacity-30 w-[42px] h-[42px] absolute left-0 top-0"
      />
      <div
        class="icon-ground bg-white rounded-full w-1.5 h-1.5 absolute left-[18px] top-[18px] transition-transform duration-500 ease-in-out"
      />
      <img
        class="icon-arrow absolute top-[9px] left-[9px] transition-all duration-500 ease-in-out"
        :src="require(`@/assets/images/icon-arrow-r.svg`)"
        alt="arrow icon"
      />
    </div>
    <span
      class="view-all-open-positions text-black text-left font-notosan text-base leading-relaxed font-bold relative"
    >
      <slot />
    </span>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonPrimary',
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
.btn-primary .icon-arrow-wrapper .icon-arrow {
  transform: translateX(-20px);
  opacity: 0;
}
.btn-primary:hover .icon-arrow-wrapper {
  .icon-arrow {
    transform: translateX(0px);
    opacity: 1;
  }

  .icon-ground {
    transform: scale(5.32);
  }
}
</style>
