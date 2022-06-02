import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Menu = () => {
  return (
    <View>
      <View style={{}}>
        <ImageBackground
          source={require('../../Images/logo.png')}
          style={{
            height: 250,
            width: 260,
          }}></ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    // height: 75,
    flexDirection: 'row',
    // paddingTop: 25,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    // alignSelf: 'center',
  },
});
export default Menu;
