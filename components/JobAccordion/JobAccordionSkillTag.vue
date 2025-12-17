<template>
  <div
    class="flex py-[4px] px-[10px] bg-gray01 text-xs md:text-sm rounded-[30px]"
  >
    {{ label }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JobAccordionSkillTag',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>
