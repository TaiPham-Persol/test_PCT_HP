<template>
  <div class="accordion w-full">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item border-b border-gray-300 py-3.5"
    >
      <NuxtLink
        v-if="item.type === MenuItemType.SIMPLE && item.href"
        :to="item.href"
        class="flex justify-between items-center py-4 px-5 text-black font-bold text-sm"
      >
        {{ item.label }}
      </NuxtLink>
      <div
        v-else
        class="flex justify-between items-center py-4 px-5"
        :aria-expanded="isOpen(index)"
        :aria-controls="`accordion-content-${index}`"
        @click="toggle(index)"
      >
        <span class="text-black font-bold text-sm">{{ item.label }}</span>
        <img
          v-if="item.type === MenuItemType.DROPDOWN && !isOpen(index)"
          src="@/assets/images/icon-plus.svg"
          alt="plus"
          class="w-6 h-6 transition-transform duration-200"
        />
        <img
          v-if="item.type === MenuItemType.DROPDOWN && isOpen(index)"
          src="@/assets/images/icon-minus.svg"
          alt="plus"
          class="w-6 h-6 transition-transform duration-200"
        />
      </div>
      <transition
        name="accordion"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @leave="onLeave"
      >
        <div
          v-if="isOpen(index) && item.subItems"
          :id="`accordion-content-${index}`"
        >
          <div class="pb-4">
            <NuxtLink
              v-for="sub in item.subItems"
              :key="sub.label"
              :to="sub.href"
              class="flex items-center cursor-pointer py-2 px-5"
            >
              <span class="text-black text-sm font-normal" v-html="sub.label" />
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { MenuItem, MenuItemType } from '@/types/menu';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseAccordion',
  props: {
    items: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    allowMultiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      openItems: [] as number[],
      MenuItemType,
    };
  },
  methods: {
    toggle(index: number) {
      if (this.allowMultiple) {
        if (this.openItems.includes(index)) {
          this.openItems = this.openItems.filter((i) => i !== index);
        } else {
          this.openItems.push(index);
        }
      } else {
        this.openItems = this.openItems.includes(index) ? [] : [index];
      }
    },
    isOpen(index: number) {
      return this.openItems.includes(index);
    },
    onEnter(el: Element) {
      const element = el as HTMLElement;
      element.style.height = '0';
      element.style.opacity = '0';
      element.style.transition =
        'height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      element.style.height = `${element.scrollHeight}px`;
      element.style.opacity = '1';
    },
    onAfterEnter(el: Element) {
      const element = el as HTMLElement;
      element.style.height = 'auto';
    },
    onLeave(el: Element) {
      const element = el as HTMLElement;
      element.style.height = `${element.scrollHeight}px`;
      element.style.transition =
        'height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      element.style.height = '0';
      element.style.opacity = '0';
    },
  },
});
</script>
