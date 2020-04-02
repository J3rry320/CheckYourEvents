/* eslint-disable prettier/prettier */
import {Container, Text, View} from 'native-base';
import React, {PureComponent} from 'react';
import CustomInput from '../components/Input';
import {addUser} from '../store/actions/userActions';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {LandingPageStyle} from '../styles/LandingPage';
import CustomButton from '../components/CustomButton';
import {validateString} from '../utils/validate';
import {InputStyles} from '../styles/inputStyles';
import {helper} from '../utils/helper';
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
    error: false,
  };
  componentDidMount() {
    const {navigation} = this.props;
    helper._retrieveData('user') && navigation.navigate('Event');
  }
  handleInputChange = (inputName: string) => {
    this.setState({
      userName: inputName,
      error: false,
    });
  };
  handleClick = () => {
    const {userName, error} = this.state;
    const {navigation, addUser} = this.props;
    if (validateString(userName) && !error) {
      addUser(userName);
      navigation.navigate('Event');
    } else {
      this.setState({error: true});
    }
  };
  render() {
    const {userName, error} = this.state;
    return (
      <Container style={LandingPageStyle.parent}>
        <Text style={LandingPageStyle.headerText}>
          So What's the {'\n'}plan today?
        </Text>
        <CustomInput
          value={userName}
          onInputChange={this.handleInputChange}
          label="Enter user name"
        />
        {error && <Text style={InputStyles.errorText}>Wrog Input</Text>}
        <View style={LandingPageStyle.marginForButton}>
          <CustomButton text="Sign Up" onClick={this.handleClick} />
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
