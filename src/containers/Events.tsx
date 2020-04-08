/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text} from 'native-base';
import React, {PureComponent} from 'react';
import CustomButton from '../components/CustomButton';
import {EventCard} from '../components/EventCard';
import {helper} from '../utils/helper';
import * as EventHelperData from '../helperData.json';
import {connect} from 'react-redux';
import withGestureHandler from '../components/GestureRecogniser';
var flow = require('lodash.flow');
interface IEventPageProps {
  navigation: any;
}
export class Events extends PureComponent<IEventPageProps> {
  componentDidMount() {
    console.log(helper._retrieveData('userName'));
  }

  render() {
    const {navigation} = this.props;
    console.warn('Events', this.props);
    return (
      <View>
        <EventCard eventData={EventHelperData.events} />
        <CustomButton
          text="Log Out"
          onClick={async () => {
            (await helper._deleteData('userName')) &&
              navigation.navigate('LandingPage');
          }}
        />
      </View>
    );
  }
}
function mapStateToProps(state: CheckEventsTypes.IRootReducer) {
  return {
    events: state.user,
  };
}

export default flow([connect(mapStateToProps, null), withGestureHandler])(
  Events,
);
