import {StyleSheet} from 'react-native';
import {config} from './rootStyleConfig';

export const InputStyles = StyleSheet.create({
  inputColor: {
    color: config.lightText,
  },
  errorText: {
    textAlign: 'left',
    fontSize: config.smallFont,
    color: 'rgb(255,0,0)',
  },
});
