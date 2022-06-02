import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import NotificationScreen from './NotificationScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Menu = () => {
  // const {navigation} = props;
  const navigation = useNavigation();
  const [isProfile, setIsProfile] = useState(true);
  const onClickProfile = () => {
    setIsProfile(true);
  };
  const onClickNotification = () => {
    setIsProfile(false);
  };
  return (
    <View style={styles.container}>
      {isProfile ? <ProfileScreen /> : <NotificationScreen />}
      <View style={styles.navbar}>
        <TouchableOpacity style={{}} onPress={onClickNotification}>
          <Icons
            name="notifications-outline"
            size={30}
            style={{
              color: 'black',
            }}></Icons>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{}}>
          <Icon
            name="home"
            size={30}
            style={{
              color: 'black',
            }}></Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClickProfile} style={{borderRadius: 0}}>
          <Image
            source={require('../../Images/logo.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: windowHeight,
    // width: windowWidth,
    // alignSelf: 'center',
    // justifyContent: 'center',

    // shadowColor: '#52006A',
  },
  navbar: {
    // height: 40,
    flexDirection: 'row',
    width: 350,
    marginTop: 590,
    justifyContent: 'space-evenly',
    marginHorizontal: 5,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 5,
    // backgroundColor: 'black',
    // elevation: 40,
    shadowColor: 'black',
  },
});
export default Menu;
