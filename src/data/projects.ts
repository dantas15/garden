const TECHS = [
  'ReactJS',
  'NextJS',
  'react-query',
  'zod',
  'TypeScript',
  'Astro',
  'NodeJS',
  'MongoDB',
  'Express',
  'AdonisJS'
  'koa',
  'VueJS',
  'Sign In with Google',
  'GitHub Actions',
] as const;

export type Project = {
  title: string;
  techs: (typeof TECHS)[number][];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: 'Simple timer',
    techs: ['ReactJS', 'TypeScript', 'zod'],
    link: 'https://github.com/dantas15/timer-react-ts',
  },
  {
    title: 'Full-Stack Image upload',
    techs: ['ReactJS', 'TypeScript', 'NodeJS', 'AdonisJS'],
    link: 'https://github.com/dantas15/image-upload-node-react',
  },
  {
    title: 'Eventify',
    techs: [
      'TypeScript',
      'VueJS',
      'NodeJS',
      'Express',
      'MongoDB',
      'Sign In with Google',
      'zod',
    ],
    link: 'https://github.com/dantas15/eventify-compjr',
  },
];

export default projects;
