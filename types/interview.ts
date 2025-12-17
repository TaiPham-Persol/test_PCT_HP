type InterviewRaw = {
  text: string;
  props: Record<string, string>;
};

export type InterviewItem = [InterviewRaw[], InterviewRaw[]];

export type InterviewTemplate = Record<number, InterviewItem>;

export type InterviewList = {
  id: number;
  title: string;
  name: string;
  position: string;
  tags: string[];
  description: string;
  images: string[];
  template: InterviewItem;
};
