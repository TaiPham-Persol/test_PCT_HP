<template>
  <section class="py-[50px] lg:py-0">
    <div
      class="open-positions-bg bg-cover h-[300px] lg:h-[400px] py-[30px] lg:py-20 relative"
    >
      <div
        class="container flex flex-col lg:flex-row justify-between lg:relative lg:z-10"
      >
        <div class="lg:w-[272px] lg:h-[240px] flex items-center">
          <BaseHeadline block-classes="bg-white">Open Positions</BaseHeadline>
        </div>
        <div
          class="lg:w-[290px] lg:h-[240px] flex items-end absolute lg:static top-[50%] left-[50%] translate-x-[-50%] lg:translate-x-0 translate-y-[-50%] lg:translate-y-0"
        >
          <ButtonPrimary @click="trackViewAllClick">
            View All Open Positions
          </ButtonPrimary>
        </div>
      </div>
      <div
        class="absolute bottom-[20px] lg:top-[50%] left-0 lg:translate-x-0 lg:translate-y-[-50%] w-full z-0 overflow-hidden"
      >
        <ScrollingText text-classes="!text-[62px] lg:!text-[120px]" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { gtmEvent, GTM_EVENTS } from '@/utils/gtm';

export default defineComponent({
  name: 'OpenPositions',
  methods: {
    trackViewAllClick() {
      gtmEvent(GTM_EVENTS.BUTTON_CLICK, {
        event_category: 'Navigation',
        event_label: 'View All Open Positions',
        click_location: 'Home Page - Open Positions Section',
      });
      // Navigate to career opportunities page
      this.$router.push('/career-opportunities');
    },
  },
});
</script>

<style lang="scss" scoped>
.open-positions-bg {
  background-image: url('@/assets/images/open-positions/bg_sp.png');

  @screen lg {
    background-image: url('@/assets/images/open-positions/bg_pc.png');
  }
}
</style>
