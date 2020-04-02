/* eslint-disable prettier/prettier */
import {Container, Text, View} from 'native-base';
import React, {PureComponent} from 'react';
import CustomInput from '../components/Input';
import {addUser} from '../store/actions/userActions';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {LandingPageStyle} from '../styles/LandingPage';
import CustomButton from '../components/CustomButton';
// import {NavigationState, NavigationS} from '@react-navigation/native';
interface ILandingPageProps {
  user: CheckEventsTypes.IUserReducer;
  addUser: (userName: string) => void;
  navigation: any;
}
// Write the logic for dispatching an action which updates the store.
export class LandingPage extends PureComponent<ILandingPageProps> {
  state = {
    userName: '',
  };
  render() {
    const {userName} = this.state;
    return (
      <Container style={LandingPageStyle.parent}>
        <Text style={LandingPageStyle.headerText}>
          So What's the {'\n'}plan today?
        </Text>
        <CustomInput
          value={userName}
          onInputChange={inputName => {
            this.setState({
              userName: inputName,
            });
          }}
          label="Enter user name"
        />
        <View style={LandingPageStyle.marginForButton}>
          <CustomButton
            text="Sign Up"
            onClick={() => {
              this.props.addUser(userName);
              this.props.navigation.navigate('Event');
            }}
          />
        </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
