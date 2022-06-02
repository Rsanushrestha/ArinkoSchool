import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  });

  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/download.png')}
        style={{
          height: 82,
          width: 250,
          marginTop: 300,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#000E28',
  },
});

export default SplashScreen;
