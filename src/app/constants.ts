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
    bgColor: '#252829ff', // red-500
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

  // {
  //   navigationKey: 'sharedNavigation',
  //   title: 'Shared navigation',
  //   description: 'Description that is for this screen',
  //   bgColor: '#3B82F6', // blue-500
  // },
  // {
  //   navigationKey: 'liveLine',
  //   title: 'Live line',
  //   description: 'Description that is for this screen',
  //   bgColor: '#10B981', // emerald-500
  // },
  // {
  //   navigationKey: 'scrollViewAnimation',
  //   title: 'Scroll view animation',
  //   description: 'Description that is for this screen',
  //   bgColor: '#F59E0B', // amber-500
  // },
  // {
  //   navigationKey: 'profilePictureAnimation',
  //   title: 'Profile picture animation',
  //   description: 'Description that is for this screen',
  //   bgColor: '#8B5CF6', // violet-500
  // },
  // {
  //   navigationKey: 'chartAnimation',
  //   title: 'Chart Animation',
  //   description: 'Animate bar and line charts with smooth transitions',
  //   bgColor: '#EC4899', // pink-500
  // },
  // {
  //   navigationKey: 'parallaxScroll',
  //   title: 'Parallax Scroll',
  //   description: 'Background images move slower than foreground content',
  //   bgColor: '#14B8A6', // teal-500
  // },
  // {
  //   navigationKey: 'dragAndDrop',
  //   title: 'Drag & Drop',
  //   description: 'Reorder items using drag-and-drop gestures',
  //   bgColor: '#F97316', // orange-500
  // },
  // {
  //   navigationKey: 'gestureCards',
  //   title: 'Gesture Cards',
  //   description: 'Swipe through animated cards with spring physics',
  //   bgColor: '#6366F1', // indigo-500
  // },
  // {
  //   navigationKey: 'progressRing',
  //   title: 'Progress Ring',
  //   description: 'Circular animated progress indicators',
  //   bgColor: '#22C55E', // green-500
  // },
  // {
  //   navigationKey: 'bottomSheet',
  //   title: 'Bottom Sheet',
  //   description: 'Interactive draggable bottom sheet component',
  //   bgColor: '#D946EF', // fuchsia-500
  // },
  // {
  //   navigationKey: 'animatedList',
  //   title: 'Animated List',
  //   description: 'List with smooth item insertions and deletions',
  //   bgColor: '#0EA5E9', // sky-500
  // },
  // {
  //   navigationKey: 'skeletonLoader',
  //   title: 'Skeleton Loader',
  //   description: 'Shimmering skeletons for loading states',
  //   bgColor: '#EAB308', // yellow-500
  // },
  // {
  //   navigationKey: 'storyViewer',
  //   title: 'Story Viewer',
  //   description: 'Instagram-like stories with progress bars',
  //   bgColor: '#DB2777', // rose-600
  // },
  // {
  //   navigationKey: 'mapAnimations',
  //   title: 'Map Animations',
  //   description: 'Interactive map markers and camera transitions',
  //   bgColor: '#2563EB', // blue-600
  // },
];
