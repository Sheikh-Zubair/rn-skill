import {IUser} from '../types';

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
  },
  {
    id: 2,
    name: 'Jane Doe',
    title: getInitials('Jane Doe'),
    message: 'Hey! I am a product manager with 5 years of experience.',
  },
  {
    id: 3,
    name: 'John Smith',
    title: getInitials('John Smith'),
    message: 'Hey! I am a software engineer with 5 years of experience.',
  },
  {
    id: 4,
    name: 'Jane Smith',
    title: getInitials('Jane Smith'),
    message: 'Hey! I am a product manager with 5 years of experience.',
  },
  {
    id: 5,
    name: 'John Doe',
    title: getInitials('John Doe'),
    message: 'Hey! I am a software engineer with 5 years of experience.',
  },
  {
    id: 6,
    name: 'Jane Doe',
    title: getInitials('Jane Doe'),
    message: 'Hey! I am a product manager with 5 years of experience.',
  },
  {
    id: 7,
    name: 'John Smith',
    title: getInitials('John Smith'),
    message: 'Hey! I am a software engineer with 5 years of experience.',
  },
  {
    id: 8,
    name: 'Jane Smith',
    title: getInitials('Jane Smith'),
    message: 'Hey! I am a product manager with 5 years of experience.',
  },
  {
    id: 9,
    name: 'John Doe',
    title: getInitials('John Doe'),
    message: 'Hey! I am a software engineer with 5 years of experience.',
  },
  {
    id: 10,
    name: 'Jane Doe',
    title: getInitials('Jane Doe'),
    message: 'Hey! I am a product manager with 5 years of experience.',
  },
  {
    id: 11,
    name: 'John Smith',
    title: getInitials('John Smith'),
    message: 'Hey! I am a software engineer with 5 years of experience.',
  },
  {
    id: 12,
    name: 'Jane Smith',
    title: getInitials('Jane Smith'),
    message: 'Hey! I am a product manager with 5 years of experience.',
  },
];
