import {IUser} from '../types';

const imageUrls = [
  'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
  'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
  'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
  'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
];

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('');
};

export const MOCK_USERS: IUser[] = [
  {
    id: 1,
    name: 'John Doe',
    title: getInitials('John Doe'),
    message: 'Hey! I am a software engineer with 5 years of experience.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
  },
  {
    id: 2,
    name: 'Jane Doe',
    title: getInitials('Jane Doe'),
    message: 'Hey! I am a product manager with 5 years of experience.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
  },
  {
    id: 3,
    name: 'John Smith',
    title: getInitials('John Smith'),
    message: 'Hey! I am a software engineer with 5 years of experience.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
  },
  {
    id: 4,
    name: 'Jane Smith',
    title: getInitials('Jane Smith'),
    message: 'Hey! I am a product manager with 5 years of experience.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
  },
  {
    id: 5,
    name: 'John Doe',
    title: getInitials('John Doe'),
    message: 'Hey! I am a software engineer with 5 years of experience.',
    imageUrl: '',
  },
  {
    id: 6,
    name: 'Jane Doe',
    title: getInitials('Jane Doe'),
    message: 'Hey! I am a product manager with 5 years of experience.',
    imageUrl: '',
  },
  {
    id: 7,
    name: 'John Smith',
    title: getInitials('John Smith'),
    message: 'Hey! I am a software engineer with 5 years of experience.',
    imageUrl: '',
  },
  {
    id: 8,
    name: 'Jane Smith',
    title: getInitials('Jane Smith'),
    message: 'Hey! I am a product manager with 5 years of experience.',
    imageUrl: '',
  },
  {
    id: 9,
    name: 'John Doe',
    title: getInitials('John Doe'),
    message: 'Hey! I am a software engineer with 5 years of experience.',
    imageUrl: '',
  },
  {
    id: 10,
    name: 'Jane Doe',
    title: getInitials('Jane Doe'),
    message: 'Hey! I am a product manager with 5 years of experience.',
    imageUrl: '',
  },
  {
    id: 11,
    name: 'John Smith',
    title: getInitials('John Smith'),
    message: 'Hey! I am a software engineer with 5 years of experience.',
    imageUrl: '',
  },
  {
    id: 12,
    name: 'Jane Smith',
    title: getInitials('Jane Smith'),
    message: 'Hey! I am a product manager with 5 years of experience.',
    imageUrl: '',
  },
].map(user => {
  if (!user.imageUrl) {
    user.imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  }
  return user;
});
