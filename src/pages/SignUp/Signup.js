import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import styles from './Signup.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      showMessage({
        message: 'Hello World',
        description: 'Kullanıcı oluşturuldu',
        type: 'success',
      });

      navigation.navigate('Login');
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
      <Text>Signup</Text>
      <View style={styles.header_container}>
        <Icon name="account" size={200} />
      </View>
      <View style={styles.textinput_container}>
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
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
