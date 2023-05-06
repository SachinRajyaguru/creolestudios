import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput, Alert} from 'react-native';
import {getUser} from '../../util/UserStorage';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/slices/user-slices';

const LoginScreen = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    // TODO: call api to login
    // navigation.navigate('RegisterScreen');

    const user = await getUser();

    if (user.username === username && password === user.password) {
      dispatch(login(user));
    } else {
      Alert.alert('Login Details', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleSubmit} />
        <Button
          title="Register"
          onPress={() => navigation.navigate('RegisterScreen')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    margin: 8,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
  },
  form: {},
});

export default LoginScreen;
