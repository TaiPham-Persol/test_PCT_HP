<template>
  <section class="py-[50px] lg:py-[180px]">
    <div class="flex flex-col gap-20 lg:gap-[180px]">
      <div class="flex flex-col gap-10 lg:gap-20">
        <BaseHeadline id="career-hr-development" tag="h2">
          Human Resource Development Initiatives
        </BaseHeadline>

        <div class="border-b border-gray02">
          <EnvironmentAccordionItem
            v-for="(item, index) in developmentInitiatives"
            :key="`hr-${index}`"
            :title="item.title"
            :img-name="item.imgName"
            :content="item.content"
            :is-expanded="openDevelopmentItems.includes(index)"
            img-name-detail="star_four_icon"
            @toggle="toggleDevelopmentItem(index)"
          />
        </div>
      </div>

      <div class="flex flex-col gap-10 lg:gap-20">
        <BaseHeadline id="career-working-environment" tag="h2">
          Working Environment
        </BaseHeadline>

        <div class="border-b border-gray02">
          <EnvironmentAccordionItem
            v-for="(item, index) in workingEnvironments"
            :key="`work-${index}`"
            :title="item.title"
            :img-name="item.imgName"
            :content="item.content"
            :is-expanded="openWorkingItems.includes(index)"
            img-name-detail="star_four_rounded_icon"
            @toggle="toggleWorkingItem(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { AccordionItem } from '@/types';

export default defineComponent({
  name: 'EnvironmentAccordion',
  props: {
    developmentInitiatives: {
      type: Array as PropType<AccordionItem[]>,
      default: () => [
        {
          title: 'Skills Improvement Initiatives',
          imgName: 'skills_improvement_initiatives_icon',
          content: {
            summary:
              'At PERSOL CAREER TECH STUDIO VIETNAM, we have many opportunities to have "career conversations" with not only your superiors, but also with seniors, colleagues, and even employees from different departments.<br/> "Career conversations" support employees in deepening their "self-understanding" about what they want to do in the future, what they need now to achieve that, and how they can get closer to the person they want to be.',
            detail: [
              {
                title: 'Goal setting, mid-term review, and reflection',
                description:
                  'At PERSOL CAREER TECH STUDIO VIETNAM, employees set goals in interviews with their supervisors every six months. They review their achievements and the process to date, and set future challenges and goals. The degree to which they achieve the goals set here will affect their own evaluation six months from now. Three months after setting goals, employees have an interview called a "mid-term review" where they share their progress and align with their supervisor on the challenges they will face in achieving their goals and their future actions. <br/> Through this communication, employees can deepen their introspection, verbalize their growth challenges and next actions, and put them into action, thus completing the growth cycle.',
              },
              {
                title: '1 on 1',
                description:
                  'At PERSOL CAREER TECH STUDIO VIETNAM, there is a culture of free and casual one-on-one interviews with direct superiors and seniors, as well as colleagues and seniors from different departments who you want to learn from. Senior employees may also hold one-on-one meetings to train and mentor their juniors.<br/>Through such communication between employees, employees can deepen their self-reflection, absorb skills, get hints for their future careers, and more, making it a great learning opportunity.',
              },
            ],
          },
        },
        {
          title: 'Career advancement training programs',
          imgName: 'career_advancement_training_programs_icon',
          content: {
            summary:
              'To advance its mission, PERSOL CAREER TECH STUDIO VIETNAM aims to become a role model for society as a company where each employee can embody diverse careers.<br/>To that end, it places importance on "fostering career ownership" so that each employee knows their own potential and opportunities and can choose their own career and life of their own volition.<br/>In addition to support for obtaining certifications for each engineer, we also offer programs for all employees such as participation in seminars and support for purchasing learning books. There are also programs set for each grade of members and managers. You can choose the content you want to take according to your goals and challenges',
            detail: [
              {
                title: 'Certification Support Program',
                description:
                  'The company provides partial financial support for obtaining certifications necessary for engineers to improve their skills',
              },
              {
                title: 'Self-Learning Cost Support',
                description:
                  'The company provides partial financial support for the costs of attending learning seminars and purchasing books needed for certification',
              },
              {
                title: 'Udemy Self-Learning Support',
                description:
                  "After joining the company and meeting certain requirements, you can use the learning platform Udemy at the company's expense",
              },
              {
                title: 'Problem-solving practice program',
                description: 'Participation in External Management Training',
              },
            ],
          },
        },
      ],
    },
    workingEnvironments: {
      type: Array as PropType<AccordionItem[]>,
      default: () => [
        {
          title: 'Work Style',
          imgName: 'work_style_icon',
          content: {
            summary:
              'We respect the diverse working styles of our employees, and we encourage them to find work styles that suit them by utilizing remote work and flextime systems.',
            detail: [
              {
                title: 'Remote Work',
                description:
                  'At PERSOL CAREER TECH STUDIO VIETNAM, we recommend a hybrid work model of remote work and office attendance after the onboarding period.',
              },
            ],
          },
        },
        {
          title: 'Employee Benefits',
          imgName: 'employee_benefits_icon',
          content: {
            summary:
              'We believe that the key to nurturing career ownership is for each employee to be "healthy both physically and mentally." For this reason, PERSOL CAREER offers a variety of employee benefits programs to help employees work in good health and comfort.',
            detail: [
              {
                title: 'Employee Insurance Benefit',
                description:
                  'After probation period, the Employee will be joined the Combined Personal Accident and Health Insurance Package',
              },
              {
                title: 'Annual Health Check-up Benefit',
                description:
                  'We conduct an annual health check-up for employees',
              },
            ],
          },
        },
        {
          title: 'Life Event Support',
          imgName: 'life_event_support_icon',
          content: {
            summary:
              'At PERSOL CAREER TECH STUDIO VIETNAM, we have many young employees, so we actively provide support for various life events, including marriage and childbirth.<br/>Here we will introduce some of these.',
            detail: [
              {
                title: 'Maternity leave and return to work guidance',
                description:
                  'We provide guidance to members before their maternity leave (such as an explanation of the systems available for members from maternity leave to returning to work and advice on returning to work) as well as guidance for those returning to work, to support a smooth maternity leave and return to work.',
              },
              {
                title: 'Reduced working hours',
                description:
                  'We have a system that allows employees to change their working hours for childcare or caregiving',
              },
            ],
          },
        },
        {
          title: 'Award system',
          imgName: 'award_system_icon',
          content: {
            summary:
              'At PERSOL CAREER TECH STUDIO VIETNAM, we value praising each other among employees, and we have a company-wide awards system.',
            detail: [
              {
                title: 'MISSION VALUE DAY',
                description:
                  'At our parent company, PERSOL CAREER, once a year, approximately 6,000 employees gather together to reflect on what they have been working on. It is a day for employees to experience and think together about the mission/value that will lead them to a step forward tomorrow, aiming for a future where the mission has been accomplished, and is called "MISSION VALUE DAY" within the company. The main content of the event is a "Top Presentation" by the President and CEO, and the "MISSION VALUE Award Final Presentation" by VALUE employees selected from all business divisions, making it a very educational event.<br/>PERSOL CAREER TECH STUDIO VIETNAM also participates in this event as part of the PERSOL CAREER Family',
              },
              {
                title: 'MVP AWARD',
                description:
                  'Every three months, we have a system to award employees who have excelled in their missions and embodied our values. It is an opportunity to learn about the values demonstrated by colleagues.',
              },
            ],
          },
        },
        {
          title: 'Culture',
          imgName: 'culture_icon',
          content: {
            summary:
              'At PERSOL CAREER TECH STUDIO VIETNAM, we committed to create an environment that maximizes employee connections to facilitate smooth work operations. We actively plan and implement initiatives to increase employee engagement.',
            detail: [
              {
                title: 'Internal communication',
                description:
                  'At PERSOL CAREER TECH STUDIO VIETNAM, we have a system in place where the company covers the costs for employee gatherings called "Team Bonding" every three months to deepen connections among employees.',
              },
              {
                title: 'Club activity',
                description:
                  'At PERSOL CAREER TECH STUDIO VIETNAM, we have several club activities that take place after work or on holidays.',
              },
              {
                title: 'Team bonding',
                description:
                  'At PERSOL CAREER TECH STUDIO VIETNAM, we organize quarterly team bonding activities involving at least two employees to foster team spirit through parties/ social events.',
              },
              {
                title: 'Company trip',
                description:
                  'At PERSOL CAREER TECH STUDIO VIETNAM, we organize an annual company trip to provide employees with an opportunity to unwind and recharge at scenic destinations, recognizing their dedication throughout the year.',
              },
              {
                title: 'Annual Health check-up',
                description:
                  'At PERSOL CAREER TECH STUDIO VIETNAM, every year, we arrange comprehensive health check-ups for employees to ensure their physical and mental well-being.',
              },
            ],
          },
        },
      ],
    },
  },
  data() {
    return {
      openDevelopmentItems: [] as number[],
      openWorkingItems: [] as number[],
    };
  },
  methods: {
    toggleDevelopmentItem(index: number) {
      if (this.openDevelopmentItems.includes(index)) {
        this.openDevelopmentItems = this.openDevelopmentItems.filter(
          (i) => i !== index
        );
      } else {
        this.openDevelopmentItems.push(index);
      }
    },
    toggleWorkingItem(index: number) {
      if (this.openWorkingItems.includes(index)) {
        this.openWorkingItems = this.openWorkingItems.filter(
          (i) => i !== index
        );
      } else {
        this.openWorkingItems.push(index);
      }
    },
  },
});
</script>
