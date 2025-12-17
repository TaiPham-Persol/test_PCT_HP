<template>
  <div @mouseenter="onHover" @mouseleave="onLeave">
    <a
      rel="noopener noreferrer"
      target="_blank"
      class="flex justify-between items-center rounded-full py-2 pl-6 pr-2 md:py-[14px] md:pl-7 md:pr-[14px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] w-[256px] md:w-[240px]"
      :href="href"
      :class="anchorClasses"
    >
      <BaseTypography
        class="flex items-center gap-2.5 !text-base"
        font="Noto Sans"
        weight="bold"
      >
        {{ text }}
        <img
          v-if="isExternalLinkIcon"
          src="@/assets/images/icon-blank.svg"
          alt="External Link Icon"
          class="w-4 h-4"
        />
      </BaseTypography>

      <IconButton
        ref="viewBtn"
        icon="icon-arrow-r"
        direction="right"
        tone="dark"
        variant="secondary"
        class="!w-[42px] !h-[42px] pointer-events-none"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { ComponentPublicInstance, defineComponent } from 'vue';

export default defineComponent({
  name: 'SecondaryButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      required: true,
    },
    anchorClasses: {
      type: String,
      default: '',
    },
    isExternalLinkIcon: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onHover() {
      (this.$refs.viewBtn as ComponentPublicInstance)?.$el.classList.add(
        'hovered'
      );
    },
    onLeave() {
      (this.$refs.viewBtn as ComponentPublicInstance)?.$el.classList.remove(
        'hovered'
      );
    },
  },
});
</script>
