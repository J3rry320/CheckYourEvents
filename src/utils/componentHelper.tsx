import React, {Component} from 'react';

// import {} from 'react-native';
import {Thumbnail} from 'native-base';
export function createArray(length: number) {
  return Array(length)
    .fill(null)
    .map((x, i) => i);
}
export class Avatar extends Component {
  render() {
    return <Thumbnail circular source={{uri: ''}} square />;
  }
}
