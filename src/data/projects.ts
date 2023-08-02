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
