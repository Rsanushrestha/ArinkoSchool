import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import React, {useState, useContext} from 'react';
import {AuthContext} from '../Context/AuthContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = props => {
  const {navigation} = props;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isloading, login} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Spinner visible={isloading} />
      <Text style={styles.login}>ARNIKO {'\n'}International Academy</Text>
      <Text style={styles.txt}>
        Enter your email and {'\n'}password to log in.
      </Text>
      <View>
        <TextInput
          style={styles.input}
          value={email}
          placeholder={'Email address'}
          onChangeText={text => setEmail(text)}
          placeholderTextColor="#637381"
          fontFamily="Public Sans"
          color="white"
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder={'Password'}
          onChangeText={text => setPassword(text)}
          placeholderTextColor="#637381"
          fontFamily="Public Sans"
          secureTextEntry={true}
          color="white"
        />
      </View>
      <View style={styles.touch}>
        <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
          <Text style={styles.forget}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            login(email, password);
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',

              textAlign: 'center',

              padding: 13,
            }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.account}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signup}>Sign up now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#000E28',
  },
  login: {
    fontSize: 30,
    fontFamily: 'Prompt',
    fontWeight: 'bold',
    color: 'white',
    left: 15,
    height: 80,
  },
  txt: {
    fontSize: 18,
    fontFamily: 'Prompt',
    color: 'white',
    lineHeight: 30,
    height: 60,
    margin: 15,
  },
  forget: {
    fontFamily: 'Public Sans',
    fontSize: 18,
    borderBottomColor: '#00AB55',
    borderBottomWidth: 1,
    color: '#00AB55',
    // height: 25,

    // textAlign: 'right',
    margin: 10,
  },
  btn: {
    backgroundColor: '#00AB55',
    height: 45,
    margin: 15,
    borderRadius: 7,
  },
  account: {
    fontFamily: 'Public Sans',
    fontSize: 16,
    color: 'white',
  },
  signup: {
    fontFamily: 'Public Sans',
    fontSize: 16,
    color: '#00AB55',
    borderBottomColor: '#00AB55',
    borderBottomWidth: 1,
    left: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 190,
  },
  input: {
    borderColor: '#637381',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 7,
    margin: 7,
    padding: 10,
  },
  touch: {
    alignItems: 'flex-end',
    height: 50,
    width: 350,
  },
});

export default LoginScreen;
