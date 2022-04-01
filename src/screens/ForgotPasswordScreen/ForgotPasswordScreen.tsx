import React from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { IconButton, Text, Title } from 'react-native-paper';
import { useFormik } from 'formik';
import auth from '@react-native-firebase/auth';

import { ScreenList, ScreenProps } from '../../utils/types/navigation';
import { Container, CustomButton, Footer, TextInput } from '../../components';
import { EMAIL_FIELD } from '../../utils/constants/fieldConstants';
import { emailValidationSchema } from '../../utils/validators';

import styles from '../LoginScreen/styles';

const TITLE = 'Forgot password?';
const INSTRUCTION = 'Enter your email and we will send you a code';
const SEND_CODE = 'Send a code';
const QUESTION = 'Do not have an account?';
const ACTION = 'Sign Up here';
const ERROR = 'Oops, something went wrong';

function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const navigateToWelcomePage = () => {
    navigation.navigate(ScreenList.WelcomeScreen);
  };
  const navigateToSignUp = () => {
    navigation.navigate(ScreenList.SignUpScreen);
  };
  const navigateToPasswordChanged = () => {
    navigation.navigate(ScreenList.PasswordChangedScreen);
  };

  const footer = (
    <Footer title={QUESTION} action={ACTION} onPress={navigateToSignUp} />
  );

  const onPasswordReset = async (Email: string) => {
    await auth()
      .sendPasswordResetEmail(Email)
      .then(navigateToPasswordChanged)
      .catch(() => Alert.alert(ERROR));
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { [EMAIL_FIELD]: '' },
      onSubmit: async (input) => {
        const { Email } = input;
        await onPasswordReset(Email);
      },
      validationSchema: emailValidationSchema,
    });

  return (
    <ScrollView>
      <Container {...{ footer }}>
        <IconButton icon="arrow-left" onPress={navigateToWelcomePage} />

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
        </View>

        <View>
          <CustomButton
            btnColor="orange"
            mode="contained"
            text={SEND_CODE}
            onPress={handleSubmit}
          />
        </View>
      </Container>
    </ScrollView>
  );
}

export default ForgotPasswordScreen;
