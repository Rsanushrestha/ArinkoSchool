import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Ico from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from '../Context/AuthContext';

const Icons = () => {
  const {logout} = useContext(AuthContext);

  return (
    <View style={{flexDirection: 'row'}}>
      <Icon
        name="notifications"
        size={25}
        style={{
          color: 'black',
          alignSelf: 'center',
          //   paddingLeft: 15,
          //   paddingRight: 15,
        }}
      />
      <Ico
        onPress={logout}
        name="logout"
        size={25}
        style={{
          color: 'black',
          alignSelf: 'center',
          paddingLeft: 10,
          //   paddingRight: 15,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default Icons;
