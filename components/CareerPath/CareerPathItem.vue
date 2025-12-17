<template>
  <div>
    <div
      class="flex p-5 gap-5 lg:gap-10 rounded-[10px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.25)]"
    >
      <div
        class="flex items-center justify-center w-[50px] h-[50px] px-[11px] py-[13px] rounded-full bg-[linear-gradient(98deg,#FFB81C_27.61%,#E8D19D_53.34%,#1ACEC3_80.2%)]"
      >
        <BaseTypography font="Noto Sans" weight="bold" color="var(--white)">
          {{ stepNumber }}
        </BaseTypography>
      </div>
      <div class="flex flex-col gap-5 flex-1">
        <client-only>
          <BaseTypography size="size_24" weight="medium" v-html="title" />
          <BaseTypography font="Noto Sans" v-html="description" />
        </client-only>
      </div>
    </div>
    <div
      v-if="!isLast"
      class="border-dashed border-l-2 border-gray02 w-fit h-5 lg:h-10 mx-auto"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CareerPathItem',
  props: {
    stepNumber: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
