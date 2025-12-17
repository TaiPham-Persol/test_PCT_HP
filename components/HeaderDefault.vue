<template>
  <client-only>
    <div>
      <header
        ref="header"
        class="fixed top-0 left-0 w-full z-[9999] from-black/30 to-transparent transition-colors duration-300 max-w-[1920px] xl:right-0 xl:mx-auto"
        :class="`${paddingClass} ${
          transparent ? 'bg-gradient-to-b' : 'bg-white'
        }`"
      >
        <MobileMenu
          v-if="isMobile"
          :menu-items="menuItems"
          :transparent="transparent"
        />
        <DesktopMenu
          v-else
          :menu-items="menuItems"
          :transparent="transparent"
        />
      </header>
      <div v-if="!isHomePage" class="h-[74px] md:h-[118px]" />
    </div>
  </client-only>
</template>

<script>
import throttle from '@/utils/throttle';
import { defaultMenuItems } from '@/utils/menuItems';
import MobileMenu from '@/components/HeaderMenu/MobileMenu.vue';
import DesktopMenu from '@/components/HeaderMenu/DesktopMenu.vue';

export default {
  name: 'HeaderDefault',
  components: {
    MobileMenu,
    DesktopMenu,
  },
  props: {
    isHomePage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      windowWidth: process.client ? window.innerWidth : 768,
      menuItems: defaultMenuItems,
      transparent: this.isHomePage,
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    },
    paddingClass() {
      return this.isMobile ? '' : 'p-2.5';
    },
  },
  mounted() {
    this.throttledUpdate = throttle(this.updateWindowWidth.bind(this), 100);
    this.throttledScrollUpdate = throttle(
      this.updateTransparent.bind(this),
      100
    );
    window.addEventListener('resize', this.throttledUpdate);
    window.addEventListener('scroll', this.throttledScrollUpdate);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.throttledUpdate);
    window.removeEventListener('scroll', this.throttledScrollUpdate);
  },
  methods: {
    /**
     * Update window width on resize
     */
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },

    /**
     * Update transparent state based on scroll position
     */
    updateTransparent() {
      const ourBusinessSection = document.querySelector('section.our-business');
      const headerHeight = this.$refs.header?.offsetHeight || 0;

      if (ourBusinessSection) {
        const rect = ourBusinessSection.getBoundingClientRect();

        this.transparent = rect.top > headerHeight;
      }
    },
  },
};
</script>
