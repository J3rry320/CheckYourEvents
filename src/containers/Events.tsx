import React, {PureComponent} from 'react';
import {Text, View} from 'native-base';
import {helper} from '../utils/helper';

export class Events extends PureComponent {
  componentDidMount() {
    console.log(helper._retrieveData('userName'));
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Events;
