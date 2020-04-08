import {StyleSheet} from 'react-native';
import {config} from './rootStyleConfig';

export const loaderStyles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '70%',
  },
  text: {
    textAlign: 'center',
    fontSize: config.smallFont,
  },
});
