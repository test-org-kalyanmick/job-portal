import { v4 as uuid } from 'uuid';

export const jobseekers = [
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'West Virginia',
      city: 'Parkersburg',
      street: '2849 Fulton Street'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    phone: '304-428-3097',
    currentDesignation: 'Senior Engineer',
    currentOrganization: 'Capgemini India Pvt. Ltd.',
    skills: [
      {technology: 'Java', monthsOfExperiance: 24}, 
      {technology: 'React.js', monthsOfExperiance: 24}, 
      {technology: 'HTML5', monthsOfExperiance: 30}, 
      {technology: 'CSS3', monthsOfExperiance: 30}, 
      {technology: 'Docker', monthsOfExperiance: 30}, 
      {technology: 'Google Cloud Platform', monthsOfExperiance: 24},
      {technology: 'Kubernetes', monthsOfExperiance: 24},
      {technology: 'Cloud SQL', monthsOfExperiance: 24}
    ],
    isActivelyLooking: true,
    isServiceNoticePeriod: true,
    noticePeriodInDays: 90, 
    monthsOfExperiance: 100,
    usefulLinks: {
      linkedIn: 'https://www.linkedin.com', github: 'https://www.github.com', resume: 'https://www.google.com', website: 'https://www.naukri.com'
    },
    certifications: []
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Bristow',
      city: 'Iowa',
      street: '1865  Pleasant Hill Road'
    },
    avatarUrl: '/static/images/avatars/avatar_4.png',
    createdAt: 1555016400000,
    email: 'cao.yu@devias.io',
    name: 'Cao Yu',
    phone: '712-351-5711',
    // currentDesignation: 'Senior Engineer',
    currentOrganization: 'Capgemini India Pvt. Ltd.',
    skills: [
      {technology: '.Net', monthsOfExperiance: 24}, 
      {technology: 'React.js', monthsOfExperiance: 24}, 
      {technology: 'Docker', monthsOfExperiance: 30}, 
      {technology: 'Amazon Web Services', monthsOfExperiance: 24},
      {technology: 'Kubernetes', monthsOfExperiance: 24},
      {technology: 'Cloud SQL', monthsOfExperiance: 24}
    ],
    isActivelyLooking: true,
    isServiceNoticePeriod: true,
    noticePeriodInDays: 90, 
    monthsOfExperiance: 100,
    usefulLinks: {
      linkedIn: 'https://www.linkedin.com', github: 'https://www.github.com', resume: 'https://www.google.com', website: 'https://www.naukri.com'
    },
    certifications: []
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Georgia',
      city: 'Atlanta',
      street: '4894  Lakeland Park Drive'
    },
    avatarUrl: '/static/images/avatars/avatar_2.png',
    createdAt: 1555016400000,
    // email: 'alexa.richardson@devias.io',
    name: 'Alexa Richardson',
    phone: '770-635-2682',
    currentDesignation: 'Junior Engineer',
    skills: [
      {technology: 'Go Lang', monthsOfExperiance: 24}, 
      {technology: 'Angular.js', monthsOfExperiance: 24}, 
    ],
    isActivelyLooking: true,
    isServiceNoticePeriod: true,
    noticePeriodInDays: 90, 
    monthsOfExperiance: 100,
    usefulLinks: {
      linkedIn: 'https://www.linkedin.com', github: 'https://www.github.com', resume: 'https://www.google.com', website: 'https://www.naukri.com'
    },
    certifications: []
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      // state: 'Ohio',
      city: 'Dover',
      street: '4158  Hedge Street'
    },
    // avatarUrl: '/static/images/avatars/avatar_5.png',
    createdAt: 1554930000000,
    email: 'anje.keizer@devias.io',
    name: 'Anje Keizer',
    // phone: '908-691-3242',
    currentDesignation: 'Senior Engineer',
    currentOrganization: 'Capgemini India Pvt. Ltd.',
    // skills: [
    //   {technology: 'Java', monthsOfExperiance: 24}, 
    //   {technology: 'React.js', monthsOfExperiance: 24}, 
    //   {technology: 'HTML5', monthsOfExperiance: 30}, 
    //   {technology: 'CSS3', monthsOfExperiance: 30}, 
    //   {technology: 'Docker', monthsOfExperiance: 30}, 
    //   {technology: 'Google Cloud Platform', monthsOfExperiance: 24},
    //   {technology: 'Kubernetes', monthsOfExperiance: 24},
    //   {technology: 'Cloud SQL', monthsOfExperiance: 24}
    // ],
    isActivelyLooking: true,
    isServiceNoticePeriod: true,
    noticePeriodInDays: 90, 
    monthsOfExperiance: 100,
    usefulLinks: {
      linkedIn: 'https://www.linkedin.com', github: 'https://www.github.com', resume: 'https://www.google.com', website: 'https://www.naukri.com'
    },
    certifications: []
  },
  {
    id: uuid(),
    address: {
      // country: 'USA',
      state: 'Texas',
      // city: 'Dallas',
      street: '75247'
    },
    // avatarUrl: '/static/images/avatars/avatar_6.png',
    createdAt: 1554757200000,
    email: 'clarke.gillebert@devias.io',
    // name: 'Clarke Gillebert',
    phone: '972-333-4106',
    currentDesignation: 'Senior Engineer',
    currentOrganization: 'Capgemini India Pvt. Ltd.',
    skills: [
      {technology: 'Java', monthsOfExperiance: 24}, 
      {technology: 'React.js', monthsOfExperiance: 24}, 
      {technology: 'HTML5', monthsOfExperiance: 30}, 
      {technology: 'CSS3', monthsOfExperiance: 30}, 
      {technology: 'Docker', monthsOfExperiance: 30}, 
      {technology: 'Google Cloud Platform', monthsOfExperiance: 24},
      {technology: 'Kubernetes', monthsOfExperiance: 24},
      {technology: 'Cloud SQL', monthsOfExperiance: 24}
    ],
    isActivelyLooking: true,
    isServiceNoticePeriod: true,
    noticePeriodInDays: 90, 
    monthsOfExperiance: 100,
    usefulLinks: {
      linkedIn: 'https://www.linkedin.com', github: 'https://www.github.com', resume: 'https://www.google.com', website: 'https://www.naukri.com'
    },
    certifications: []
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'California',
      city: 'Bakerfield',
      street: '317 Angus Road'
    },
    avatarUrl: '/static/images/avatars/avatar_1.png',
    createdAt: 1554670800000,
    email: 'adam.denisov@devias.io',
    name: 'Adam Denisov',
    phone: '858-602-3409',
    currentDesignation: 'Senior Engineer',
    currentOrganization: 'Capgemini India Pvt. Ltd.',
    skills: [
      {technology: 'Java', monthsOfExperiance: 24}, 
      {technology: 'React.js', monthsOfExperiance: 24}, 
      {technology: 'HTML5', monthsOfExperiance: 30}, 
      {technology: 'CSS3', monthsOfExperiance: 30}, 
      {technology: 'Docker', monthsOfExperiance: 30}, 
      {technology: 'Google Cloud Platform', monthsOfExperiance: 24},
      {technology: 'Kubernetes', monthsOfExperiance: 24},
      {technology: 'Cloud SQL', monthsOfExperiance: 24}
    ],
    isActivelyLooking: true,
    isServiceNoticePeriod: true,
    noticePeriodInDays: 90, 
    monthsOfExperiance: 100,
    usefulLinks: {
      linkedIn: 'https://www.linkedin.com', github: 'https://www.github.com', resume: 'https://www.google.com', website: 'https://www.naukri.com'
    },
    certifications: []
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'California',
      city: 'Redondo Beach',
      street: '2188  Armbrester Drive'
    },
    avatarUrl: '/static/images/avatars/avatar_7.png',
    createdAt: 1554325200000,
    email: 'ava.gregoraci@devias.io',
    name: 'Ava Gregoraci',
    phone: '415-907-2647',
    currentDesignation: 'Senior Engineer',
    currentOrganization: 'Capgemini India Pvt. Ltd.',
    skills: [
      {technology: 'Java', monthsOfExperiance: 24}, 
      {technology: 'React.js', monthsOfExperiance: 24}, 
      {technology: 'HTML5', monthsOfExperiance: 30}, 
      {technology: 'CSS3', monthsOfExperiance: 30}, 
      {technology: 'Docker', monthsOfExperiance: 30}, 
      {technology: 'Google Cloud Platform', monthsOfExperiance: 24},
      {technology: 'Kubernetes', monthsOfExperiance: 24},
      {technology: 'Cloud SQL', monthsOfExperiance: 24}
    ],
    isActivelyLooking: true,
    isServiceNoticePeriod: true,
    noticePeriodInDays: 90, 
    monthsOfExperiance: 100,
    usefulLinks: {
      linkedIn: 'https://www.linkedin.com', github: 'https://www.github.com', resume: 'https://www.google.com', website: 'https://www.naukri.com'
    },
    certifications: []
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Nevada',
      city: 'Las Vegas',
      street: '1798  Hickory Ridge Drive'
    },
    avatarUrl: '/static/images/avatars/avatar_8.png',
    createdAt: 1523048400000,
    email: 'emilee.simchenko@devias.io',
    name: 'Emilee Simchenko',
    phone: '702-661-1654',
    currentDesignation: 'Senior Engineer',
    currentOrganization: 'Capgemini India Pvt. Ltd.',
    skills: [
      {technology: 'Java', monthsOfExperiance: 24}, 
      {technology: 'React.js', monthsOfExperiance: 24}, 
      {technology: 'HTML5', monthsOfExperiance: 30}, 
      {technology: 'CSS3', monthsOfExperiance: 30}, 
      {technology: 'Docker', monthsOfExperiance: 30}, 
      {technology: 'Google Cloud Platform', monthsOfExperiance: 24},
      {technology: 'Kubernetes', monthsOfExperiance: 24},
      {technology: 'Cloud SQL', monthsOfExperiance: 24}
    ],
    isActivelyLooking: true,
    isServiceNoticePeriod: true,
    noticePeriodInDays: 90, 
    monthsOfExperiance: 100,
    usefulLinks: {
      linkedIn: 'https://www.linkedin.com', github: 'https://www.github.com', resume: 'https://www.google.com', website: 'https://www.naukri.com'
    },
    certifications: []
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Michigan',
      city: 'Detroit',
      street: '3934  Wildrose Lane'
    },
    avatarUrl: '/static/images/avatars/avatar_9.png',
    createdAt: 1554702800000,
    email: 'kwak.seong.min@devias.io',
    name: 'Kwak Seong-Min',
    phone: '313-812-8947',
    currentDesignation: 'Senior Engineer',
    currentOrganization: 'Capgemini India Pvt. Ltd.',
    skills: [
      {technology: 'Java', monthsOfExperiance: 24}, 
      {technology: 'React.js', monthsOfExperiance: 24}, 
      {technology: 'HTML5', monthsOfExperiance: 30}, 
      {technology: 'CSS3', monthsOfExperiance: 30}, 
      {technology: 'Docker', monthsOfExperiance: 30}, 
      {technology: 'Google Cloud Platform', monthsOfExperiance: 24},
      {technology: 'Kubernetes', monthsOfExperiance: 24},
      {technology: 'Cloud SQL', monthsOfExperiance: 24}
    ],
    isActivelyLooking: true,
    isServiceNoticePeriod: true,
    noticePeriodInDays: 90, 
    monthsOfExperiance: 100,
    usefulLinks: {
      linkedIn: 'https://www.linkedin.com', github: 'https://www.github.com', resume: 'https://www.google.com', website: 'https://www.naukri.com'
    },
    certifications: []
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Utah',
      city: 'Salt Lake City',
      street: '368 Lamberts Branch Road'
    },
    avatarUrl: '/static/images/avatars/avatar_10.png',
    createdAt: 1522702800000,
    email: 'merrile.burgett@devias.io',
    name: 'Merrile Burgett',
    phone: '801-301-7894',
    currentDesignation: 'Senior Engineer',
    currentOrganization: 'Capgemini India Pvt. Ltd.',
    skills: [
      {technology: 'Java', monthsOfExperiance: 24}, 
      {technology: 'React.js', monthsOfExperiance: 24}, 
      {technology: 'HTML5', monthsOfExperiance: 30}, 
      {technology: 'CSS3', monthsOfExperiance: 30}, 
      {technology: 'Docker', monthsOfExperiance: 30}, 
      {technology: 'Google Cloud Platform', monthsOfExperiance: 24},
      {technology: 'Kubernetes', monthsOfExperiance: 24},
      {technology: 'Cloud SQL', monthsOfExperiance: 24}
    ],
    isActivelyLooking: true,
    isServiceNoticePeriod: true,
    noticePeriodInDays: 90, 
    monthsOfExperiance: 100,
    usefulLinks: {
      linkedIn: 'https://www.linkedin.com', github: 'https://www.github.com', resume: 'https://www.google.com', website: 'https://www.naukri.com'
    },
    certifications: []
  }
];
