import {Input, Item, Label} from 'native-base';
import React, {PureComponent} from 'react';
import {InputStyles} from '../styles/inputStyles';
interface IPropsForInput {
  value: string;
  onInputChange: (userName: string) => void;
  label?: string;
}
export class CustomInput extends PureComponent<IPropsForInput> {
  render() {
    const {value, onInputChange, label} = this.props;
    return (
      <Item bordered floatingLabel>
        <Label>{label || ''}</Label>
        <Input
          // @ts-ignore
          error
          underlineColorAndroid="#fff"
          style={InputStyles.inputColor}
          onChangeText={onInputChange}
          value={value}
        />
      </Item>
    );
  }
}

export default CustomInput;
