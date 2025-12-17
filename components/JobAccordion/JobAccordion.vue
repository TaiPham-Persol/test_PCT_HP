<template>
  <section :id="`job-${job.id}`" class="flex flex-col self-stretch">
    <!-- Accordion Header -->
    <div
      ref="accordionHeader"
      class="flex flex-col self-stretch gap-5 md:gap-7.5 px-5 md:px-[60px] py-[32px] md:py-[63px] bg-gray00 border-t border-gray02"
    >
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-5"
      >
        <!-- Left Section -->
        <div
          class="flex flex-col justify-center self-stretch gap-5 md:gap-[30px]"
        >
          <!-- Icon and Title -->
          <div class="flex flex-col self-stretch gap-2.5">
            <div
              class="w-[26px] md:w-6.5 h-2 bg-yellow rounded-[10px] mx-0.5 my-2 mb-2.5 md:mb-5"
            />
            <h3
              class="font-roboto font-medium text-[20px] text-2xl leading-[150%] text-black m-0 w-[310px] h-[60px] md:w-full md:h-auto flex-none order-0"
            >
              {{ job.title }}
            </h3>
            <p
              class="flex flex-row items-center p-0 gap-2.5 md:gap-5 text-sm md:text-base leading-5 text-black"
            >
              <span>{{ job.type }}</span>
              <span>{{ job.location }}</span>
            </p>
          </div>

          <!-- Skills Section -->
          <div class="flex flex-col self-stretch gap-3 md:gap-2.5">
            <JobAccordionHeading label="Skills" />
            <div class="flex items-center self-stretch flex-wrap gap-2">
              <JobAccordionSkillTag
                v-for="skill in job.skills"
                :key="skill"
                :label="skill"
              />
            </div>
          </div>

          <!-- Expertise Section -->
          <div class="flex flex-col self-stretch gap-2.5">
            <JobAccordionHeading label="Job Expertise" />
            <div
              class="flex items-center self-stretch flex-wrap gap-1 md:gap-1.5"
            >
              <JobAccordionSkillTag :label="job.expertise" />
            </div>
          </div>
        </div>

        <!-- Expand Button -->
        <AccordionExpandButton
          :is-expanded="isExpanded"
          @click="toggleAccordion"
        />
      </div>
    </div>

    <!-- Accordion Content -->
    <transition
      name="accordion"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
    >
      <div
        v-if="isExpanded"
        class="flex flex-col md:flex-row justify-between flex-wrap overflow-hidden bg-gray00 relative px-0 md:px-10 gap-0 md:gap-[15px]"
      >
        <div
          class="flex flex-col gap-5 md:gap-[20px] md:w-[calc(100%_-_380px)] px-5 pt-5 md:pt-7.5 pb-5 md:px-0"
        >
          <!-- Dynamic Job Sections -->
          <div
            v-for="section in jobSections"
            :key="section.id"
            class="flex flex-col gap-5 md:gap-[30px] px-5 py-[30px] md:px-10 md:py-10 rounded-[10px] bg-white shadow-drop"
          >
            <!-- Section Title -->
            <h4
              class="font-notosan font-bold text-base md:text-xl leading-[150%] text-black m-0"
            >
              {{ section.title }}
            </h4>

            <!-- Section Content -->
            <JobAccordionSectionContent :section="section" />
          </div>
        </div>

        <!-- Apply Section -->
        <div
          class="flex flex-col items-center gap-3 md:gap-5 md:w-[350px] px-5 py-2.5 md:py-5 md:px-[30px] relative md:sticky"
        >
          <p
            class="font-notosan font-normal text-sm md:text-base leading-5 md:leading-6 text-black text-left m-0"
          >
            Click "Apply" to open your email client, then attach your resume and
            CV to the email and send it.
          </p>
          <ButtonPrimary
            v-if="job.applyEmail"
            class="hidden md:flex"
            @click="handleApply"
          >
            Apply us
          </ButtonPrimary>
          <ButtonHeader
            v-if="job.applyEmail"
            class="flex md:hidden"
            @click="handleApply"
          >
            Apply us
          </ButtonHeader>
          <a
            class="flex flex-row justify-center self-stretch gap-1 md:gap-4 items-center cursor-pointer"
            rel="noopener noreferrer"
            @click="handleShare"
          >
            <span
              class="font-notosan font-bold text-sm md:text-base leading-[150%] text-right underline text-black"
            >
              share
            </span>
            <img
              src="@/assets/images/icon-blank.svg"
              alt="External Link Icon"
              class="w-4 h-4"
            />
          </a>
        </div>
      </div>
    </transition>
    <!-- Close Button -->
    <div class="bg-gray00">
      <div
        v-if="isExpanded"
        class="flex flex-row justify-center items-center gap-1 py-2.5 md:py-4 mt-[31px] md:mt-[61px] w-full bg-gray04 cursor-pointer"
        @click="toggleAccordion"
      >
        <span
          class="font-notosan font-bold text-sm md:text-base leading-5 md:leading-6 text-white"
        >
          see less
        </span>
        <img
          class="rotate-180"
          :src="require(`@/assets/images/icon-arrow-s-white.svg`)"
          alt="expand icon"
        />
      </div>
    </div>

    <!-- Share Modal -->
    <ShareModal
      :is-open="showShareModal"
      :title="job.title"
      :url="shareUrl"
      :text="`Check out this job opportunity at PERSOL Career Tech Studio: ${job.title}`"
      @close="showShareModal = false"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { JobPosting, JobSection } from '@/types/job';
import { openJobApplicationEmail } from '@/utils/mailto';
import { gtmEvent, GTM_EVENTS } from '@/utils/gtm';

export default defineComponent({
  name: 'JobAccordion',
  props: {
    job: {
      type: Object as PropType<JobPosting>,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
      showShareModal: false,
    };
  },
  computed: {
    /**
     * Returns the share URL for this job posting
     */
    shareUrl(): string {
      if (process.client) {
        const baseUrl =
          globalThis.location.origin + globalThis.location.pathname;
        return this.job.id ? `${baseUrl}#job-${this.job.id}` : baseUrl;
      }
      return '';
    },
    /**
     * Returns an array of job section configurations for rendering
     * Each section has a title, content, and display condition
     */
    jobSections(): JobSection[] {
      return [
        {
          id: 'topReasons',
          title: 'Top 3 reasons to join us',
          content: this.job.topReasons || [],
          condition: !!this.job.topReasons,
        },
        {
          id: 'description',
          title: 'Job Description',
          content: this.job.description || [],
          condition: !!this.job.description,
        },
        {
          id: 'compensation',
          title: 'Compensation',
          content: this.job.compensation ? [this.job.compensation] : [],
          condition: !!this.job.compensation,
        },
        {
          id: 'skillsRequired',
          title: 'Your skills and experience',
          content: [],
          condition: !!this.job.skillsRequired,
          hasSubsections: true,
          subsections: [
            {
              title: 'Must',
              content: this.job.skillsRequired?.must || [],
            },
            {
              title: 'Preferable',
              content: this.job.skillsRequired?.preferable || [],
            },
          ],
        },
        {
          id: 'whyJoinUs',
          title: 'Why you will love working here',
          content: this.job.whyJoinUs || [],
          condition: !!this.job.whyJoinUs,
        },
        {
          id: 'benefits',
          title: 'Benefit Package',
          content: this.job.benefits || [],
          condition: !!this.job.benefits,
        },
        {
          id: 'officeLocation',
          title: 'Location',
          content: this.job.officeLocation ? [this.job.officeLocation] : [],
          condition: !!this.job.officeLocation,
        },
      ].filter((section) => section.condition);
    },
  },
  methods: {
    /**
     * Handles job application by opening email client
     */
    handleApply() {
      if (this.job.applyEmail) {
        openJobApplicationEmail(this.job.applyEmail, this.job.title);
      }
    },
    /**
     * Handles sharing the job posting using Web Share API or clipboard
     */
    async handleShare() {
      this.showShareModal = true;
    },
    /**
     * Toggles the accordion state and handles scrolling behavior
     * Scrolls to accordion header only if it's not fully visible in viewport
     */
    toggleAccordion() {
      this.isExpanded = !this.isExpanded;

      // Track GTM event
      gtmEvent(GTM_EVENTS.BUTTON_CLICK, {
        event_category: 'Job Accordion',
        event_label: this.isExpanded ? 'Expand' : 'Collapse',
        job_title: this.job.title,
        job_type: this.job.type,
        job_location: this.job.location,
      });

      // Only scroll when collapsing the accordion
      if (!this.isExpanded) {
        // Wait for DOM to update after collapsing
        this.$nextTick(() => {
          this.scrollToHeaderIfNeeded();
        });
      }
    },
    /**
     * Scrolls to accordion header if it's not fully visible in the viewport
     * This improves mobile UX by ensuring users can see the accordion item after collapsing
     */
    scrollToHeaderIfNeeded() {
      const header = this.$refs.accordionHeader as HTMLElement;
      if (!header) return;

      const headerRect = header.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if header is fully visible in viewport
      const isHeaderFullyVisible =
        headerRect.top >= 0 && headerRect.bottom <= viewportHeight;

      // Only scroll if header is not fully visible
      if (!isHeaderFullyVisible) {
        header.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },
    onEnter(el: Element) {
      const element = el as HTMLElement;
      element.style.height = '0';
      element.style.opacity = '0';
      element.style.transition =
        'height 0.4s ease-in-out, opacity 0.4s ease-in-out';

      // Force reflow to ensure initial state is applied
      element.getBoundingClientRect();

      element.style.height = `${element.scrollHeight}px`;
      element.style.opacity = '1';
    },
    onAfterEnter(el: Element) {
      const element = el as HTMLElement;
      element.style.height = 'auto';
      element.style.transition = '';
    },
    onLeave(el: Element) {
      const element = el as HTMLElement;
      // Set explicit height before animation
      element.style.height = `${element.scrollHeight}px`;

      // Force reflow to ensure height is applied
      element.getBoundingClientRect();

      element.style.transition =
        'height 0.4s ease-in-out, opacity 0.4s ease-in-out';

      // Start the closing animation
      requestAnimationFrame(() => {
        element.style.height = '0';
        element.style.opacity = '0';
      });
    },
  },
});
</script>
