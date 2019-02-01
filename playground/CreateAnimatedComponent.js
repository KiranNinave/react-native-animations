//this contains bug 

import React, { Component } from "react";
import { StyleSheet, View, Animated, Button } from "react-native";

const AnimatedButtonComponentHelper = Animated.createAnimatedComponent(Button);

class AnimatedButtonComponent extends Component {
  setNativeProps = props => {
    console.log(this.button);
    this.button.setNativeProps(props);
  };

  render() {
    return (
      <AnimatedButtonComponentHelper
        title="Press me!"
        ref={ref => {
          this.button = ref;
        }}
        onPress={this.props.onPress}
      />
    );
  }
}
const AnimatedButton = Animated.createAnimatedComponent(
  AnimatedButtonComponent
);

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(1)
  };

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
        <AnimatedButton {...animatedStyles} onPress={this.startAnimation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
