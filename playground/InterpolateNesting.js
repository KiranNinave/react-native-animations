import React from "react";
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 2,
        duration: 500
      }).start();
    });
  };
  render() {
    const translateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 300, 0]
    });
    const opacityInterpolate = translateInterpolate.interpolate({
      inputRange: [0, 300], //parent output range is now input range
      outputRange: [1, 0.5]
    });
    const animatedStyles = {
      transform: [
        {
          translateY: translateInterpolate
        }
      ],
      opacity: opacityInterpolate
    };
    return (
      <View style={style.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[style.box, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "grey"
  }
});
