import { Question6 } from './components/screens/questions/Question6';
import { Question7 } from './components/screens/questions/Question7';
import { Question5 } from './components/screens/questions/Question5';
import { Question4 } from './components/screens/questions/Question4';
import { Question3 } from './components/screens/questions/Question3';
import { Question2 } from './components/screens/questions/Question2';
import { Question1 } from './components/screens/questions/Question1';
import { Intro } from './components/screens/Intro';
import { Final } from './components/screens/Final';

export const ScreenType = {
  Intro: 'intro',
  Question: 'question',
  Final: 'final',
};

export const screens = [
  {
    name: 'intro',
    component: Intro,
    type: ScreenType.Intro,
    preloadImages: [],
  },
  {
    name: 'question-1',
    component: Question1,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-2',
    component: Question2,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-3',
    component: Question3,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-4',
    component: Question4,
    type: ScreenType.Question,
    preloadImages: [],
    image: [],
  },
  {
    name: 'question-5',
    component: Question5,
    type: ScreenType.Question,
    preloadImages: [],
    image: [],
  },
  {
    name: 'question-6',
    component: Question6,
    type: ScreenType.Question,
    preloadImages: [],
    image: [],
  },
  {
    name: 'question-7',
    component: Question7,
    type: ScreenType.Question,
    preloadImages: [],
    image: [],
  },
  {
    name: 'final',
    component: Final,
    type: ScreenType.Final,
  },
];