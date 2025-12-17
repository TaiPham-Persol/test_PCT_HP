<template>
  <section class="flex flex-col gap-10 md:gap-20 py-[50px] md:pt-20 md:pb-0">
    <BaseHeadline id="our-business-service" tag="h2">
      Service & Product
    </BaseHeadline>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 w-full">
      <ServiceAndProductCard
        v-for="(product, index) in productsAndServices"
        :key="index"
        v-bind="product"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import constants from '@/utils/constants';

export default defineComponent({
  name: 'ServiceAndProduct',
  data() {
    return {
      productsAndServices: constants.productsAndServices,
    };
  },
});
</script>
