import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, RegisterScreen} from '../screens';
import BottomTabs from './BottomTabs';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const {loggedIn, username} = useSelector(state => state.user);

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          {!loggedIn ? (
            <Stack.Group
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </Stack.Group>
          ) : (
            <>
              <Stack.Screen
                name="BottomTabs"
                component={BottomTabs}
                options={{
                  title: 'Hello, ' + username,
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
