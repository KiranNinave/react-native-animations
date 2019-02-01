//this thing is ideal for mounting and unmounting of components

import React from "react";
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(1),
    visible: true
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 2000
    }).start(({ finished }) => {
      setTimeout(() => {
        //this thing will tick for every animated frame in other words , this thing will interrupt our animation for every change in value
        if (finished) {
          this.setState({ visible: false });
        } else {
          Animated.spring(this.state.animation, {
            toValue: 1
          }).start();
        }
      }, 0);
    });
  };

  render() {
    const transforInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 0]
    });

    const animatedStyles = {
      transform: [
        {
          translateY: transforInterpolation
        }
      ],
      opacity: this.state.animation
    };
    return (
      <View style={style.container}>
        {this.state.visible && (
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[style.box, animatedStyles]} />
          </TouchableWithoutFeedback>
        )}
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
