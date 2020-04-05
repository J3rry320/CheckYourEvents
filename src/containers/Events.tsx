import {View, Text} from 'native-base';
import React, {PureComponent} from 'react';
import CustomButton from '../components/CustomButton';
import {EventCard} from '../components/EventCard';
import {helper} from '../utils/helper';
import * as EventHelperData from '../helperData.json';
interface IEventPageProps {
  navigation: any;
}
export class Events extends PureComponent<IEventPageProps> {
  componentDidMount() {
    console.log(helper._retrieveData('userName'));
  }
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>Hey MotherFucker</Text>
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

export default Events;
