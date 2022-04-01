import React from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { IconButton, Text, Title } from 'react-native-paper';
import { useFormik } from 'formik';
import auth from '@react-native-firebase/auth';

import { Container, CustomButton, TextInput, Footer } from '../../components';
import { ScreenList, ScreenProps } from '../../utils/types/navigation';
import { loginValidationSchema } from '../../utils/validators';
import {
  EMAIL_FIELD,
  PASSWORD_FIELD,
} from '../../utils/constants/fieldConstants';
import { Authentication } from '../../utils/types/authentication';

import styles from './styles';

const NO_ACCOUNT = 'Do not have an account?';
const TITLE = 'Welcome Back';
const INSTRUCTION = 'Use your credentials below and login to your account';
const LOGIN = 'Login';
const FORGET_PASSWORD = 'Forgot password?';
const SIGN_UP = 'Sign Up';
const INCORRECT_DATA = 'Incorrect email or password';

function LoginScreen({ navigation }: ScreenProps) {
  const navigateToBack = () => {
    navigation.goBack();
  };
  const navigateToSignUp = () => {
    navigation.navigate(ScreenList.SignUpScreen);
  };
  const navigateToForgotPassword = () => {
    navigation.navigate(ScreenList.ForgotPasswordScreen);
  };
  const navigateToMovies = () => {
    navigation.navigate(ScreenList.MoviesScreen);
  };

  const footer = (
    <Footer onPress={navigateToSignUp} title={NO_ACCOUNT} action={SIGN_UP} />
  );

  const onLogin = async ({ Email, Password }: Authentication) => {
    try {
      await auth().signInWithEmailAndPassword(Email, Password);
      navigateToMovies();
    } catch {
      Alert.alert(INCORRECT_DATA);
    }
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { [EMAIL_FIELD]: '', [PASSWORD_FIELD]: '' },
      onSubmit: async (userData) => {
        await onLogin(userData);
      },
      validationSchema: loginValidationSchema,
    });

  return (
    <ScrollView>
      <Container {...{ footer }}>
        <IconButton icon="arrow-left" onPress={navigateToBack} />

        <View style={styles.formContainer}>
          <Title style={styles.title}>{TITLE}</Title>
          <Text style={styles.instruction}>{INSTRUCTION}</Text>
          <TextInput
            mode="outlined"
            label={EMAIL_FIELD}
            icon="email"
            onChangeText={handleChange(EMAIL_FIELD)}
            onBlur={handleBlur(EMAIL_FIELD)}
            value={values.Email}
          />
          {errors.Email && touched.Email && (
            <Text style={styles.error}>{errors.Email}</Text>
          )}

          <TextInput
            mode="outlined"
            label={PASSWORD_FIELD}
            icon="lock"
            onChangeText={handleChange(PASSWORD_FIELD)}
            onBlur={handleBlur(PASSWORD_FIELD)}
            value={values.Password}
            secureTextEntry
          />
          {errors.Password && touched.Password && (
            <Text style={styles.error}>{errors.Password}</Text>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            mode="text"
            text={FORGET_PASSWORD}
            onPress={navigateToForgotPassword}
          />
        </View>
        <View>
          <CustomButton
            btnColor="orange"
            mode="contained"
            text={LOGIN}
            onPress={handleSubmit}
          />
        </View>
      </Container>
    </ScrollView>
  );
}

export default LoginScreen;
