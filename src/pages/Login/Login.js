import {View, Text, Button, TextInput,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Login.style';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      showMessage({
        message: 'Hello World',
        description: 'MERHABA',
        type: 'success',
      });
      navigation.navigate('BottomTab');
    } catch (err) {
      showMessage({
        message: 'HATA',
        description: 'HATA' + err,
        type: 'danger',
      });
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
<View style={styles.header_container}>
<Icon name="rocket" size={200} color="azure" />
</View>
      <Text>Login</Text>
      
      <View style={styles.input_container}>
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          />
          </View>
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>SignUp</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Login;
