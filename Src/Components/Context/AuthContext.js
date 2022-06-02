import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect} from 'react';
import {Base_URL} from '../../config';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const login = (email, password) => {
    // setIsLoading(true);
    axios
      .post(`${Base_URL}/login-custom`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        // setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        // setIsLoading(false);
      });
  };
  const logout = () => {
    console.log('Logout');
    // setIsLoading(true);
    setUserInfo(null);

    // AsyncStorage.removeItem('userInfo', JSON.stringify(userInfo.token));
  };

  // const isLoggedIn = async () => {
  //   try {
  //     setSplashLoading(true);

  //     let userInfo = await AsyncStorage.getItem('userInfo');
  //     userInfo = JSON.parse(userInfo);

  //     if (userInfo) {
  //       setUserInfo(userInfo);
  //     }

  //     setSplashLoading(false);
  //   } catch (e) {
  //     setSplashLoading(false);
  //     console.log(`is logged in error ${e}`);
  //   }
  // };
  // useEffect(() => {
  //   isLoggedIn();
  // }, []);
  return (
    <AuthContext.Provider
      value={{
        // isLoading,
        userInfo,
        // splashLoading,S
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
