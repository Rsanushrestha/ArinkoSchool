import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View, Dimensions} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../Context/AuthContext';
import Menu from './Menu';
import BackgroundImage from './BackgroundImage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          opacity: 0.2,
          justifyContent: 'center',
          alignSelf: 'center',
          // marginBottom: 250,
        }}>
        <BackgroundImage />
      </View>
      {/* <Spinner visible={isLoading} /> */}
      <View>{/* <Text>Welcome </Text> */}</View>
      {/* <Button title="Logout" color="red" onPress={logout} /> */}
      <View>
        <Menu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 5,
    // width: windowWidth,
    // backgroundColor: 'black',
  },
  welcome: {
    fontSize: 18,
    // marginBottom: 250,
    color: 'red',
  },
});

export default HomeScreen;
