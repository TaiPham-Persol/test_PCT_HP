<template>
  <section
    class="flex flex-col-reverse lg:flex-row items-stretch lg:gap-[170px]"
  >
    <div
      class="relative w-[calc(100%+40px)] -translate-x-[20px] lg:-translate-x-0 lg:w-[180px] h-[92px] lg:h-auto flex-shrink-0 overflow-hidden"
    >
      <div
        class="absolute bottom-0 lg:-bottom-[180px] left-0 origin-top-left lg:-rotate-90"
      >
        <ScrollingText class="!opacity-100">
          <img
            class="h-[92px] lg:h-auto"
            src="@/assets/images/our-strength/pct_gradient.png"
            alt="random"
          />
        </ScrollingText>
      </div>
    </div>
    <div class="flex flex-1 flex-col gap-10 lg:gap-20 py-[50px] lg:py-[180px]">
      <BaseHeadline id="our-business-strength">Our Strength</BaseHeadline>
      <div class="flex flex-col gap-[60px] lg:gap-[70px]">
        <div class="flex flex-col gap-10 lg:gap-[50px]">
          <OurStrengthItem
            v-for="{ number, title, items } in ourStrengthItems"
            :key="number"
            :number="number"
            :title="title"
            :items="items"
          />
        </div>
        <div class="flex flex-col gap-5">
          <BaseTypography
            tag="h3"
            size="size_24"
            weight="medium"
            class="text-center lg:text-left"
          >
            Background and Advantages of Vietnam Base
          </BaseTypography>
          <BaseTypography tag="p" font="Noto Sans">
            PERSOL CAREER TECH STUDIO VIETNAM was established to build internal
            expertise and experience in software development, driven by the
            shortage of IT talent in Japan and the need to shift away from
            relying heavily on external partners. Vietnam, which nationally
            promotes IT talent development, is expected to be an excellent
            source of skilled professionals. Additionally, the minimal two-hour
            time difference with Japan enables swift and efficient
            communication. PERSOL CAREER TECH STUDIO VIETNAM is more than just a
            software development center; it functions as an integral part of
            PERSOL CAREER’s internal development team. Japanese and Vietnamese
            engineers collaborate closely to drive service development. Moving
            forward, the studio is expected to contribute further to the
            realization of PERSOL CAREER's mission by expanding the organization
            and strengthening its development capabilities.
          </BaseTypography>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface OurStrengthItem {
  number: number;
  title: string;
  items: string[];
}

export default defineComponent({
  name: 'OurStrength',
  props: {
    ourStrengthItems: {
      type: Array as PropType<OurStrengthItem[]>,
      default: () => [
        {
          number: 1,
          title: 'Development and Operation of Major Japanese Services',
          items: [
            'Developing and maintaining recruitment and career-related products, including the "doda" service provided by PERSOL CAREER.',
            'Supporting the development of new HR services such as "PERSOL MIRAIZ" and "HR Spanner".',
          ],
        },
        {
          number: 2,
          title:
            'Beyond Development: Building and Operating Data Infrastructure',
          items: [
            'Managing and maintaining databases and core systems for HR-related services.',
          ],
        },
        {
          number: 3,
          title: 'Strengthening Technical Capabilities',
          items: [
            'Recruiting and cultivating skilled IT talent in Vietnam to internalize development, closely collaborating with teams in Japan.',
            'Establishing a collaborative environment for sharing advanced technical skills and mutual learning between Vietnam and Japan.',
          ],
        },
        {
          number: 4,
          title: 'Supporting In-House Development',
          items: [
            'Establishing an internal development framework to build and retain technical expertise, reducing dependency on external partners.',
            'Expanding the Vietnam-based development team to approximately 70 members,aiming scale up 150 in the future.',
          ],
        },
      ],
    },
  },
});
</script>
