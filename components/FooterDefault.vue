<template>
  <client-only>
    <footer class="bg-gray00">
      <div class="container flex flex-col items-center relative">
        <div
          class="grid grid-template-footer grid-cols-[1fr_3fr] w-full pt-[50px] pb-5 md:py-20"
        >
          <div class="[grid-area:header] flex flex-col gap-8">
            <NuxtLink
              to="/"
              class="tech-studio-logo w-[320px] h-[38px] md:w-[460px] md:h-[57px] mx-auto md:mx-0"
            >
              <img
                alt="tech studio logo"
                src="@/assets/images/tech_studio_logo.svg"
                class="w-full"
              />
            </NuxtLink>
            <ButtonHeader
              v-if="!isMobile"
              class="display-none display-md-block"
              @click="trackViewAllClick"
            >
              View All Open Positions
            </ButtonHeader>
          </div>
          <BaseAccordion
            v-if="isMobile"
            :items="menuItems"
            :allow-multiple="false"
            class="[grid-area:menu]"
          />
          <div
            v-else
            class="[grid-area:menu] flex flex-wrap justify-between gap-10 p-5 xl:ml-auto"
          >
            <div
              v-for="(menu, index) in menuItems"
              :key="index"
              class="flex flex-col gap-10"
            >
              <h3 class="text-black font-notosan text-base font-semibold">
                {{ menu.label }}
              </h3>
              <ul class="flex flex-col gap-3">
                <li v-for="item in menu.subItems" :key="item.label">
                  <NuxtLink
                    :to="item.href"
                    class="text-black text-sm leading-[150%] font-normal hover:underline mr-2"
                    v-html="item.label"
                  />
                </li>
              </ul>
            </div>
          </div>
          <!-- footer link -->
          <div
            class="[grid-area:footer] flex flex-col items-center self-stretch mt-[18px] md:mt-auto"
          >
            <ul
              class="flex flex-row flex-wrap items-start justify-start self-stretch gap-[14px] md:gap-[10px] max-w-[565px] mb-5"
            >
              <li
                v-for="link in footerLinks"
                :key="link.text"
                class="flex flex-row gap-2 items-center justify-start"
              >
                <a
                  :href="link.url"
                  class="text-black text-left font-notosan text-xs md:text-sm leading-[150%] font-normal"
                  target="_blank"
                >
                  {{ link.text }}
                </a>
                <img
                  class="w-[13px] h-[13px] mr-2"
                  src="@/assets/images/icon-blank.svg"
                  alt="icon"
                />
              </li>
            </ul>
            <p
              class="text-black mr-[auto] font-notosan text-xs md:text-sm leading-[150%] font-normal py-5 md:p-0"
            >
              © PERSOL CAREER CO., LTD.
            </p>
          </div>
        </div>
      </div>
      <div class="bg-gray03">
        <div
          class="container flex flex-row justify-between items-center self-stretch py-[30px] px-5 md:py-[30px]"
        >
          <a
            href="https://www.persol-group.co.jp/en/"
            class="w-[124px] h-[25px] md:w-[240px] md:h-[48px]"
            target="_blank"
          >
            <img
              class="w-full h-full object-cover"
              src="@/assets/images/persol_logo.svg"
              alt="persol logo"
            />
          </a>
          <img
            class="w-[158px] h-[19px] md:w-[298px] md:h-[35.83px]"
            src="@/assets/images/work-and-smile.png"
            alt="work and smile"
          />
        </div>
      </div>
    </footer>
  </client-only>
</template>

<script>
import { defineComponent } from 'vue';
import { defaultMenuItems, footerLinks } from '@/utils/menuItems';
import { gtmEvent, GTM_EVENTS } from '@/utils/gtm';
import throttle from '~/utils/throttle';

export default defineComponent({
  name: 'FooterDefault',
  setup() {
    const menuItems = defaultMenuItems;

    return {
      menuItems,
      footerLinks,
      throttledUpdate: null,
    };
  },
  data() {
    return {
      windowWidth: process.client ? window.innerWidth : 768,
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    },
  },
  mounted() {
    this.throttledUpdate = throttle(this.updateWindowWidth.bind(this), 100);
    window.addEventListener('resize', this.throttledUpdate);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.throttledUpdate);
  },
  methods: {
    /**
     * Update window width on resize
     */
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    trackViewAllClick() {
      gtmEvent(GTM_EVENTS.BUTTON_CLICK, {
        event_category: 'Navigation',
        event_label: 'View All Open Positions',
        click_location: 'Footer',
      });
      // Navigate to career opportunities page
      this.$router.push('/career-opportunities');
    },
  },
});
</script>

<style scoped lang="scss">
.grid-template-footer {
  grid-template-areas:
    'header'
    'menu'
    'footer';
  row-gap: 20px;
  grid-template-rows: auto auto auto;
  grid-template-columns: auto;
  @media (min-width: 1280px) {
    row-gap: 0;
    grid-template-areas:
      'header menu'
      'footer menu';
    grid-template-rows: 1fr 1.72fr;
    grid-template-columns: auto;
  }
}
</style>
