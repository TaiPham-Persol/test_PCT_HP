<template>
  <div
    class="py-[50px] md:py-[100px] px-[30px] md:px-20 max-w-[1080px] mx-auto flex flex-col gap-[60px] md:gap-20"
  >
    <div class="flex flex-col gap-10 md:flex-row-reverse md:gap-20">
      <div class="flex-1 md:pt-20">
        <img
          :src="
            require(`@/assets/images/interviews/${interviewData?.images[0]}`)
          "
          :alt="interviewData?.title"
        />
      </div>

      <div class="flex-1">
        <div>
          <img
            alt="'imageAlt'"
            :src="require(`@/assets/images/employee-voices/icon_voice.png`)"
            class="w-5 h-5 mb-5 md:mb-[60px] self-start"
          />
          <!-- Title -->
          <BaseTypography size="size_32" tag="h4" class="!mb-4 md:!mb-10">
            {{ interviewData?.title }}
          </BaseTypography>
        </div>

        <div class="bg-[--gray00] py-[30px] px-5 md:p-10 rounded-[10px]">
          <!-- name -->
          <BaseTypography
            weight="bold"
            class="!mb-1 md:!mb-2 !text-base"
            font="Noto Sans"
          >
            {{ interviewData?.name }}
          </BaseTypography>

          <!-- position -->
          <BaseTypography
            size="size_14"
            class="!mb-[10px] md:!mb-4"
            font="Noto Sans"
          >
            {{ interviewData?.position }}
          </BaseTypography>

          <!-- description -->
          <BaseTypography
            size="size_14"
            font="Noto Sans"
            class="!mb-[10px] md:!mb-4"
          >
            {{ interviewData?.description }}
          </BaseTypography>

          <!-- tag -->
          <div class="flex flex-wrap gap-2">
            <BaseTypography
              v-for="(tag, index) in interviewData?.tags"
              :key="index"
              size="size_14"
              font="Noto Sans"
              class="flex flex-col items-start !px-[10px] !py-1 bg-[#EBEBE8] rounded-[30px] flex-none"
              tag="span"
            >
              {{ tag }}
            </BaseTypography>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-col-reverse">
      <div>
        <BaseTypography
          v-for="(data, index) in interviewData?.template[0]"
          :key="index"
          v-bind="data.props"
        >
          {{ data.text }}
        </BaseTypography>
      </div>

      <div class="mt-[30px] md:mt-0 md:mb-[50px] flex justify-center">
        <img
          :src="
            require(`@/assets/images/interviews/${interviewData?.images[1]}`)
          "
          :alt="interviewData?.description"
        />
      </div>
    </div>

    <div class="flex flex-col md:flex-col-reverse">
      <div>
        <BaseTypography
          v-for="(data, index) in interviewData?.template[1]"
          :key="index"
          v-bind="data.props"
        >
          {{ data.text }}
        </BaseTypography>
      </div>

      <div class="mt-[30px] md:mt-0 md:mb-[50px] flex justify-center">
        <img
          :src="
            require(`@/assets/images/interviews/${interviewData?.images[2]}`)
          "
          :alt="interviewData?.description"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import constants from '@/utils/interviews';

export default defineComponent({
  name: 'InterviewView',
  props: {
    interviewId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      interviewData: constants.interviewList.find(
        (interview) => interview.id === this.interviewId
      ),
    };
  },
});
</script>

<style lang="scss" scoped></style>
