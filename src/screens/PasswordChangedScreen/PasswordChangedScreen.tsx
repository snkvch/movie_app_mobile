import React from 'react';
import { ScrollView, View } from 'react-native';
import { Title } from 'react-native-paper';
import AnimatedLottieView from 'lottie-react-native';

import { Container, CloseButton } from '../../components';
import { ScreenList, ScreenProps } from '../../utils/types/navigation';
import Animation from '../../assets/animation.json';

import styles from './styles';

const TITLE = 'Code was sent to your email account';

function PasswordChangedScreen({ navigation }: ScreenProps) {
  const navigateToWelcomePage = () => {
    navigation.navigate(ScreenList.WelcomeScreen);
  };
  const footer = <CloseButton onPress={navigateToWelcomePage} />;

  return (
    <ScrollView>
      <Container {...{ footer }}>
        <View style={styles.content}>
          <Title style={styles.title}>{TITLE}</Title>
          <AnimatedLottieView
            style={styles.animation}
            source={Animation}
            autoPlay
          />
        </View>
      </Container>
    </ScrollView>
  );
}

export default PasswordChangedScreen;
