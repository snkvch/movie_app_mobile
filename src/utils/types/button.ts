import { ScreenList } from './navigation';

export interface ButtonProps {
  text: string;
  onPress: () => void;
  mode: 'contained' | 'text';
  btnColor?: 'white' | 'orange';
  disabled?: boolean;
}

export type AuthButtonProps = {
  text: string;
  route: ScreenList;
};

export interface CloseButtonProps {
  onPress: () => void;
}
