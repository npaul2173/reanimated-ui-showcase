import { Dimensions } from 'react-native';
import { userProfilePhoto } from '../../assets/images/profilePictures';
import { generateSquenceId } from '../common/util';

const { width: appWidth } = Dimensions.get('screen');

// Constants
export const CARD_WIDTH = appWidth * 0.8;
export const CONTAINER_PADDING = 16;
export const INNER_PADDING = 16;
export const AVATAR_IMAGE_SIZE = 60;
export const ANIMATION_SIZE = 25;
export const AUDIO_ANIMATION_SIZE = 50;
export const CHEVRON_ICON_SIZE = 36;
export const CONTAINER_HEIGHT = 370;

export type UserDataProps = {
  id: string;
  firstName: string;
  lastName: string;
  image: any;
  isSpeaking: boolean;
};

const generateId = generateSquenceId();

export const usersData: UserDataProps[] = [
  {
    id: generateId(),
    firstName: 'Ethan',
    lastName: 'Brown',
    image: userProfilePhoto.male001,
    isSpeaking: true,
  },
  {
    id: generateId(),
    firstName: 'James',
    lastName: 'Anderson',
    image: userProfilePhoto.male009,
    isSpeaking: false,
  },
  {
    id: generateId(),
    firstName: 'Sophia',
    lastName: 'Carter',
    image: userProfilePhoto.male004,
    isSpeaking: false,
  },
  {
    id: generateId(),
    firstName: 'Olivia',
    lastName: 'Wilson',
    image: userProfilePhoto.male006,
    isSpeaking: false,
  },
  {
    id: generateId(),
    firstName: 'Liam',
    lastName: 'Johnson',
    image: userProfilePhoto.male003,
    isSpeaking: false,
  },

  {
    id: generateId(),
    firstName: 'Mia',
    lastName: 'Davis',
    image: userProfilePhoto.male007,
    isSpeaking: true,
  },
  {
    id: generateId(),
    firstName: 'Noah',
    lastName: 'Miller',
    image: userProfilePhoto.male008,
    isSpeaking: false,
  },
];
