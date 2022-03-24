import { ScreenList } from './navigation';

export type ButtonProps = {
  text: string;
  onPress: () => void;
};

export type AuthButtonProps = {
  text: string;
  route: ScreenList;
};
