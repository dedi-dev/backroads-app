import tourImg1 from './images/tour-1.jpeg';
import tourImg2 from './images/tour-2.jpeg';
import tourImg3 from './images/tour-3.jpeg';
import tourImg4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 'link-1', href: '#home', text: 'home' },
  { id: 'link-2', href: '#about', text: 'about' },
  { id: 'link-3', href: '#services', text: 'services' },
  { id: 'link-4', href: '#tours', text: 'tours' },
];

export const socialLinks = [
  {
    id: 'social-logo-1',
    href: 'https://www.facebook.com/',
    className: 'fab fa-facebook',
  },
  {
    id: 'social-logo-2',
    href: 'https://twitter.com/',
    className: 'fab fa-twitter',
  },
  {
    id: 'social-logo-3',
    href: 'https://www.instagram.com/',
    className: 'fab fa-instagram',
  },
];

export const services = [
  {
    id: 'service-1',
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 'service-2',
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  {
    id: 'service-3',
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
];

export const tours = [
  {
    id: 'tour-1',
    image: tourImg1,
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'china',
    date: 'september 15th, 2020',
    totalDays: 6,
    cost: 2100,
  },
  {
    id: 'tour-2',
    image: tourImg2,
    title: 'Best Of Java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'indonesia',
    date: 'october 1th, 2020',
    totalDays: 11,
    cost: 1400,
  },
  {
    id: 'tour-3',
    image: tourImg3,
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'hong kong',
    date: 'september 15th, 2020',
    totalDays: 8,
    cost: 5000,
  },
  {
    id: 'tour-4',
    image: tourImg4,
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'kenya',
    date: 'december 5th, 2019',
    totalDays: 20,
    cost: 3300,
  },
];
