import {AsyncStorage, Alert} from 'react-native';

export const helper = {
  _storeData: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
    }
  },
  _retrieveData: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null && value;
    } catch (error) {
      Alert.alert('Oops Something Went Wrong! Clear your app Storage');
    }
  },
};