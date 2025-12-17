<template>
  <section
    class="py-[50px] lg:py-[180px] flex flex-col-reverse lg:flex-row gap-10 lg:gap-[116px]"
  >
    <div
      class="flex items-center lg:items-start justify-center lg:h-fit static lg:sticky top-[100px]"
    >
      <img
        src="@/assets/images/career-path/employee2.png"
        alt="employee career path"
        class="w-[313px] h-[381px] lg:w-[400px] lg:h-[509px] xl:w-[504px] xl:h-[613px]"
      />
    </div>
    <div class="lg:py-[60px] flex-1">
      <BaseHeadline id="career-path" class="mb-10 lg:mb-20" tag="h2">
        Career Path
      </BaseHeadline>
      <div class="flex flex-col">
        <CareerPathItem
          v-for="({ step, title, description }, index) in careerPathItems"
          :key="step"
          :step-number="String(step).padStart(2, '0')"
          :title="title"
          :description="description"
          :is-last="index === careerPathItems.length - 1"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface CareerPathItem {
  step: number;
  title: string;
  description: string;
}

export default defineComponent({
  name: 'CareerPath',
  props: {
    careerPathItems: {
      type: Array as PropType<CareerPathItem[]>,
      default: () => [
        {
          step: 1,
          title: 'Career Path ①:<br/>Individual Contributor (PE1+)',
          description:
            'Begin by strengthening your technical expertise through delivering high-quality tasks and outputs.<br/>Focus on mastering your craft and building confidence in producing tangible results.',
        },
        {
          step: 2,
          title: 'Career Path ②:<br/>Team Contributor (PE2)',
          description:
            "Take ownership of your work and align your actions with PCT's business goals.<br/>Develop independence and accountability while contributing to team success.",
        },
        {
          step: 3,
          title: 'Career Path ②:<br/>Team Organizer (PE2+)',
          description:
            'Shape team workflows by organizing tasks and creating work for others.<br/>Enhance leadership skills and learn how to drive team results beyond your own contributions.',
        },
        {
          step: 4,
          title: 'Career Path ③:<br/>Leader (PE3)',
          description:
            'Lead a group and influence outcomes by planning and executing strategies aligned with business goals.<br/>Grow as a leader who empowers others and drives organizational success.',
        },
        {
          step: 5,
          title: 'Career Path ④:<br/>Strategic Influencer (PE3+/PE4)',
          description:
            'Operate at a strategic level, shaping vision, technical direction, and organizational growth.<br/>Become an opinion leader who influences decisions and ensures alignment between engineering and business objectives.',
        },
      ],
    },
  },
});
</script>
