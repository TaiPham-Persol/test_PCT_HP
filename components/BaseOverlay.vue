<template>
  <transition name="overlay" appear>
    <div
      v-if="isOpen"
      ref="overlay"
      class="overlay fixed inset-0 flex items-center justify-center z-[9999] bg-black01/50"
      @click="handleOverlayClick"
    >
      <div @click.stop>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseOverlay',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    closeOnOverlayClick: {
      type: Boolean,
      default: true,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      scrollY: 0,
    };
  },
  watch: {
    isOpen: {
      handler(newValue) {
        if (newValue) {
          this.disableBodyScroll();
        } else {
          this.enableBodyScroll();
        }
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    this.enableBodyScroll();
    this.removeEventListeners();
  },
  mounted() {
    this.moveToBody();

    if (this.isOpen) {
      this.addEventListeners();
    }
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },

    handleOverlayClick() {
      if (this.closeOnOverlayClick) {
        this.handleClose();
      }
    },

    handleKeydown(event: KeyboardEvent) {
      if (this.closeOnEscape && event.key === 'Escape') {
        this.handleClose();
      }
    },

    addEventListeners() {
      document.addEventListener('keydown', this.handleKeydown);
    },

    removeEventListeners() {
      document.removeEventListener('keydown', this.handleKeydown);
    },

    disableBodyScroll() {
      this.scrollY = window.scrollY;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    },

    enableBodyScroll() {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      window.scrollTo(0, this.scrollY);
    },

    moveToBody() {
      if (this.$el && this.$refs?.overlay) {
        const overlayElement = this.$refs?.overlay as HTMLElement;

        if (overlayElement) {
          document.body.appendChild(overlayElement);
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.overlay-enter,
.overlay-leave-to {
  opacity: 0;
  background-color: transparent;
}

.overlay-enter-active .bg-white,
.overlay-leave-active .bg-white {
  transition: transform 0.3s ease-in-out;
}

.overlay-enter .bg-white,
.overlay-leave-to .bg-white {
  transform: scale(0.95);
}
</style>
