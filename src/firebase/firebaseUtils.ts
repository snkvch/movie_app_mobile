import auth, { firebase as FIREBASE } from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { FirebaseError } from '../utils/types/authentication';
import WEB_CLIENT_ID from '../utils/constants/webClientId';

const INCORRECT_DATA = 'Incorrect email or password';
const EMAIL_IN_USE = 'That email address is already in use!';
const INVALID_EMAIL = 'That email address is invalid!';
const FIREBASE_EMAIL_IN_USE = 'auth/email-already-in-use';
const FIREBASE_INVALID_EMAIL = 'auth/invalid-email';

const loginWithEmailPassword = (email: string, password: string) =>
  auth()
    .signInWithEmailAndPassword(email, password)
    .catch(() => Alert.alert(INCORRECT_DATA));

const registerEmailPassword = (email: string, password: string) =>
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() =>
      firebase
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser?.uid)
        .set({ email, password }),
    )
    .catch((error: FirebaseError) => {
      if (error.code === FIREBASE_EMAIL_IN_USE) {
        Alert.alert(EMAIL_IN_USE);
      }
      if (error.code === FIREBASE_INVALID_EMAIL) {
        Alert.alert(INVALID_EMAIL);
      }
    });

const logout = async () => {
  await FIREBASE.auth()
    .signOut()
    .catch((error: FirebaseError) => Alert.alert(error.message));
};

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
});
const onGoogleSignIn = async () => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  await auth().signInWithCredential(googleCredential);
};

export {
  loginWithEmailPassword,
  registerEmailPassword,
  logout,
  onGoogleSignIn,
};
