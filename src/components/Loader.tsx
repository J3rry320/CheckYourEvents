import {Spinner, View, Text} from 'native-base';
import React, {PureComponent} from 'react';
import {loaderStyles} from '../styles/loaderStyles';

export class Loader extends PureComponent<{color: string; text: string}> {
  render() {
    const {color, text} = this.props;
    return (
      <View style={loaderStyles.parent}>
        <Spinner color={color} />
        <Text style={loaderStyles.text}>{text}</Text>
      </View>
    );
  }
}

export default Loader;
