/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
export default function withGestureHandler(WrappedComponent: any) {
  return class extends React.PureComponent {
    onSwipeLeft(gestureState: any) {
      //@ts-ignore
      this.props.navigation.navigate('Tracker');
    }

    onSwipeRight(gestureState: any) {
      //@ts-ignore
      this.props.navigation.navigate('Event');
    }

    render() {
      const config = {
        velocityThreshold: 0.1,
        directionalOffsetThreshold: 100,
      };
      // Wraps the input component in a container, without mutating it. Good!
      return (
        <GestureRecognizer
          onSwipeLeft={(state) => this.onSwipeLeft(state)}
          onSwipeRight={(state) => this.onSwipeRight(state)}
          config={config}>
          <WrappedComponent {...this.props} />
        </GestureRecognizer>
      );
    }
  };
}
