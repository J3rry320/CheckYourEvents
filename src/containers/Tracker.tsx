import React, {PureComponent} from 'react';
import withGestureHandler from '../components/GestureRecogniser';
import {connect} from 'react-redux';
import EventCard from '../components/EventCard';
import * as EventHelperData from '../helperData.json';
const flow = require('lodash.flow');
export class Tracker extends PureComponent {
  componentDidMount() {}

  render() {
    console.warn(this.props);
    return <EventCard eventData={EventHelperData.events} />;
  }
}
function mapStateToProps(state: CheckEventsTypes.IRootReducer) {
  return {
    events: state.user,
  };
}

export default flow([connect(mapStateToProps, null), withGestureHandler])(
  Tracker,
);
