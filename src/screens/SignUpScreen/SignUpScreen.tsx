import { useFormik } from 'formik';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { IconButton, Title } from 'react-native-paper';

import { CustomButton, Container, TextInput, Footer } from '../../components';
import {
  PASSWORD_CONFIRMATION_FIELD,
  EMAIL_FIELD,
  NAME_FIELD,
  PASSWORD_FIELD,
} from '../../utils/constants/fieldConstants';
import { ScreenList, ScreenProps } from '../../utils/types/navigation';
import { validationSchema } from '../../utils/validators';

import styles from '../LoginScreen/styles';

const ACCOUNT_EXISTS = 'I already have an account';
const LOGIN = 'Login';
const SIGN_UP = 'Sign Up';
const TITLE = 'Create account';
const INSTRUCTION = 'Please, enter your name, email and password';
const CONFIRM_PASSWORD = 'Confirm password';

function SignUpScreen({ navigation }: ScreenProps) {
  const navigateToBack = () => {
    navigation.goBack();
  };
  const navigateToSignUp = () => {
    navigation.navigate(ScreenList.LoginScreen);
  };

  const footer = (
    <Footer onPress={navigateToSignUp} title={ACCOUNT_EXISTS} action={LOGIN} />
  );
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        [NAME_FIELD]: '',
        [EMAIL_FIELD]: '',
        [PASSWORD_FIELD]: '',
        [PASSWORD_CONFIRMATION_FIELD]: '',
      },
      onSubmit: (textInput) => console.log(textInput), // потом добавлю movies page
      validationSchema,
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
            label={NAME_FIELD}
            icon="head"
            onChangeText={handleChange(NAME_FIELD)}
            onBlur={handleBlur(NAME_FIELD)}
            value={values.Name}
          />
          {errors.Name && touched.Name && (
            <Text style={styles.error}>{errors.Name}</Text>
          )}
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
          <TextInput
            mode="outlined"
            label={CONFIRM_PASSWORD}
            icon="lock"
            onChangeText={handleChange(PASSWORD_CONFIRMATION_FIELD)}
            onBlur={handleBlur(PASSWORD_CONFIRMATION_FIELD)}
            value={values.PasswordConfirmation}
            secureTextEntry
          />
          {errors[PASSWORD_CONFIRMATION_FIELD] &&
            touched.PasswordConfirmation && (
              <Text style={styles.error}>{errors.PasswordConfirmation}</Text>
            )}
        </View>
        <View>
          <CustomButton
            btnColor="orange"
            mode="contained"
            text={SIGN_UP}
            onPress={handleSubmit}
          />
        </View>
      </Container>
    </ScrollView>
  );
}

export default SignUpScreen;
