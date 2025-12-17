<template>
  <div
    v-show="isVisible"
    class="fixed z-10 bottom-10 right-10 flex items-center gap-5"
  >
    <!-- Label -->
    <div class="text-[14px] leading-[150%] font-notosan text-gray-800">
      Back to Top
    </div>

    <IconButton icon="icon-arrow-r" class="-rotate-90" @click="scrollToTop" />
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'BackToTopButton',
  setup() {
    const isVisible = ref(false);

    // Function to check if user has scrolled over 80% of the page
    const checkScrollPosition = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const footerEl = document.querySelector('footer');
      if (footerEl) {
        const footerOffset = footerEl.offsetTop - footerEl.clientHeight;

        isVisible.value = scrollTop > footerOffset;
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    onMounted(() => {
      window.addEventListener('scroll', checkScrollPosition);
      // Check initial position
      checkScrollPosition();
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', checkScrollPosition);
    });

    return {
      isVisible,
      scrollToTop,
    };
  },
};
</script>
