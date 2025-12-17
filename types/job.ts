/**
 * Job-related type definitions
 */

export interface JobSkills {
  must: string[];
  preferable?: string[];
}

export interface JobDetail {
  title: string;
  content: string | string[];
}

export interface JobPosting {
  id: string;
  title: string;
  type: string; // e.g., "Fulltime", "Part-time"
  location: string;
  skills: string[];
  expertise: string;
  icon?: string;
  topReasons?: string[];
  description?: string[];
  compensation?: string;
  skillsRequired?: JobSkills;
  benefits?: string[];
  whyJoinUs?: string[];
  officeLocation?: string;
  applyEmail?: string;
}

export interface JobSectionSubsection {
  title: string;
  content: string[];
}

export interface JobSection {
  id: string;
  title: string;
  content: string | string[];
  condition: boolean;
  hasSubsections?: boolean;
  subsections?: JobSectionSubsection[];
}
