// gitprofile.config.js

const config = {
  github: {
    username: 'idofrankel', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 1, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'idofrankel',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://idofrankel.github.io',
    phone: '',
    email: 'ido.frankel@gmail.com',
  },
  skills: ['Python', 'C++', 'JS', 'SQL', 'Angular Framework', 'Git'],
  experiences: [
    {
      company: 'GE Healthcare',
      position: 'Software intern',
      from: 'September 2021',
      to: 'August 2022',
    },
    {
      company: 'Ofek 324 unit -IAF',
      position: 'Fullstack Web Developer',
      from: '2018',
      to: ' July 2020',
    },
  ],
  education: [
    {
      institution: 'Technion - Israel Institute of Technology',
      degree: 'B.Sc in Computer Science',
      from: '2020',
      to: 'current',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['light', 'dark'],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
