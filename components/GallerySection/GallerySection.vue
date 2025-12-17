<template>
  <section
    id="career-open-positions"
    class="relative flex items-center justify-center aspect-square overflow-hidden bg-[url('@/assets/images/career/background.jpg')] bg-cover bg-center bg-no-repeat group lg:h-[660px] lg:w-full"
  >
    <div class="container">
      <div
        class="relative flex h-full w-full items-center justify-between aspect-square lg:aspect-[1240/500]"
      >
        <div
          class="absolute top-0 left-0 h-full w-full z-10 lg:group-hover:scale-[1.065] transition-transform duration-500"
        >
          <div
            class="absolute top-0 left-0 h-full w-full z-10 bg-black01/20 lg:bg-transparent lg:group-hover:bg-black01/20 transition-colors duration-500"
          />
          <div
            class="gallery-section-bg bg-cover bg-center bg-no-repeat h-full w-full z-10"
          />
        </div>
        <div
          class="absolute z-10 inset-0 flex h-full w-full flex-col items-center justify-center transition-opacity duration-500 ease-in-out lg:opacity-0 lg:group-hover:opacity-100"
        >
          <BaseTypography color="white" size="size_80" weight="light">
            Careers
          </BaseTypography>
          <BaseHeadline tag="h3" text-classes="!text-white">
            Open Positions
          </BaseHeadline>

          <ButtonPrimary class="mt-5" @click="trackViewAllClick">
            View All Open Positions
          </ButtonPrimary>
        </div>
      </div>
    </div>

    <div class="absolute left-0 bottom-0 z-20 hidden lg:block">
      <ScrollingText />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { gtmEvent, GTM_EVENTS } from '@/utils/gtm';

export default defineComponent({
  name: 'GallerySection',
  methods: {
    trackViewAllClick() {
      gtmEvent(GTM_EVENTS.BUTTON_CLICK, {
        event_category: 'Navigation',
        event_label: 'View All Open Positions',
        click_location: 'Home Page - Gallery Section',
      });
      // Navigate to career opportunities page
      this.$router.push('/career-opportunities');
    },
  },
});
</script>

<style lang="scss" scoped>
.gallery-section-bg {
  background-image: url('@/assets/images/career/employees_sp.png');

  @screen lg {
    background-image: url('@/assets/images/career/employees_pc.png');
  }
}
</style>
