<template>
  <div>
    <KvImage />

    <div class="container">
      <OurBusiness />
    </div>

    <GroupHighlights />

    <div class="container">
      <OurStrength />
      <ServiceAndProduct />
      <AboutUs />
    </div>

    <GallerySection />

    <div class="container">
      <CareerPath />
    </div>

    <EmployeeVoices />

    <div class="container">
      <EnvironmentAccordion />
    </div>

    <OfficeEnvironment />

    <OpenPositions />

    <div class="container">
      <AccessSection />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  layout: 'home',
});
</script>
