export interface AccordionDetail {
  title: string;
  description: string;
}

export interface AccordionContent {
  summary: string;
  detail: AccordionDetail[];
}

export interface AccordionItem {
  title: string;
  imgName: string;
  content: AccordionContent;
}
