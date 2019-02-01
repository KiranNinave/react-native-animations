//note Native driver works with transform and opacity animation it not works with layout animation like width and height

//usually animation runs on javascript thread by using native driver it will run on native size i.e android and ios side

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
      toValue: 300,
      duration: 350,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start();
    });
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
