import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './navigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={[{flex: 1}]}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
