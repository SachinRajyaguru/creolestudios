import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUser} from '../../util/UserStorage';
import {login} from '../../redux/slices/user-slices';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    // TODO: call api to register

    const user = {
      username,
      email,
      password,
    };

    try {
      await setUser(user);
      dispatch(login(user));
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Button title="Register" onPress={handleSubmit} />
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
  form: {},
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
});

export default RegisterScreen;
