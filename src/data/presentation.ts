type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: 'gusgalot3g@gmail.com',
  title: "Hi, I'm Gustavo 👋",
  description:
    "I'm a *software developer*, computer science student and <i>philosopher</i>, based in <em>*Brazil* 🇧🇷</em> ",
  socials: [
    {
      label: 'All my links',
      link: 'https://bento.me/dantas',
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/gustavo-dantas-galote-3394661b7/',
    },
    {
      label: 'Github',
      link: 'https://github.com/dantas15',
    },
  ],
};

export default presentation;
