<template>
  <client-only>
    <section class="group-highlights py-[50px] md:py-0">
      <div class="container">
        <BaseHeadline id="our-business-highlights">
          PERSOL Group Highlights
        </BaseHeadline>
      </div>
      <BaseCarrousel
        container-classes="pb-20 md:pb-[110px]"
        wrapper-swiper-classes="md:-translate-x-[9px]"
        swiper-classes="!pb-[30px] md:!pb-10 !pt-10 md:!pt-20 md:!pl-[9px]"
        pagination-class="w-full self-center mx-4"
        is-duplicate-slides
      >
        <SwiperSlide
          v-for="card in highlightsCards.concat(highlightsCards)"
          :key="card.id"
          class="!h-[300px] !w-[280px] md:!h-[460px] md:!w-[460px] !mr-[10px] md:!mr-5"
        >
          <GroupHighlightsCard v-bind="card" />
        </SwiperSlide>
      </BaseCarrousel>
    </section>
  </client-only>
</template>

<script>
import constants from '@/utils/constants';
import BaseCarrousel from '@/components/BaseCarrousel.vue';
import { SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'GroupHighlights',
  components: {
    BaseCarrousel,
    SwiperSlide,
  },
  data() {
    return {
      highlightsCards: constants.highlightsCards,
    };
  },
};
</script>

<style lang="scss" scoped>
.group-highlights {
  background-image: url('@/assets/images/banners/slide-banner-sp.png');
  background-position: center calc(100% - 50px);
  background-size: 100% 280px;

  @media (min-width: 768px) {
    background-image: url('@/assets/images/banners/slide-banner-pc.png');
    background-position: left bottom;
    background-size: 83% 500px;
  }
}
</style>
