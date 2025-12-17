<template>
  <div class="card-wrapper h-[300px] w-[280px] md:min-h-[460px] md:w-[460px]">
    <!-- Title -->
    <div class="text-center">
      <BaseTypography
        v-for="(line, index) in titleLines"
        :key="index"
        size="size_20"
        weight="bold"
        tag="h4"
      >
        {{ line }}
      </BaseTypography>
    </div>

    <!-- Icon/Image -->
    <div
      class="flex-shrink-0 w-[200px] h-[100px] md:w-[300px] md:h-[150px] flex items-center justify-center"
    >
      <img
        :src="require(`@/assets/images/group-highlights/${imageName}`)"
        :alt="imageAlt"
        class="w-full h-full object-contain"
      />
    </div>

    <div class="flex flex-col gap-2">
      <!-- Subtitle -->
      <BaseTypography size="size_20" weight="bold" class="text-center">
        {{ subtitle }}
      </BaseTypography>

      <!-- Content -->
      <div class="flex items-baseline justify-center gap-1.5">
        <!-- Prefix -->
        <BaseTypography
          v-if="prefix"
          font="Roboto"
          size="size_20"
          weight="bold"
          tag="div"
          class="text-center"
        >
          {{ prefix }}
        </BaseTypography>

        <!-- Value -->
        <BaseTypography size="size_48" weight="medium" class="text-center">
          {{ value }}
        </BaseTypography>

        <!-- Suffix -->
        <BaseTypography
          v-if="suffix"
          font="Noto Sans"
          size="size_20"
          weight="bold"
          class="text-center"
        >
          {{ suffix }}
        </BaseTypography>
      </div>

      <!-- Description -->
      <BaseTypography
        v-if="description"
        font="Noto Sans"
        size="size_14"
        class="text-center"
      >
        {{ description }}
      </BaseTypography>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroupHighlightsCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    prefix: {
      type: String,
      default: '',
    },

    suffix: {
      type: String,
      default: '',
    },
    imageName: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: '',
    },
  },
  computed: {
    titleLines() {
      return this.title.split('\n');
    },
  },
};
</script>

<style scoped lang="scss">
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 10px;

  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 10px;
}
</style>
