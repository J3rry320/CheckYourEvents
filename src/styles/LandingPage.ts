import {StyleSheet} from 'react-native';
import {config} from './rootStyleConfig';

export const LandingPageStyle = StyleSheet.create({
  parent: {
    backgroundColor: config.darkBg,
    paddingHorizontal: 20,
  },
  headerText: {
    color: config.lightText,
    fontSize: config.largeFont,
    fontWeight: 'bold',
    marginVertical: 70,
    letterSpacing: 2,
    textAlign: 'justify',
  },
  marginForButton: {
    marginVertical: 20,
    paddingHorizontal: 30,
  },
});
