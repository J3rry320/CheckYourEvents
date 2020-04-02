/* eslint-disable prettier/prettier */
import {Container} from 'native-base';
import React, {PureComponent} from 'react';
import CustomInput from '../components/Input';
import {addUser} from '../store/actions/userActions';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

// Write the logic for dispatching an action which updates the store.
export class Welcome extends PureComponent {
  state = {
    userName: '',
  };
  render() {
    const {userName} = this.state;
    return (
      <Container>
        {/* <Header /> */}
        <CustomInput
          value={userName}
          onInputChange={inputName => {
            this.setState({
              userName: inputName,
            });
          }}
          label="Enter user name"
        />
      </Container>
    );
  }
}
function mapStateToProps(state: CheckEventsTypes.IRootReducer) {
  return {
    user: state.user,
  };
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addUser: (userName: string) => dispatch(addUser(userName)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
