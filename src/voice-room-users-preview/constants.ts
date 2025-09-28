import { userProfilePhoto } from '../../assets/images/profilePictures';
import { generateSquenceId } from '../common/util';

export type UserDataProps = {
  id: string;
  firstName: string;
  lastName: string;
  image: any;
};

const generateId = generateSquenceId();

export const usersData: UserDataProps[] = [
  {
    id: generateId(),
    firstName: 'Ethan',
    lastName: 'Brown',
    image: userProfilePhoto.male001,
  },
  {
    id: generateId(),
    firstName: 'James',
    lastName: 'Anderson',
    image: userProfilePhoto.male009,
  },
  {
    id: generateId(),
    firstName: 'Sophia',
    lastName: 'Carter',
    image: userProfilePhoto.male004,
  },
  {
    id: generateId(),
    firstName: 'Olivia',
    lastName: 'Wilson',
    image: userProfilePhoto.male006,
  },
  {
    id: generateId(),
    firstName: 'Liam',
    lastName: 'Johnson',
    image: userProfilePhoto.male003,
  },

  {
    id: generateId(),
    firstName: 'Mia',
    lastName: 'Davis',
    image: userProfilePhoto.male007,
  },
  {
    id: generateId(),
    firstName: 'Noah',
    lastName: 'Miller',
    image: userProfilePhoto.male008,
  },
];
