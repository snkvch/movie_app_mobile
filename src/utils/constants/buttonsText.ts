interface Button {
  text: string;
  route: string;
}

const BUTTONS_TEXT: Array<Button> = [
  { text: 'Sign Up', route: 'SignUpScreen' },
  { text: 'Login', route: 'LoginScreen' },
];

export default BUTTONS_TEXT;
