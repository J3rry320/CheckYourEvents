import React, {PureComponent} from 'react';
import {Card, CardItem, Left, Thumbnail, Right, Text} from 'native-base';
interface IPropsForTrackedCards {
  eventData: CheckEventsTypes.Events;
}
export class TrackedCards extends PureComponent<IPropsForTrackedCards> {
  render() {
    const {eventData} = this.props;
    return (
      <Card>
        <CardItem cardBody>
          <Left>
            <Thumbnail source={{uri: eventData.thumbnail}} />
          </Left>
          <Right>
            <Text>{eventData.eventName}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default TrackedCards;
