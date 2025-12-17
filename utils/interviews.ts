import { InterviewTemplate, InterviewList } from '@/types/interview';
import EMPLOYEE_1_TEXT from './interviews/employee1';
import EMPLOYEE_2_TEXT from './interviews/employee2';
import EMPLOYEE_3_TEXT from './interviews/employee3';
import EMPLOYEE_4_TEXT from './interviews/employee4';
import EMPLOYEE_5_TEXT from './interviews/employee5';
import EMPLOYEE_6_TEXT from './interviews/employee6';
import EMPLOYEE_7_TEXT from './interviews/employee7';
import EMPLOYEE_8_TEXT from './interviews/employee8';
import EMPLOYEE_9_TEXT from './interviews/employee9';
import EMPLOYEE_10_TEXT from './interviews/employee10';
import EMPLOYEE_11_TEXT from './interviews/employee11';
import EMPLOYEE_12_TEXT from './interviews/employee12';
import EMPLOYEE_13_TEXT from './interviews/employee13';
import EMPLOYEE_14_TEXT from './interviews/employee14';

/**
 * Employee IDs mapping
 */
const EMPLOYEE_IDS = {
  EMPLOYEE_1: 1, // Vu Tran
  EMPLOYEE_2: 2, // Hien Nguyen
  EMPLOYEE_3: 3, // Huu Nguyen
  EMPLOYEE_4: 4,
  EMPLOYEE_5: 5, // Nam Nguyen
  EMPLOYEE_6: 6, // Thau Nguyen
  EMPLOYEE_7: 7, // Luc Luong
  EMPLOYEE_8: 8, // Tai Pham
  EMPLOYEE_9: 9, // Thien Vo
  EMPLOYEE_10: 10, // Giàu Nguyen
  EMPLOYEE_11: 11, // Tuan Cao
  EMPLOYEE_12: 12, // Binh Nguyen
  EMPLOYEE_13: 13, // Hau Huynh
  EMPLOYEE_14: 14, // Tomoaki shida
};

const showEmployeeIds = [
  EMPLOYEE_IDS.EMPLOYEE_5,
  EMPLOYEE_IDS.EMPLOYEE_6,
  EMPLOYEE_IDS.EMPLOYEE_8,
  EMPLOYEE_IDS.EMPLOYEE_10,
];

/**
 * Interview items mapping - combines all employee interview texts
 */
const interviewItems: InterviewTemplate = {
  [EMPLOYEE_IDS.EMPLOYEE_1]: EMPLOYEE_1_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_2]: EMPLOYEE_2_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_3]: EMPLOYEE_3_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_4]: EMPLOYEE_4_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_5]: EMPLOYEE_5_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_6]: EMPLOYEE_6_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_7]: EMPLOYEE_7_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_8]: EMPLOYEE_8_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_9]: EMPLOYEE_9_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_10]: EMPLOYEE_10_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_11]: EMPLOYEE_11_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_12]: EMPLOYEE_12_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_13]: EMPLOYEE_13_TEXT,
  [EMPLOYEE_IDS.EMPLOYEE_14]: EMPLOYEE_14_TEXT,
};

/**
 * Employee voices data - metadata for each employee
 */
const employeeVoices = [
  {
    id: EMPLOYEE_IDS.EMPLOYEE_1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    emotions:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    name: 'Vu Tran',
    position: 'Technical Leader',
    tags: ['tag', 'tag', 'tag'],
    imageName: 'employee1.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_2,
    title: "C# .NET TEAM'S HIEN-SAN",
    emotions:
      '"At PCT, working hours are extremely flexible, as long as you ensure responsibility and work discipline. About the concept of "Work-life Balance", before, I thought this was a luxury, but at PCT, everyone finishes their work on time."',
    name: 'Hien Nguyen',
    position: 'Technical Leader',
    tags: ['#work_life_balance', '#personal_development', '#team_spirit'],
    imageName: 'employee2.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    emotions:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    name: 'Huu Nguyen',
    position: 'Technical Leader',
    tags: ['tag', 'tag', 'tag'],
    imageName: 'employee3.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_4,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    emotions:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    name: 'Name Surname',
    position: 'Position',
    tags: ['tag', 'tag', 'tag'],
    imageName: 'employee4.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_5,
    title: "doda Team's Nam-san",
    emotions:
      '"I find the company to be even more dynamic and supportive than I initially imagined. Not only the exceptional level of teamwork but also the comprehensive evaluation system, which encourages continuous self-improvement and personal growth"',
    name: 'Nam Nguyen',
    position: 'BRSE (Bridge system engineer)',
    tags: [
      '#dynamic_work_space',
      '#exceptional_level_of_teamwork',
      '#flexible_working_hours',
    ],
    imageName: 'employee5.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_6,
    title: "HRF Teams's Thau-san",
    emotions:
      '"In the beginning, I knew PERSOL CAREER TECH STUDIO VIETNAM is a startup company and associate company of Persol Group in Japan. And the company is building some projects to help people with career development."',
    name: 'Thau Nguyen',
    position: 'Frontend Leader',
    tags: ['#onboarding_experience', '#work_culture', '#career_growth'],
    imageName: 'employee6.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_7,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    emotions:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    name: 'Luc Luong',
    position: 'Backend Engineer',
    tags: ['tag', 'tag', 'tag'],
    imageName: 'employee7.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_8,
    title: "Miraiz Team's Tai-san",
    emotions:
      '"At first, I thought PERSOL CAREER TECH STUDIO VIETNAM was just a small company like the ones I\'d worked at before. But after joining, I was pleasantly surprised by how big, dynamic, and supportive the environment is. It\'s been way beyond what I expected!"',
    name: 'Tai Pham',
    position: 'Frontend Leader',
    tags: ['#dynamic_work_space', '#flexible_working_hours'],
    imageName: 'employee8.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_9,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    emotions:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    name: 'Thien Vo',
    position: 'Technical Leader',
    tags: ['dynamic_work_space', 'flexible_working_hours'],
    imageName: 'employee9.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_10,
    title: "Hipro Direct's Giau-san",
    emotions:
      '"Before joining PCT, I heard rumors working for a Japanese company would be tough — but at PCT things are well structured with clear processes and strong support for growth."',
    name: 'Giau Nguyen',
    position: 'Technical Leader',
    tags: ['#clear_processes', '#open_and_respectful', '#comfortable'],
    imageName: 'employee10.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_11,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    emotions:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    name: 'Tuan Cao',
    position: 'Technical Leader',
    tags: ['tag', 'tag', 'tag'],
    imageName: 'employee11.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_12,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    emotions:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    name: 'Binh Nguyen',
    position: 'Technical Leader',
    tags: ['tag', 'tag', 'tag'],
    imageName: 'employee12.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_13,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    emotions:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    name: 'Hau Huynh',
    position: 'Frontend Engineer',
    tags: ['tag', 'tag', 'tag'],
    imageName: 'employee13.jpg',
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_14,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    emotions:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    name: 'Tomoaki shida',
    position: 'General Manager',
    tags: ['tag', 'tag', 'tag'],
    imageName: 'employee14.jpg',
  },
];

/**
 * Interview list - complete interview data combining text and metadata
 */
const interviewList: InterviewList[] = [
  {
    id: EMPLOYEE_IDS.EMPLOYEE_1,
    title: employeeVoices[0].title,
    name: employeeVoices[0].name,
    position: employeeVoices[0].position,
    tags: employeeVoices[0].tags,
    description: employeeVoices[0].emotions,
    images: ['interview00.jpg', 'interview01.jpg', 'interview02.jpg'],
    template: [...interviewItems[employeeVoices[0].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_2,
    title: employeeVoices[1].title,
    name: employeeVoices[1].name,
    position: employeeVoices[1].position,
    tags: employeeVoices[1].tags,
    description: employeeVoices[1].emotions,
    images: ['interview10.jpg', 'interview11.jpg', 'interview12.jpg'],
    template: [...interviewItems[employeeVoices[1].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_3,
    title: employeeVoices[2].title,
    name: employeeVoices[2].name,
    position: employeeVoices[2].position,
    tags: employeeVoices[2].tags,
    description: employeeVoices[2].emotions,
    images: ['interview20.jpg', 'interview21.jpg', 'interview22.jpg'],
    template: [...interviewItems[employeeVoices[2].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_4,
    title: employeeVoices[3].title,
    name: employeeVoices[3].name,
    position: employeeVoices[3].position,
    tags: employeeVoices[3].tags,
    description: employeeVoices[3].emotions,
    images: ['interview30.jpg', 'interview31.jpg', 'interview32.jpg'],
    template: [...interviewItems[employeeVoices[3].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_5,
    title: employeeVoices[4].title,
    name: employeeVoices[4].name,
    position: employeeVoices[4].position,
    tags: employeeVoices[4].tags,
    description: employeeVoices[4].emotions,
    images: ['interview40.jpg', 'interview41.jpg', 'interview42.jpg'],
    template: [...interviewItems[employeeVoices[4].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_6,
    title: employeeVoices[5].title,
    name: employeeVoices[5].name,
    position: employeeVoices[5].position,
    tags: employeeVoices[5].tags,
    description: employeeVoices[5].emotions,
    images: ['interview50.jpg', 'interview51.jpg', 'interview52.jpg'],
    template: [...interviewItems[employeeVoices[5].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_7,
    title: employeeVoices[6].title,
    name: employeeVoices[6].name,
    position: employeeVoices[6].position,
    tags: employeeVoices[6].tags,
    description: employeeVoices[6].emotions,
    images: ['interview60.jpg', 'interview61.jpg', 'interview62.jpg'],
    template: [...interviewItems[employeeVoices[6].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_8,
    title: employeeVoices[7].title,
    name: employeeVoices[7].name,
    position: employeeVoices[7].position,
    tags: employeeVoices[7].tags,
    description: employeeVoices[7].emotions,
    images: ['interview70.jpg', 'interview71.jpg', 'interview72.jpg'],
    template: [...interviewItems[employeeVoices[7].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_9,
    title: employeeVoices[8].title,
    name: employeeVoices[8].name,
    position: employeeVoices[8].position,
    tags: employeeVoices[8].tags,
    description: employeeVoices[8].emotions,
    images: ['interview80.jpg', 'interview81.jpg', 'interview82.jpg'],
    template: [...interviewItems[employeeVoices[8].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_10,
    title: employeeVoices[9].title,
    name: employeeVoices[9].name,
    position: employeeVoices[9].position,
    tags: employeeVoices[9].tags,
    description: employeeVoices[9].emotions,
    images: ['interview90.jpg', 'interview91.jpg', 'interview92.jpg'],
    template: [...interviewItems[employeeVoices[9].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_11,
    title: employeeVoices[10].title,
    name: employeeVoices[10].name,
    position: employeeVoices[10].position,
    tags: employeeVoices[10].tags,
    description: employeeVoices[10].emotions,
    images: ['interview100.jpg', 'interview101.jpg', 'interview102.jpg'],
    template: [...interviewItems[employeeVoices[10].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_12,
    title: employeeVoices[11].title,
    name: employeeVoices[11].name,
    position: employeeVoices[11].position,
    tags: employeeVoices[11].tags,
    description: employeeVoices[11].emotions,
    images: ['interview110.jpg', 'interview111.jpg', 'interview112.jpg'],
    template: [...interviewItems[employeeVoices[11].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_13,
    title: employeeVoices[12].title,
    name: employeeVoices[12].name,
    position: employeeVoices[12].position,
    tags: employeeVoices[12].tags,
    description: employeeVoices[12].emotions,
    images: ['interview120.jpg', 'interview121.jpg', 'interview122.jpg'],
    template: [...interviewItems[employeeVoices[12].id]],
  },
  {
    id: EMPLOYEE_IDS.EMPLOYEE_14,
    title: employeeVoices[13].title,
    name: employeeVoices[13].name,
    position: employeeVoices[13].position,
    tags: employeeVoices[13].tags,
    description: employeeVoices[13].emotions,
    images: ['interview130.jpg', 'interview131.jpg', 'interview132.jpg'],
    template: [...interviewItems[employeeVoices[13].id]],
  },
];

export default {
  employeeVoices: employeeVoices.filter((item) =>
    showEmployeeIds.includes(item.id)
  ),
  interviewList,
};
