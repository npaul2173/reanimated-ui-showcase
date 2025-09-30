import { RootStackParamList } from '../navigation/router';

export type ScreensListProps = {
  navigationKey: keyof RootStackParamList;
  title: string;
  description: string;
  bgColor: string;
  color?: string;
};

export const listData: ScreensListProps[] = [
  {
    navigationKey: 'voiceRoomUsersPreview',
    title: 'Voice room preview',
    description:
      'Displays animated micro cards with curved transitions for dynamic visual flow',
    bgColor: '#d6d6d6ff', // red-500
    color: '#000000',
  },
  // {
  //   navigationKey: 'verticalCarousel',
  //   title: 'Vertical Carousel',
  //   description:
  //     'Displays animated micro cards with curved transitions for dynamic visual flow',
  //   bgColor: '#f2ab07ff', // red-500
  // },

  {
    navigationKey: 'typingAnimation',
    title: 'Typing animation',
    description: 'Smooth typing animation with custom cursor blinking',
    bgColor: '#5dcb9bff', // red-500
  },

  {
    navigationKey: 'appleInvites',
    title: 'Apple invites',
    description: 'Displays apple invites new scrollview animation',
    bgColor: '#09100dff', // red-500
  },
  {
    navigationKey: 'curvedTransitionMicroCards',
    title: 'Curved Cards',
    description:
      'Displays animated micro cards with curved transitions for dynamic visual flow',
    bgColor: '#219cc2ff', // red-500
  },
  {
    navigationKey: 'leaderBoard',
    title: 'Leader board',
    description: 'Displays top users in a leaderboard format',
    bgColor: '#FD5919', // red-500
  },
  {
    navigationKey: 'StoryList',
    title: 'Story List',
    description:
      'An accordian looking card than expands to reveal detailed breakdowns',
    bgColor: '#21457aff', // red-500
  },
  {
    navigationKey: 'CheckboxInteraction',
    title: 'Checkbox interaction',
    description: 'Play with custom checkboxes and see real-time state changes.',
    bgColor: '#D7EC29', // red-500
    color: '#000000',
  },

  {
    navigationKey: 'AnimatedbarChart',
    title: 'Bar Animation',
    description: 'Watch data come alive with smooth, dynamic bar animations.',
    bgColor: '#10B981', // red-500
  },
  {
    navigationKey: 'BreakdownListCard',
    title: 'Breakdown  List',
    description:
      'An accordian looking card than expands to reveal detailed breakdowns',
    bgColor: '#302d2dff', // red-500
  },
];
