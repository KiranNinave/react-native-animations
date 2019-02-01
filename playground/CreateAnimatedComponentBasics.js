import React, { Component } from "react";
import { StyleSheet, View, Animated, Button } from "react-native";

const AnimatedButton = Animated.createAnimatedComponent(Button);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1)
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1500
      }).start();
    });
  };

  render() {
    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: ["grey", "black"]
    });
    const animatedStyles = {
      color: colorInterpolation
    };
    return (
      <View style={styles.container}>
        <AnimatedButton
          title="Press me!"
          {...animatedStyles}
          onPress={this.startAnimation}
        />
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
    backgroundColor: "#F5FCFF",
    width: 150,
    height: 150,
    backgroundColor: "grey"
  }
});
