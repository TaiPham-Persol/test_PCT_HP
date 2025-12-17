<template>
  <client-only>
    <section class="employee-voices py-[50px] md:py-0">
      <div class="container">
        <BaseHeadline id="career-employee-voices">Employee Voices</BaseHeadline>
      </div>

      <BaseCarrousel
        ref="carousel"
        container-classes="pb-20 md:pb-[110px]"
        wrapper-swiper-classes="md:-translate-x-[9px]"
        swiper-classes="!pb-[30px] md:!pb-10 !pt-10 md:!pt-20 md:!pl-[9px]"
        pagination-class="w-full self-center mx-4"
        :options="{ loop: false }"
      >
        <SwiperSlide
          v-for="card in employeeVoices"
          :key="card.id"
          class="!h-[442px] !w-[280px] md:!w-[500px] !mr-[10px] md:!mr-5"
        >
          <EmployeeVoiceCard v-bind="card" @click="openModalHandler(card.id)" />
        </SwiperSlide>
      </BaseCarrousel>

      <EmployeeModal
        :interview-id="employeeId"
        :is-open="isOpen"
        @close="closeModalHandler"
      />
    </section>
  </client-only>
</template>

<script>
import constants from '@/utils/interviews';
import BaseCarrousel from '@/components/BaseCarrousel.vue';
import { SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'EmployeeVoices',
  components: {
    BaseCarrousel,
    SwiperSlide,
  },
  data() {
    return {
      employeeId: null,
      isOpen: false,
      employeeVoices: constants.employeeVoices,
    };
  },
  methods: {
    openModalHandler(id) {
      this.isOpen = true;
      this.employeeId = id;

      setTimeout(() => {
        this.$refs.carousel.stopAutoplay();
      });
    },

    closeModalHandler() {
      this.isOpen = false;
      this.employeeId = null;

      setTimeout(() => {
        this.$refs.carousel.startAutoplay();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.employee-voices {
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
