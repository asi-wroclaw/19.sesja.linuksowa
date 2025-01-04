export type SpeechItem = {
  start: string;
  end: string;
  title: string;
  author?: string;
  description?: string[];
  lang?: ('en' | 'pl')[];
  recording?: string;
};
