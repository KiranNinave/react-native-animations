import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Easing
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 250,
      duration: 1500,
      // easing: Easing.back(5)
      // easing: Easing.elastic(3)
      // easing: Easing.bounce
      easing: Easing.bezier(0.5, 1, 0.86, 0.5)
    }).start();
  };

  render() {
    const animatedStyles = {
      transform: [
        {
          translateY: this.state.animation
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
    backgroundColor: "#F5FCFF",
    width: 150,
    height: 150,
    backgroundColor: "grey"
  }
});
