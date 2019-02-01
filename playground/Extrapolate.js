import React from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(1)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 3,
      duration: 500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0.5,
        duration: 500
      }).start();
    });
  };
  render() {
    const sizeInterpolation = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: [1, 2]
      // extrapolate: "identity", //it will analyse next values
      // extrapolate: "clamp", //it will stop extending
      // extrapolateLeft: "clamp", //stop extending left values
      // extrapolateRight: "clamp" //stop extending right values
    });
    const animatedStyles = {
      transform: [
        {
          scale: sizeInterpolation
        }
      ]
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
