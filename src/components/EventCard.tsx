/* eslint-disable prettier/prettier */
import {Button, Card, CardItem, Icon, Left, Right, Text} from 'native-base';
import React, {PureComponent} from 'react';
import {Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

interface IEventCardProps {
  eventData: CheckEventsTypes.EventType[];
}

export class EventCard extends PureComponent<IEventCardProps> {
  renderCard = (data: CheckEventsTypes.EventType) => (
    <Card style={{marginHorizontal: 30}}>
      <CardItem>
        <ScrollView bounces alwaysBounceHorizontal horizontal>
          {data.eventImages?.map((ele) => (
            <Image
              source={{
                uri: ele,
              }}
              style={{height: 200, width: 200, flex: 0.25, margin: 10}}
            />
          ))}
        </ScrollView>
      </CardItem>
      <CardItem cardBody>
        <Left>
          <Text>{data.eventName}</Text>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Text>{data.eventData?.address.locationName}</Text>
          <Text>{`${data.eventData?.timeBegins} - ${data.eventData?.timeEnds}`}</Text>
        </Left>
        <Right>
          <Button>
            <Icon name="heart" />
          </Button>
        </Right>
      </CardItem>
    </Card>
  );

  render() {
    console.log('I am called');
    const {eventData} = this.props;
    return (
      //   <Text>Hey</Text>

      <ScrollView>
        {eventData.map((data) => {
          return this.renderCard(data);
        })}
      </ScrollView>
    );
  }
}

export default EventCard;
