import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
export default function withGestureHandler(WrappedComponent: any) {
  return class extends React.Component {
    componentDidUpdate(prevProps: any) {
      console.log('Current props: ', this.props);
      console.log('Previous props: ', prevProps);
    }
    onSwipeLeft(gestureState: any) {
      this.setState({myText: 'You swiped left!'});
      console.log('Fuck Me right');
    }

    onSwipeRight(gestureState: any) {
      console.log('Fuck Me right');
    }

    render() {
      const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
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
