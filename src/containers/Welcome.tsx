import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Text} from 'native-base';
// import {Dispatch} from 'redux';

export class Welcome extends Component {
  render() {
    return <Text>Welcome UserName Goes Here </Text>;
  }
}

const mapStateToProps = (state: CheckEventsTypes.IRootReducer) => ({
  user: state.user,
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     checkUser:
// });

export default connect(mapStateToProps, null)(Welcome);
