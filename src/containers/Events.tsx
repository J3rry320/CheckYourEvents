/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text} from 'native-base';
import React, {PureComponent} from 'react';
import CustomButton from '../components/CustomButton';
import {EventCard} from '../components/EventCard';
import {helper} from '../utils/helper';

import {connect} from 'react-redux';
import withGestureHandler from '../components/GestureRecogniser';
import {ScrollView} from 'react-native-gesture-handler';
import {Dispatch} from 'redux';
import {getEvents} from '../store/actions/eventsActions';
var flow = require('lodash.flow');
interface IEventPageProps {
  navigation: any;
  events: CheckEventsTypes.IEventReducer;
  getEvents: () => void;
}
// TODO Better Designs. Also make the localstorage store tracked events for the user
export class Events extends PureComponent<IEventPageProps> {
  componentDidMount() {
    this.props.getEvents();
    console.log(helper._retrieveData('userName'));
  }

  render() {
    const {navigation, events} = this.props;
    console.warn('Events', this.props);
    return (
      <ScrollView>
        <EventCard eventData={events.events} />
        <CustomButton
          text="Log Out"
          onClick={async () => {
            (await helper._deleteData('userName')) &&
              navigation.navigate('LandingPage');
          }}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = (state: CheckEventsTypes.IRootReducer) => ({
  events: state.event,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getEvents: () => dispatch(getEvents()),
});
export default flow([
  connect(mapStateToProps, mapDispatchToProps),
  withGestureHandler,
])(Events);
