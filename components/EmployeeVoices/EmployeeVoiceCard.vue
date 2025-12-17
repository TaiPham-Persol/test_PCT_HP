<template>
  <div
    class="card-wrapper p-5 md:p-10"
    :class="{
      'cursor-pointer': !inActive,
      'cursor-not-allowed': inActive,
    }"
    :style="{ filter: inActive ? 'grayscale(100%)' : 'none' }"
    @mouseenter="onHover"
    @mouseleave="onLeave"
    @click="onClick"
  >
    <img
      alt="'imageAlt'"
      :src="require(`@/assets/images/employee-voices/icon_voice.png`)"
      class="w-5 h-5 mb-[10px] md:mb-5 self-start"
    />
    <!-- Title -->
    <BaseTypography
      v-if="!inActive"
      size="size_16"
      font="Noto Sans"
      tag="h4"
      class="!mb-4 md:!mb-10 line-clamp-3"
    >
      {{ emotions }}
    </BaseTypography>
    <div
      v-else
      class="w-full h-[72px] bg-gray01 rounded animate-pulse !mb-4 md:!mb-10"
    ></div>

    <!-- Icon/Image -->
    <div
      class="flex items-center gap-[10px] md:gap-10 w-full flex-1 flex-col md:flex-row mb-[6px] md:mb-0"
    >
      <img
        :src="require(`@/assets/images/employee-voices/${imageName}`)"
        :alt="imageAlt"
        class="w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-contain"
      />

      <div class="flex flex-col justify-center items-center md:items-start">
        <!-- Subtitle -->
        <BaseTypography
          size="size_20"
          weight="bold"
          class="text-center !md-1 md:!mb-2"
        >
          {{ name }}
        </BaseTypography>

        <BaseTypography
          size="size_16"
          weight="bold"
          tag="div"
          class="!mb-2 md:!mb-4"
        >
          {{ position }}
        </BaseTypography>

        <div class="flex flex-nowrap max-w-[260px] gap-2">
          <template v-if="!inActive">
            <BaseTypography
              v-for="(tag, index) in tags"
              :key="index"
              size="size_14"
              font="Noto Sans"
              class="truncate flex-auto !px-[10px] !py-1 bg-[#EBEBE8] rounded-[30px]"
              tag="span"
            >
              {{ tag }}
            </BaseTypography>
          </template>
          <template v-else>
            <div
              v-for="n in 3"
              :key="n"
              class="h-6 bg-gray01 rounded-full animate-pulse flex-1 min-w-[60px]"
            ></div>
          </template>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-[30px] self-end">
      <BaseTypography size="size_16" weight="bold">
        Read Interview
      </BaseTypography>

      <IconButton
        ref="interviewBtn"
        icon="icon-arrow-r"
        variant="secondary"
        tone="dark"
        class="md:!w-[50px] md:!h-[50px] pointer-events-none"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeVoiceCard',
  props: {
    emotions: {
      type: String,
      required: true,
    },
    name: {
      type: [String, Number],
      required: true,
    },
    position: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: () => [],
    },
    imageName: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: '',
    },
    inActive: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  methods: {
    onHover() {
      this.$refs.interviewBtn.$el.classList.add('hovered');
    },
    onLeave() {
      this.$refs.interviewBtn.$el.classList.remove('hovered');
    },
    onClick() {
      if (this.inActive) return;
      this.$emit('click');
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
  gap: 10px;

  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 10px;
}
</style>
