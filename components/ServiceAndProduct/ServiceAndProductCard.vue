<template>
  <div
    ref="container"
    class="flex flex-col justify-between px-5 pt-10 md:p-[50px] border-t border-[--gray02] relative md:min-h-[600px] overflow-hidden"
    :class="{
      'max-h-[336px]': !isShow,
      'max-h-auto pb-[96px]': isShow,
    }"
  >
    <div class="flex flex-col items-center">
      <img
        class="mb-5 md:mb-2.5 w-[220px] md:w-[266px] h-[110px] md:h-[133px]"
        :src="require(`@/assets/images/service-and-product/${imgName}.svg`)"
        :alt="title"
      />

      <BaseTypography
        size="size_24"
        class="w-full text-center md:text-left !mb-[10px]"
        weight="medium"
      >
        {{ title }}
      </BaseTypography>

      <BaseTypography
        size="size_16"
        font="Noto Sans"
        class="md:hidden"
        :class="descriptionClasses"
      >
        {{ description }}
      </BaseTypography>

      <BaseTypography size="size_16" font="Noto Sans" class="hidden md:block">
        {{ description }}
      </BaseTypography>
    </div>

    <SecondaryButton
      class="self-center lg:self-end mt-[30px] md:mt-0"
      text="Service Site"
      :href="url"
    />

    <div
      class="flex w-full items-center justify-center block md:hidden h-[66px] cursor-pointer bottom-0 left-0 bg-white absolute"
      @click="toggleShow"
    >
      <img
        :src="
          require(`@/assets/images/${
            isShow ? 'accordion-top' : 'accordion-down'
          }.svg`)
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceAndProduct',
  props: {
    title: {
      type: String,
      required: true,
    },
    imgName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    descriptionClasses() {
      return {
        'text-blur': !this.isShow,
      };
    },
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped lang="scss">
.text-blur {
  background: linear-gradient(180deg, var(--black) 0%, var(--white) 31%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
