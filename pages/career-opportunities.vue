<template>
  <div class="container">
    <CareerOpportunitiesBanner />
    <JobAccordion v-for="job in jobs" :key="job.id" :job="job" />
    <AccessSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import careerOpportunities from '~/utils/careerOpportunities';
import JobAccordion from '@/components/JobAccordion/JobAccordion.vue';
import CareerOpportunitiesBanner from '@/components/CareerOpportunities/CareerOpportunitiesBanner.vue';
import AccessSection from '@/components/AccessSection/AccessSection.vue';

export default defineComponent({
  name: 'CareerOpportunitiesPage',
  components: {
    JobAccordion,
    CareerOpportunitiesBanner,
    AccessSection,
  },
  layout: 'default',
  data() {
    return {
      jobs: careerOpportunities,
    };
  },
});
</script>
