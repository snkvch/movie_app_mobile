import React from 'react';
import { ThemeProvider } from 'react-native-paper';

import MoviesNavigator from './src/navigation/MoviesNavigator';

function App() {
  return (
    <ThemeProvider>
      <MoviesNavigator />
    </ThemeProvider>
  );
}
export default App;
