import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/slices/user-slices';
const ProfileScreen = () => {
  const {loggedIn, username} = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>You want to logout {username}</Text>
      <Button
        onPress={() => {
          dispatch(logout());
        }}
        title="Logout"
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
