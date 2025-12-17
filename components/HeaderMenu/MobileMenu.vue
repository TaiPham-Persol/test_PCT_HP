<template>
  <div>
    <!-- Mobile Header -->
    <div class="flex justify-between items-center w-full p-4">
      <NuxtLink to="/" class="w-[260px] h-[31px] flex-shrink-0">
        <img
          :src="
            require(transparent
              ? '@/assets/images/tech_studio_logo_white.svg'
              : '@/assets/images/tech_studio_logo.svg')
          "
          alt="persol logo"
        />
      </NuxtLink>
      <button class="text-black" aria-label="open menu" @click="toggleMenu">
        <img
          :src="
            require(transparent
              ? '@/assets/images/icon-hamburger-white.svg'
              : '@/assets/images/icon-hamburger.svg')
          "
          alt="open"
          class="w-[42px] h-[42px]"
        />
      </button>
    </div>
    <div
      class="fixed inset-0 bg-white z-[10000] flex flex-col transition-transform duration-300 ease-in-out"
      :class="{
        'translate-x-full': !isMenuOpen,
        'translate-x-0': isMenuOpen,
      }"
    >
      <!-- Mobile Header -->
      <div class="flex justify-between items-center w-full p-4">
        <NuxtLink to="/" class="w-[260px] h-[31px] flex-shrink-0">
          <img
            src="@/assets/images/tech_studio_logo.svg"
            alt="persol logo"
            class="w-full h-full object-contain"
          />
        </NuxtLink>
        <button class="text-black" aria-label="Close menu" @click="toggleMenu">
          <img
            src="@/assets/images/icon-close.svg"
            alt="close"
            class="w-[42px] h-[42px]"
          />
        </button>
      </div>
      <div class="overflow-auto">
        <!-- Menu Items -->
        <div class="flex flex-col items-center w-full px-5">
          <BaseAccordion :items="menuItems" />
        </div>
        <!-- Button -->
        <div class="flex flex-col items-center gap-2.5 w-full px-5 mt-10">
          <ButtonHeader @click="trackViewAllClick">
            View All Open Positions
          </ButtonHeader>
        </div>
        <!-- footer link -->
        <ul class="flex flex-wrap gap-[16px] px-10 mt-10 mb-10">
          <li
            v-for="link in footerLinks"
            :key="link.text"
            class="flex items-center gap-2"
          >
            <a :href="link.url" class="text-black text-xs" target="_blank">
              {{ link.text }}
            </a>
            <img
              src="@/assets/images/icon-blank.svg"
              alt="link"
              class="w-3.25 h-3.25"
            />
          </li>
        </ul>
        <!-- Copyright -->
        <div class="flex justify-center items-center pb-5">
          <span class="text-black text-xs">© PERSOL CAREER CO., LTD.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MenuItem } from '@/types/menu';
import { gtmEvent, GTM_EVENTS } from '@/utils/gtm';
import { footerLinks } from '@/utils/menuItems';

export default defineComponent({
  name: 'MobileMenu',
  props: {
    menuItems: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    transparent: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isMenuOpen: false,
      footerLinks: [
        footerLinks[0],
        footerLinks[1],
        footerLinks[2],
        footerLinks[4],
      ],
      scrollbarWidth: null as number | null,
    };
  },
  watch: {
    // eslint-disable-next-line func-names
    '$route.hash': function () {
      if (this.isMenuOpen) {
        this.toggleMenu();
      }
    },
  },
  beforeDestroy() {
    document.body.classList.remove('overflow-hidden');
    document.body.style.paddingRight = '0';
  },
  methods: {
    trackViewAllClick() {
      this.toggleMenu();
      gtmEvent(GTM_EVENTS.BUTTON_CLICK, {
        event_category: 'Navigation',
        event_label: 'View All Open Positions',
        click_location: 'Header - Mobile Menu',
      });
      // Navigate to career opportunities page
      this.$router.push('/career-opportunities');
    },
    /**
     * Toggle the mobile menu open/close state
     */
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.scrollbarWidth === null) {
        this.scrollbarWidth = this.getScrollbarWidth();
      }
      if (this.isMenuOpen) {
        document.body.classList.add('overflow-hidden');
        document.body.style.paddingRight = `${this.scrollbarWidth}px`;
      } else {
        document.body.classList.remove('overflow-hidden');
        document.body.style.paddingRight = '0';
      }
    },
    getScrollbarWidth() {
      // Create a temporary div element
      const outer = document.createElement('div');

      // Apply styles to make it scrollable and hidden
      outer.style.visibility = 'hidden';
      outer.style.overflow = 'scroll'; // Forces a scrollbar
      document.body.appendChild(outer);

      // Create an inner div to measure against
      const inner = document.createElement('div');
      outer.appendChild(inner);

      // Calculate the scrollbar width
      const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

      // Remove the temporary elements
      outer?.remove();

      return scrollbarWidth;
    },
  },
});
</script>
