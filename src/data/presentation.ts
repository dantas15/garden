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
      label: 'Linktree (all my links)',
      link: 'https://linktr.ee/gusgalote',
    },
    {
      label: 'Github',
      link: 'https://github.com/xstav',
    },
  ],
};

export default presentation;
