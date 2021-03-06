import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback
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
      toValue: 360,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      });
    });
  };

  render() {
    const rotationInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
    });

    const animatedStyles = {
      transform: [
        {
          rotate: rotationInterpolate
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
