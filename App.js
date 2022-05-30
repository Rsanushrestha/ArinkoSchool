import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './Src/Components/SplashScreen/SplashScreen';
import LoginScreen from './Src/Components/Login/LoginScreen';
import SignupScreen from './Src/Components/Login/SignupScreen';
import {AuthProvider} from './Src/Components/Context/AuthContext';
import HomeScreen from './Src/Components/Screen/HomeScreen';
import {AuthContext} from './Src/Components/Context/AuthContext';
import Navigation from './Src/Navigation/Navigation';
const Stack = createNativeStackNavigator();
const App = ({navigation}) => {
  // const {userInfo, splashLoading} = useContext(AuthContext);

  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
