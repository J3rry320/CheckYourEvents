import {Container, Input, Item, Label} from 'native-base';
import React, {PureComponent} from 'react';
interface IPropsForInput {
  value: string;
  onInputChange: (userName: string) => void;
  label?: string;
}
export class CustomInput extends PureComponent<IPropsForInput> {
  render() {
    const {value, onInputChange, label} = this.props;
    return (
      <Container>
        <Item floatingLabel>
          <Label>{label || ''}</Label>
          <Input onChangeText={onInputChange} value={value} />
        </Item>
      </Container>
    );
  }
}

export default CustomInput;
