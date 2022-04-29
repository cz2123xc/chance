import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Navigation from './navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
