import {Input, Item, Label, Icon} from 'native-base';
import React, {PureComponent} from 'react';
import {InputStyles} from '../styles/inputStyles';
interface IPropsForInput {
  value: string;
  onInputChange: (userName: string) => void;
  label?: string;
  icon?: boolean;
  iconName?: string;
}
export class CustomInput extends PureComponent<IPropsForInput> {
  render() {
    const {value, onInputChange, label, icon, iconName} = this.props;
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
        {icon && <Icon active name={iconName} />}
      </Item>
    );
  }
}

export default CustomInput;
