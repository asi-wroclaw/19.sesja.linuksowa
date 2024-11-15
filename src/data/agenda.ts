export type SpeechItem = {
  start: string;
  end: string;
  title: string;
  author?: string;
  description?: string[];
  lang?: ('en' | 'pl')[];
  recording?: string;
};

export const SATURDAY_AGENDA: SpeechItem[] = [
  {
    start: 'TBA',
    end: 'TBA',
    title: '',
    author: '',
    // lang: [''],
    description: [''],
    recording: '',
  },
];

export const SUNDAY_AGENDA: SpeechItem[] = [
  {
    start: 'TBA',
    end: 'TBA',
    title: '',
    author: '',
    //lang: [''],
    description: [''],
    recording: '',
  },
  {
    start: 'TBA',
    end: 'TBA',
    title: 'Lightning talks',
    lang: ['en', 'pl'],
    description: [
      'Chciałbyś poruszyć ważny dla Ciebie temat, lub przekazać myśl do społeczności Open Source? Przyjdź i zrób to!',
    ],
    recording: '',
  },
];
