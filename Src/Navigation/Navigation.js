import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../Components/SplashScreen/SplashScreen';
import LoginScreen from '../Components/Login/LoginScreen';
// import SignupScreen from './Src/Components/Login/SignupScreen';
// import {AuthProvider} from './Src/Components/Context/AuthContext';
import HomeScreen from '../Components/Screen/HomeScreen';
import {AuthContext} from '../Components/Context/AuthContext';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000E28',
          },
          headerTintColor: '#637381',
        }}>
        {splashLoading ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : userInfo ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Login',

                headerBackVisible: false,

                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 30,
                },
              }}
            />
          </>
        )}

        {/* <Stack.Screen
            name="Signup"
            component={SignupScreen}
            // options={{headerShown: false}}
            options={{
              title: 'Signup',

              headerBackVisible: false,
              // headerStyle: {
              //   backgroundColor: '#000E28',
              // },
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 30,
              },
              // headerRight: () => <Icons />,
            }}
          /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
