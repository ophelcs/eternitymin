
import { Teaching, Category, Program, Event, Cause, TeamMember } from './types';

export const MOCK_TEACHINGS: Teaching[] = [
  {
    id: '1',
    title: 'The Power of Early Morning Prayer',
    category: Category.PRAYER_FASTING,
    date: '2024-05-15',
    description: 'A deep dive into the spiritual significance of seeking God at the dawn of the day.',
    mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: ['Prayer', 'Morning', 'Discipline'],
    thumbnail: 'https://picsum.photos/seed/prayer/800/450'
  },
  {
    id: '2',
    title: 'Maximizing the Calvary Sacrifice',
    category: Category.MESSAGES,
    date: '2024-05-10',
    description: 'Understanding the full weight of the cross and how it empowers our daily walk.',
    tags: ['Calvary', 'Grace', 'Salvation'],
    thumbnail: 'https://picsum.photos/seed/cross/800/450'
  },
  {
    id: '3',
    title: 'Training Leaders for the Harvest',
    category: Category.TRAINING,
    date: '2024-05-01',
    description: 'Practical steps for mentorship and raising the next generation of ministers.',
    tags: ['Leadership', 'Ministry', 'Training'],
    thumbnail: 'https://picsum.photos/seed/leadership/800/450'
  }
];

export const MOCK_PROGRAMS: Program[] = [
  {
    id: 'sodip',
    name: 'SODIP',
    description: 'School of Discipleship and Prayer',
    overview: 'A rigorous program focused on establishing foundations in spiritual disciplines.',
    curriculum: ['Foundations of Faith', 'The Ministry of Prayer', 'Biblical Stewardship'],
    whoIsItFor: 'Aspiring disciples and new believers',
    duration: '6 Months',
    applicationLink: '#'
  },
  {
    id: 'seal',
    name: 'SEAL',
    description: 'Strategic Executive Apostolic Leadership',
    overview: 'Advanced training for marketplace and ministry leaders seeking apostolic influence.',
    curriculum: ['Kingdom Economics', 'Corporate Governance', 'Apostolic Networking'],
    whoIsItFor: 'Executives and Senior Leaders',
    duration: '2 Years',
    applicationLink: '#'
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'National Prayer Summit 2024',
    datetime: '2024-08-20T09:00:00',
    location: 'Ignition Centre, Abuja',
    description: 'Gathering of believers for a weekend of intense intercession and prophetic word.',
    registerLink: '#'
  },
  {
    id: 'e2',
    title: 'Global Missions Outreach',
    datetime: '2024-12-10T10:00:00',
    location: 'Virtual Event',
    description: 'A showcase of our global impact and opportunities for you to get involved.',
    registerLink: '#'
  }
];

export const MOCK_CAUSES: Cause[] = [
  {
    id: 'c1',
    name: 'Ministry Engagements',
    description: 'Supporting the daily operational costs and outreach programs of Eternity Ministries.',
    donateLink: '#',
    impactHighlight: 'Helped reach over 5,000 students in the last quarter.'
  },
  {
    id: 'c2',
    name: 'Ignition Centre Building Fund',
    description: 'Expanding our physical presence to host more training and prayer sessions.',
    donateLink: '#',
    impactHighlight: 'Foundation completed! Moving to structural phase.'
  }
];

export const MOCK_TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Rev. John Doe',
    role: 'Lead Pastor',
    region: 'Headquarters',
    photo: 'https://picsum.photos/seed/p1/200/200'
  },
  {
    id: 't2',
    name: 'Sarah Smith',
    role: 'Regional Coordinator',
    region: 'Western Africa',
    photo: 'https://picsum.photos/seed/p2/200/200'
  }
];
