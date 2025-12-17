<template>
  <client-only>
    <section class="py-[50px] md:py-0 md:pb-[180px]">
      <div class="container">
        <BaseHeadline id="career-office-environment">
          Office Environment
        </BaseHeadline>
      </div>

      <BaseCarrousel
        swiper-classes="!pb-[30px] md:!pb-10 !pt-10 md:!pt-[85px]"
        pagination-class="w-full self-center mx-4"
        controls-tone="dark"
      >
        <SwiperSlide
          v-for="image in slideImages"
          :key="image.id"
          class="!h-[207px] !w-[310px] md:!h-[450px] md:!w-[675px] !mr-[10px] md:!mr-5"
        >
          <div>
            <picture>
              <source
                media="(min-width: 768px)"
                :srcset="
                  require(`@/assets/images/office-environment/office-pc-${image.id}.jpg`)
                "
              />
              <img
                :src="
                  require(`@/assets/images/office-environment/office-sp-${image.id}.jpg`)
                "
                :alt="image.alt"
              />
            </picture>
          </div>
        </SwiperSlide>
      </BaseCarrousel>
    </section>
  </client-only>
</template>

<script>
import BaseCarrousel from '@/components/BaseCarrousel.vue';
import { SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'OfficeEnvironment',
  components: {
    BaseCarrousel,
    SwiperSlide,
  },
  data() {
    const slideImages = [
      { id: '1', alt: 'office environment 1' },
      { id: '2', alt: 'office environment 2' },
      { id: '3', alt: 'office environment 3' },
      { id: '4', alt: 'office environment 4' },
      { id: '5', alt: 'office environment 5' },
      { id: '6', alt: 'office environment 6' },
    ];
    return {
      slideImages,
    };
  },
};
</script>
