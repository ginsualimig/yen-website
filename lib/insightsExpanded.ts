export interface DataPoint {
  label: string;
  value: string;
  context?: string;
}

export interface Subsection {
  heading: string;
  content: string;
  dataPoints?: string[];
}

export interface Section {
  title: string;
  subsections: Subsection[];
}

export interface Reference {
  number: number;
  author: string;
  year: number;
  title: string;
  source: string;
}

export interface Footnote {
  term: string;
  definition: string;
}

export interface ExpandedArticle {
  id: string;
  executiveSummary: string;
  sections: Section[];
  references: Reference[];
  footnotes: Footnote[];
}

export { default as allExpandedArticles } from './expanded/index';
export type { ExpandedArticle };
