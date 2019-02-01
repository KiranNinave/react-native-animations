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
      toValue: 150,
      duration: 300
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 300
      }).start();
    });
  };

  render() {
    const animatedStyles = {
      left: this.state.animation,
      top: this.state.animation,
      right: this.state.animation
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
    // width: 150,
    height: 150,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    backgroundColor: "grey"
  }
});
