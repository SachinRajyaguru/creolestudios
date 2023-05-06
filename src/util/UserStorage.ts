import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = 'user';

export const setUser = async (user: any) => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error('Error setting user:', error);
  }
};

export const getUser = async () => {
  try {
    const userString = await AsyncStorage.getItem(USER_KEY);
    if (typeof userString === 'string') {
      return JSON.parse(userString);
    }
    return null;
  } catch (error) {
    console.error('Error getting user:', error);
  }
};
