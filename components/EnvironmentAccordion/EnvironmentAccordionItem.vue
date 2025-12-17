<template>
  <div
    class="accordion-item bg-white border-t border-gray02 hover:bg-gray00 transition-colors duration-500 ease-in-out"
  >
    <div
      class="flex items-center justify-between gap-5 px-5 pt-5 pb-[30px] lg:py-10 lg:pl-10 lg:pr-20 cursor-pointer"
      :class="{ 'bg-gray00': isExpanded }"
      @click="handleToggle"
    >
      <div
        class="flex flex-1 flex-col lg:flex-row items-start lg:items-center gap-[10px] lg:gap-[60px]"
      >
        <div class="w-20 h-20 lg:w-[150px] lg:h-[150px] p-1 overflow-hidden">
          <img
            :src="require(`@/assets/images/people-and-work-env/${imgName}.svg`)"
            :alt="imgName"
            class="w-full h-full object-contain"
          />
        </div>

        <BaseTypography class="flex-1" size="size_24" weight="medium">
          {{ title }}
        </BaseTypography>
      </div>

      <div class="w-[50px] h-[50px]">
        <AccordionExpandButton :is-expanded="isExpanded" class="h-full" />
      </div>
    </div>

    <transition
      name="accordion"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
    >
      <div v-if="isExpanded" class="overflow-hidden">
        <div class="px-5 pb-[30px] lg:px-10 lg:pb-20 bg-gray00">
          <BaseTypography
            class="lg:!pl-[210px] !mb-[30px] lg:!mb-[60px]"
            font="Noto Sans"
            size="size_16"
            v-html="content.summary"
          />
          <div class="grid grid-cols-1 md:grid-cols-2 items-stretch gap-5">
            <div
              v-for="item in content.detail"
              :key="item.title"
              class="px-5 py-[30px] lg:p-10 flex flex-col gap-5 lg:gap-10 bg-white rounded-[10px] shadow-[0_2px_8px_0_rgba(0,0,0,0.15)]"
            >
              <div class="w-[30px] h-[30px]">
                <img
                  :src="
                    require(`@/assets/images/people-and-work-env/${imgNameDetail}.svg`)
                  "
                  :alt="imgNameDetail"
                  class="w-full h-full object-contain"
                />
              </div>
              <BaseTypography font="Noto Sans" size="size_20" weight="bold">
                {{ item.title }}
              </BaseTypography>
              <BaseTypography font="Noto Sans" v-html="item.description" />
            </div>
          </div>
          <AccordionExpandButton
            :is-expanded="isExpanded"
            class="block md:hidden mt-[10px]"
            @click="handleToggleAndScrollToTop"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { AccordionContent } from '@/types';

export default defineComponent({
  name: 'EnvironmentAccordionItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    imgName: {
      type: String,
      required: true,
    },
    content: {
      type: Object as PropType<AccordionContent>,
      required: true,
    },
    imgNameDetail: {
      type: String,
      required: true,
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleToggle() {
      this.$emit('toggle');
    },
    handleToggleAndScrollToTop() {
      const accordionItem = this.$el as HTMLElement;

      this.$emit('toggle');

      this.$nextTick(() => {
        const headerOffset = 100;
        const elementPosition = accordionItem.getBoundingClientRect().top;

        if (
          elementPosition < headerOffset ||
          elementPosition > window.innerHeight
        ) {
          const offsetPosition =
            elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      });
    },
    onEnter(el: Element) {
      const element = el as HTMLElement;
      element.style.height = '0';
      element.style.opacity = '0';
      element.style.transition =
        'height 0.4s ease-in-out, opacity 0.4s ease-in-out';

      // Force reflow to ensure initial state is applied
      element.getBoundingClientRect();

      element.style.height = `${element.scrollHeight}px`;
      element.style.opacity = '1';
    },
    onAfterEnter(el: Element) {
      const element = el as HTMLElement;
      element.style.height = 'auto';
      element.style.transition = '';
    },
    onLeave(el: Element) {
      const element = el as HTMLElement;
      // Set explicit height before animation
      element.style.height = `${element.scrollHeight}px`;

      // Force reflow to ensure height is applied
      element.getBoundingClientRect();

      element.style.transition =
        'height 0.4s ease-in-out, opacity 0.4s ease-in-out';

      // Start the closing animation
      requestAnimationFrame(() => {
        element.style.height = '0';
        element.style.opacity = '0';
      });
    },
  },
});
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .accordion-item:hover {
    ::v-deep .btn-expand {
      .icon-arrow {
        transform: translateY(0px) !important;
        opacity: 1 !important;
      }

      .icon-ground {
        transform: scale(9) !important;
      }
    }
  }
}
</style>
