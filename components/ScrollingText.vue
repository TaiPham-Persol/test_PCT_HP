<template>
  <div
    class="pointer-events-none opacity-20 relative flex overflow-x-hidden items-center w-max gap-[50px]"
  >
    <div class="animate-marquee whitespace-nowrap flex items-center">
      <slot>
        <BaseTypography
          class="!text-[120px] !text-gray00"
          weight="light"
          :class="textClasses"
        >
          PERSOL CAREER TECH STUDIO VIETNAM
        </BaseTypography>
      </slot>
      <img
        src="@/assets/images/career/dot-circle.svg"
        alt="dot-circle"
        class="mx-[50px]"
      />
    </div>
    <div
      class="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center"
    >
      <slot>
        <BaseTypography
          class="!text-[120px] !text-gray00"
          weight="light"
          :class="textClasses"
        >
          PERSOL CAREER TECH STUDIO VIETNAM
        </BaseTypography>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScrollingText',
  props: {
    textClasses: {
      type: String,
      default: '',
    },
  },
});
</script>
