<template>
  <transition name="fade" appear>
    <div
      v-if="isVisible"
      class="cookie-policy fixed bottom-0 right-0 z-9999 w-[250px] md:w-[400px] px-[30px] pt-5 pb-10 z-20"
    >
      <div class="flex flex-col items-center justify-between">
        <div class="flex justify-end w-full mb-5 md:mb-[30px]">
          <span
            class="close-icon h-4 md:h-5 w-4 md:w-5"
            @click="declineCookies"
          />
        </div>

        <div class="flex-1 mb-[30px]">
          <BaseTypography
            font="Noto Sans"
            size="size_14"
            class="leading-relaxed !text-white"
          >
            Our website uses cookies to provide you with a more personalized
            experience. We use them to analyze site usage, optimize our
            advertisements, and integrate with social media. We also share
            information with third-party cookies for advertising and analytics
            purposes. You have the right to choose whether to accept cookies.
            For more details,

            <a
              href="https://www.persol-group.co.jp/en/corporate/governance/security/"
              class="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              please see our policy on transmitting user data to external
              parties.
            </a>
          </BaseTypography>
        </div>

        <button
          class="flex items-center justify-center gap-[30px] h-[58px] md:h-[70px] bg-white rounded-full pl-[28px] pr-[14px]"
          @click="acceptCookies"
          @mouseenter="onHover"
          @mouseleave="onLeave"
        >
          <BaseTypography font="Noto Sans" size="size_16" weight="bold">
            Accept
          </BaseTypography>
          <IconButton
            ref="acceptIcon"
            icon="icon-arrow-r"
            direction="right"
            variant="secondary"
            tone="dark"
            class="!w-[42px] !h-[42px] pointer-events-none"
          />
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { ComponentPublicInstance, defineComponent } from 'vue';
import { loadGTM, hasCookieConsent } from '@/utils/gtm';
import { setLocalStorage } from '@/utils/localStorage';

export default defineComponent({
  name: 'CookiePolicy',
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    if (hasCookieConsent()) {
      // If already accepted, load GTM
      loadGTM();
    } else {
      this.isVisible = true;
    }
  },
  methods: {
    acceptCookies() {
      setLocalStorage('cookiePolicyAccepted', 'true');
      this.isVisible = false;
      // Load Google Tag Manager after consent
      loadGTM();
      // Emit event for potential analytics or other components
      this.$emit('cookies-accepted');
    },
    declineCookies() {
      setLocalStorage('cookiePolicyAccepted', 'false');
      this.isVisible = false;
      // Emit event for potential analytics or other components
      this.$emit('cookies-declined');
    },
    onHover() {
      (this.$refs.acceptIcon as ComponentPublicInstance).$el.classList.add(
        'hovered'
      );
    },
    onLeave() {
      (this.$refs.acceptIcon as ComponentPublicInstance).$el.classList.remove(
        'hovered'
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.cookie-policy {
  background-color: rgba(34, 34, 34, 0.6);
}

.close-icon {
  cursor: pointer;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    background-color: white;
    transform-origin: center;
  }

  &::before {
    height: 20px;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    height: 20px;
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  @media (min-width: 768px) {
    &::before,
    &::after {
      height: 26px;
    }
  }
}
</style>
