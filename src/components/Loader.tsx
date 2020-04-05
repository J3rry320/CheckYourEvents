import React, {PureComponent} from 'react';
import {Spinner, Container} from 'native-base';

export class Loader extends PureComponent<{color: string}> {
  render() {
    const {color} = this.props;
    return (
      <Container>
        <Spinner color={color} />
      </Container>
    );
  }
}

export default Loader;
