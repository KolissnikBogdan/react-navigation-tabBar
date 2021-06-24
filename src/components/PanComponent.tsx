import React from 'react';
import {
  PanResponder,
  Animated,
  Dimensions,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native';

interface ISearchBarState {
  show: boolean;
}

interface ISearchBarProps {}

const defaultCoords = { x: 0, y: -50 };

class PanComponent extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      show: false,
    };
  }

  pan: any = new Animated.ValueXY(defaultCoords);
  fadeAnim: Animated.Value = new Animated.Value(0);

  show = () => {
    const open = () => {
      this.setState({ show: true }, () => {
        Animated.parallel([
          Animated.spring(this.pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }),
          Animated.spring(this.fadeAnim, {
            toValue: 1,
            useNativeDriver: false,
          }),
        ]).start();
      });
    };

    if (this.state.show) {
      this.hide(() => {
        open();
      });
    } else {
      open();
    }
  };

  onPanResponderRelease = (e: GestureResponderEvent, gestureState: any) => {
    if (gestureState.dx > Dimensions.get('window').width / 1.5) {
      this.hide();
    } else {
      Animated.spring(this.pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start(() => {
        this.pan.setValue({
          x: 0,
          y: 0,
        });
        this.pan.extractOffset();
      });
    }
  };

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return gestureState.dx !== 0 && gestureState.dy !== 0;
    },
    onMoveShouldSetPanResponderCapture: (_, gestureState) => {
      return gestureState.dx !== 0 && gestureState.dy !== 0;
    },
    onPanResponderGrant: () => {
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value,
      });
      this.pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: (e, gestureState) => {
      Animated.event([null, { dx: this.pan.x }], {
        useNativeDriver: false,
      })(e, gestureState);
    },
    onPanResponderRelease: this.onPanResponderRelease,
  });

  hide = (callback = () => {}) => {
    Animated.parallel([
      Animated.timing(this.pan, {
        toValue: { x: this.pan.x._value, y: -50 },
        duration: 150,
        useNativeDriver: false,
      }),
      Animated.timing(this.fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }),
    ]).start(() => {
      this.setState({ show: false }, () => {
        this.pan.setValue(defaultCoords);
        callback();
      });
    });
  };

  render() {
    return (
      <>
        {this.state.show ? (
          <Animated.View
            style={{
              ...styles.container,
              opacity: this.fadeAnim,
              transform: [
                { translateX: this.pan.x },
                { translateY: this.pan.y },
              ],
            }}
            {...this.panResponder.panHandlers}
          >
            {this.props.children}
          </Animated.View>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 25,
    zIndex: 100,
  },
  childrenContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 4,
  },
});

export default PanComponent;
