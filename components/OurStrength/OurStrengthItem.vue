<template>
  <div
    class="flex flex-col lg:flex-row gap-5 lg:gap-10 items-center lg:items-start w-full"
  >
    <div
      class="relative flex items-center justify-center shrink-0 w-[50px] h-[50px] rounded-full bg-gray06"
    >
      <BaseTypography tag="span" font="Noto Sans" weight="bold">
        {{ formattedNumber }}
      </BaseTypography>
    </div>

    <div class="flex-1 flex flex-col gap-5">
      <div class="py-0 lg:py-1 text-center lg:text-left">
        <BaseTypography tag="h3" size="size_24" weight="medium">
          {{ title }}
        </BaseTypography>
      </div>

      <ul class="flex flex-col gap-[10px] ml-5 lg:ml-[30px]">
        <li v-for="(item, index) in items" :key="index" class="list-disc">
          <BaseTypography tag="p" font="Noto Sans">
            {{ item }}
          </BaseTypography>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'OurStrengthItem',
  props: {
    number: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  computed: {
    formattedNumber(): string {
      return this.number.toString().padStart(2, '0');
    },
  },
});
</script>
