<template>
  <div :class="containerClasses">
    <!-- Carrousel -->
    <div class="container" :class="wrapperSwiperClasses">
      <Swiper
        ref="mySwiper"
        class="swiper"
        :class="swiperClasses"
        :options="swiperOptions"
        :style="swiperStyle"
      >
        <slot />
      </Swiper>
    </div>

    <!-- Controls -->
    <div class="container">
      <div
        class="flex items-center justify-center md:justify-start"
        :class="controlsClasses"
      >
        <span class="hidden md:flex mr-5">
          <IconButton
            icon="icon-arrow-l"
            direction="left"
            :tone="controlsTone"
            @click="prevSlide"
          />
        </span>

        <span class="hidden md:flex mr-10">
          <IconButton
            icon="icon-arrow-r"
            :tone="controlsTone"
            @click="nextSlide"
          />
        </span>

        <div
          ref="pagination"
          class="swiper-pagination"
          :class="paginationClass"
          :style="`--progress-bar-bg: ${controlsOption.progressBarBg}; --maker-bg: ${controlsOption.makerBg}`"
        />

        <div class="ml-5 md:ml-10 w-[26px] h-[26px]">
          <img
            class="block cursor-pointer"
            :src="require(`@/assets/images/${imgSrc}.svg`)"
            @click="togglePlay"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCarrousel',
  props: {
    containerClasses: {
      type: String,
      default: '',
    },
    wrapperSwiperClasses: {
      type: String,
      default: '',
    },
    swiperClasses: {
      type: String,
      default: '',
    },
    controlsClasses: {
      type: String,
      default: '',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    pagination: {
      type: Object,
      default: () => ({}),
    },
    paginationClass: {
      type: String,
      default: '',
    },
    controlsTone: {
      type: String,
      default: 'light',
    },
    isDuplicateSlides: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isPlay: true,
      swiperWidth: '100vw',
      swiperOptions: {
        slidesPerView: 'auto',
        loop: true,
        pagination: {
          el: null,
          type: 'custom',
          renderCustom: (_, current, total) => {
            // In some cases, the number of slides needs to be increased for repetition, resulting in the displayed total being doubled
            const actualTotal = this.isDuplicateSlides ? total / 2 : total;
            let actualCurrent = current;

            if (current > actualTotal) {
              actualCurrent -= actualTotal;
            }

            const progress = Math.round((actualCurrent / actualTotal) * 100);
            return `<span class="custom" style="--width: ${progress}%" />`;
          },
        },
        autoplay: {
          disableOnInteraction: false,
        },
        ...this.options,
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },

    controlsOption() {
      return {
        imgPause:
          this.controlsTone === 'dark' ? 'icon-pause-dark' : 'icon-pause-light',
        imgPlay:
          this.controlsTone === 'dark' ? 'icon-play-dark' : 'icon-play-light',
        progressBarBg:
          this.controlsTone === 'dark'
            ? 'rgba(187, 188, 188, 0.5)'
            : 'rgba(255, 255, 255, 0.5)',
        makerBg:
          this.controlsTone === 'dark'
            ? 'rgb(83, 86, 90)'
            : 'rgb(255, 255, 255)',
      };
    },

    imgSrc() {
      return this.isPlay
        ? this.controlsOption.imgPause
        : this.controlsOption.imgPlay;
    },

    swiperStyle() {
      return {
        width: this.swiperWidth,
      };
    },
  },

  mounted() {
    if (this.swiper) {
      if (this.$refs.pagination) {
        this.swiper.params.pagination.el = this.$refs.pagination;
        this.swiper.pagination.init();
        this.swiper.pagination.render();
        this.swiper.update();
      }
      const listItems = this.swiper.el.querySelector('.swiper-wrapper');
      listItems.addEventListener('mouseenter', this.stopAutoplay);
      listItems.addEventListener('mouseleave', this.startAutoplay);
    }

    this.calculateSwiperWidth();
    window.addEventListener('resize', this.calculateSwiperWidth);
  },

  beforeDestroy() {
    if (this.swiper) {
      const listItems = this.swiper.el.querySelector('.swiper-wrapper');
      listItems.removeEventListener('mouseenter', this.stopAutoplay);
      listItems.removeEventListener('mouseleave', this.startAutoplay);
    }

    window.removeEventListener('resize', this.calculateSwiperWidth);
  },

  methods: {
    nextSlide() {
      if (!this.swiper) return;

      if (this.swiper.isEnd) {
        this.swiper.slideTo(0);
      } else {
        this.swiper.slideNext();
      }
    },
    prevSlide() {
      if (!this.swiper) return;

      if (this.swiper.isBeginning) {
        this.swiper.slideTo(this.swiper.slides.length - 1);
      } else {
        this.swiper.slidePrev();
      }
    },
    togglePlay() {
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        this.swiper.autoplay.start();
      } else {
        this.swiper.autoplay.stop();
      }
    },
    startAutoplay() {
      if (this.isPlay) {
        this.swiper.autoplay.start();
      }
    },
    stopAutoplay() {
      if (this.isPlay) {
        this.swiper.autoplay.stop();
      }
    },
    calculateSwiperWidth() {
      this.$nextTick(() => {
        const swiperEl = this.$refs.mySwiper?.$el;
        if (swiperEl) {
          const rect = swiperEl.getBoundingClientRect();
          const viewportWidth = document.documentElement.clientWidth;
          this.swiperWidth = `${viewportWidth - rect.left}px`;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.swiper-pagination) {
  position: relative;
  bottom: 0;
  width: 200px;
  height: 6px;
  background: var(--progress-bar-bg);
  border-radius: 10px;
  margin: 0;

  .custom {
    display: block;
    position: relative;
    height: 100%;
    width: var(--width);
    background: var(--maker-bg);
    border-radius: 10px;
    transition: width 0.5s ease;

    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      width: 16px;
      height: 16px;
      background: var(--maker-bg);
      border-radius: 50%;
      transform: translate(50%, -50%);
    }
  }
}
</style>
