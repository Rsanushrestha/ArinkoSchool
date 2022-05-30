// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState, useContext} from 'react';
// import {AuthContext} from '../Context/AuthContext';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const SignupScreen = props => {
//   const {navigation} = props;
//   const [name, setName] = useState(null);
//   const [lastname, setLastName] = useState(null);

//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);
//   const {register} = useContext(AuthContext);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.signup}>Sign up</Text>
//       <Text style={styles.txt}>
//         Enter your basic information. It{'\n'} only takes a minute.
//       </Text>
//       <View>
//         <TextInput
//           style={styles.input}
//           value={name}
//           placeholder={'First name'}
//           placeholderTextColor="white"
//           fontFamily="Public Sans"
//           color="white"
//         />
//         <TextInput
//           style={styles.input}
//           value={lastname}
//           placeholder={'Last name'}
//           placeholderTextColor="white"
//           fontFamily="Public Sans"
//           color="white"
//         />

//         <TextInput
//           style={styles.input}
//           value={password}
//           placeholder={'Password'}
//           placeholderTextColor="white"
//           fontFamily="Public Sans"
//           color="white"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder={'Re-enter password'}
//           placeholderTextColor="white"
//           fontFamily="Public Sans"
//           color="white"
//         />
//       </View>

//       <Text style={styles.help}>
//         Helps us recommend more relevant content and events
//       </Text>

//       <TouchableOpacity
//         onPress={() => {
//           register(name, lastname, email, password);
//         }}
//         style={styles.signupbtn}>
//         <Text style={styles.signuptxt}>Sign up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SignupScreen;

// const styles = StyleSheet.create({
//   container: {
//     height: windowHeight,
//     width: windowWidth,
//     backgroundColor: '#000E28',
//   },
//   signup: {
//     fontSize: 30,
//     fontFamily: 'Prompt',
//     fontWeight: 'bold',
//     color: 'white',
//     left: 15,
//     height: 40,
//   },
//   txt: {
//     fontSize: 15,
//     fontFamily: 'Prompt',
//     color: 'white',
//     lineHeight: 30,
//     height: 55,
//     margin: 10,
//   },
//   input: {
//     borderColor: '#637381',
//     borderWidth: 1,
//     marginHorizontal: 10,
//     borderRadius: 7,
//     margin: 6,
//     padding: 10,
//   },
//   horizontal: {
//     flexDirection: 'row',
//   },
//   code: {
//     borderColor: '#637381',
//     borderWidth: 1,
//     marginHorizontal: 10,
//     borderRadius: 7,
//     margin: 7,
//     width: 80,
//     padding: 8,
//   },
//   number: {
//     borderColor: '#637381',
//     borderWidth: 1,
//     marginHorizontal: 10,
//     borderRadius: 7,
//     margin: 7,
//     width: 240,
//     padding: 8,
//   },
//   help: {
//     color: 'white',
//     margin: 5,
//   },
//   signupbtn: {
//     // width: windowWidth,
//     marginHorizontal: 10,
//     height: 50,
//     backgroundColor: '#00AB55',
//     // borderColor: '#00AB55',
//     // borderWidth: 1,

//     borderRadius: 7,
//   },
//   signuptxt: {
//     color: 'black',
//     padding: 12,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });
