import { ScreenList } from '../types/navigation';

interface Button {
  text: string;
  route: ScreenList;
}

const MAPPED_BUTTONS: Array<Button> = [
  { text: 'Sign Up', route: ScreenList.SignUpScreen },
  { text: 'Login', route: ScreenList.LoginScreen },
];

export default MAPPED_BUTTONS;
