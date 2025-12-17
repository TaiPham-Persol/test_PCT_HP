<template>
  <section
    class="relative flex flex-col justify-end md:justify-center h-[504px] md:h-[510px] mb-[50px] md:mb-[90px]"
  >
    <div
      class="w-full h-full md:w-[946px] md:h-[396px] absolute left-0 md:left-[466px] top-0 md:top-[76px]"
    >
      <div
        class="bg-gray00 w-[150px] h-[150px] md:w-[292px] md:h-[219px] absolute top-[142px] left-auto right-[131px] md:right-[747px] md:-top-10"
      />
      <div
        class="relative overflow-hidden w-[854px] max-w-[100vw] h-[330px] -left-5 md:left-0"
      >
        <img
          alt="banner"
          class="w-[200px] h-[200px] md:w-[854px] md:h-[330px] top-[67px] left-auto right-0 md:top-0 absolute hidden md:block"
          :src="require(`@/assets/images/bg-deco-yellow.png`)"
        />
        <img
          alt="banner"
          class="w-[200px] h-[200px] md:w-[854px] md:h-[330px] top-[67px] left-auto right-0 md:top-0 absolute block md:hidden"
          :src="require(`@/assets/images/bg-deco-yellow-sp.png`)"
        />
        <img
          class="slide-right-to-left absolute left-0 top-[166px] md:top-[200px] h-[92px] md:h-[180px] aspect-auto max-w-none opacity-50"
          alt="banner"
          :src="require(`@/assets/images/text-deco-persol-vietnam.png`)"
        />
        <img
          class="slide-right-to-left-clone absolute left-5 md:left-[50px] top-[166px] md:top-[200px] h-[92px] md:h-[180px] aspect-auto max-w-none opacity-50"
          alt="banner"
          :src="require(`@/assets/images/text-deco-persol-vietnam.png`)"
        />
      </div>
      <img
        class="absolute top-[30px] left-auto right-0 md:top-[60px] md:right-[172px] w-[240px] h-[180px] md:w-[392px] md:h-[294px] drop-shadow"
        alt="banner"
        :src="require(`@/assets/images/bg-career-opportunities.png`)"
      />
    </div>
    <div class="flex flex-col z-10 py-[30px]">
      <BaseTypography
        tag="h1"
        size="size_80"
        font="Roboto"
        weight="light"
        color="#333333"
        class="leading-[1.5em] pb-[22px] md:pb-0 -mt-[30px]"
      >
        Career Opportunities
      </BaseTypography>
      <div class="flex items-center gap-2.5 md:gap-5">
        <BaseTypography
          tag="span"
          size="size_14"
          font="Noto Sans"
          color="#333333"
        >
          Home
        </BaseTypography>
        <BaseTypography
          tag="span"
          size="size_14"
          font="Noto Sans"
          color="#333333"
        >
          /
        </BaseTypography>
        <BaseTypography
          tag="span"
          size="size_14"
          font="Noto Sans"
          color="#333333"
        >
          Career Opportunities
        </BaseTypography>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CareerOpportunitiesBanner',
});
</script>

<style lang="scss" scoped>
/**
 * Infinite slide animation from right to left
 * Creates a continuous horizontal translation effect
 */
.slide-right-to-left {
  animation: slideRightToLeft 20s linear infinite;
}
.slide-right-to-left-clone {
  animation: slideRightToLeftClone 20s linear infinite;
}

@keyframes slideRightToLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes slideRightToLeftClone {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
