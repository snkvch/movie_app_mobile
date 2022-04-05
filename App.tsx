import React from 'react';
import { ThemeProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import MoviesNavigator from './src/navigation/MoviesNavigator';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MoviesNavigator />
      </ThemeProvider>
    </Provider>
  );
}
export default App;
