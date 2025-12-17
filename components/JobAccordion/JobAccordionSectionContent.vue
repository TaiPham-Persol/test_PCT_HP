<template>
  <div>
    <template v-if="!section.hasSubsections">
      <ul class="flex flex-col gap-0 list-disc mb-1 custom-list-marker-size">
        <li
          v-for="(item, index) in section.content"
          :key="index"
          class="font-notosan font-normal text-sm md:text-base leading-5 text-black ml-5 md:ml-6"
          :class="{
            'text-sm leading-[150%]': section.id === 'topReasons',
          }"
        >
          {{ item }}
        </li>
      </ul>
    </template>

    <!-- Skills and Experience Section with Subsections -->
    <template v-else-if="section.hasSubsections">
      <div
        v-for="subsection in section.subsections"
        :key="subsection.title"
        class="mt-4 md:mt-[30px] first-of-type:-mt-[5px]"
      >
        <JobAccordionHeading :label="subsection.title" />
        <ul
          :key="subsection.title"
          class="flex flex-col gap-[2px] md:gap-0 list-disc mb-1 custom-list-marker-size mt-0 md:mt-2"
        >
          <template v-if="subsection.content && subsection.content.length > 0">
            <li
              v-for="(skill, skillIndex) in subsection.content"
              :key="`${subsection.title}-${skillIndex}`"
              class="font-notosan font-normal text-sm md:text-base leading-5 text-black ml-5 md:ml-6"
            >
              {{ skill }}
            </li>
          </template>
        </ul>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { JobSection } from '@/types/job';

export default defineComponent({
  name: 'JobAccordionSectionContent',
  props: {
    section: {
      type: Object as PropType<JobSection>,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.custom-list-marker-size li::marker {
  font-size: 0.8em;
}
</style>
