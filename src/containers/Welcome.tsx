import {View} from 'native-base';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from '../components/Loader';
import {helper} from '../utils/helper';

// import {Dispatch} from 'redux';
interface IWelcomeProps {
  navigation: any;
}
export class Welcome extends Component<IWelcomeProps> {
  async componentDidMount() {
    const {navigation} = this.props;
    (await helper._retrieveData('userName'))
      ? navigation.navigate('Event')
      : navigation.navigate('LandingPage');
  }
  render() {
    return (
      <View>
        <Loader text="Give us a moment" color="red" />
      </View>
    );
  }
}

const mapStateToProps = (state: CheckEventsTypes.IRootReducer) => ({
  user: state.user,
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     checkUser:
// });

export default connect(mapStateToProps, null)(Welcome);
