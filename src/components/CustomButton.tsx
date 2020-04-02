import React, {PureComponent} from 'react';
import {Button, Text} from 'native-base';
import {ButtonStyles} from '../styles/buttonStyles';
interface IButtonProps {
  onClick: () => void;
  text: string;
  type?: [];
}
export class CustomButton extends PureComponent<IButtonProps> {
  render() {
    const {text, onClick} = this.props;
    return (
      <Button light rounded onPress={onClick}>
        <Text style={ButtonStyles.text}>{text}</Text>
      </Button>
    );
  }
}

export default CustomButton;
