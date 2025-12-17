<template>
  <div class="rounded-lg p-3.5 flex items-center justify-between gap-[30px]">
    <NuxtLink
      to="/"
      class="tech-studio-logo w-[260px] h-[31px] md:w-[347px] md:h-[42px] flex justify-center items-center"
    >
      <img
        :src="
          require(transparent
            ? '@/assets/images/tech_studio_logo_white.svg'
            : '@/assets/images/tech_studio_logo.svg')
        "
        alt="persol logo"
      />
    </NuxtLink>
    <nav
      class="flex items-center space-x-8 ml-[auto]"
      aria-label="Main navigation"
    >
      <div v-for="item in menuItems" :key="item.label" class="contents">
        <MenuLink
          v-if="item.type === MenuItemType.SIMPLE"
          :href="item.href"
          :label="item.label"
          :has-arrow="item.hasArrow"
          :transparent="transparent"
          class="text-nowrap"
        />
        <BaseDropdown v-else-if="item.type === MenuItemType.DROPDOWN">
          <template #trigger>
            <MenuLink
              :href="item.href"
              :label="item.label"
              :has-arrow="item.hasArrow"
              :transparent="transparent"
              class="text-nowrap"
            />
          </template>
          <template #menu>
            <NuxtLink
              v-for="sub in item.subItems"
              :key="sub.label"
              :to="sub.href"
              class="flex items-center justify-between cursor-pointer"
            >
              <span class="text-white text-sm font-normal" v-html="sub.label" />
              <img
                v-if="sub.hasArrow"
                src="@/assets/images/icon-arrow-r-white.svg"
                alt="arrow"
                class="w-6 h-6"
              />
            </NuxtLink>
          </template>
        </BaseDropdown>
      </div>
    </nav>
    <ButtonHeader class="hidden xl:flex" @click="trackViewAllClick">
      View All Open Positions
    </ButtonHeader>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MenuItem, MenuItemType } from '@/types/menu';
import { gtmEvent, GTM_EVENTS } from '@/utils/gtm';

export default defineComponent({
  name: 'DesktopMenu',
  props: {
    menuItems: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    transparent: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      MenuItemType,
    };
  },
  methods: {
    trackViewAllClick() {
      gtmEvent(GTM_EVENTS.BUTTON_CLICK, {
        event_category: 'Navigation',
        event_label: 'View All Open Positions',
        click_location: 'Header - Desktop Menu',
      });
      // Navigate to career opportunities page
      this.$router.push('/career-opportunities');
    },
  },
});
</script>
