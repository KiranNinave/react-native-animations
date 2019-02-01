import React from "react";
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";

export default class App extends React.Component {
  state = {
    color: new Animated.Value(0),
    scale: new Animated.Value(1)
  };
  startAnimation = () => {
    //it applye the delay
    Animated.stagger(1500, [
      Animated.timing(this.state.color, {
        toValue: 1,
        duration: 500
      }),
      Animated.timing(this.state.scale, {
        toValue: 2,
        duration: 500
      })
    ]).start();
  };
  render() {
    const colorInterpolation = this.state.color.interpolate({
      inputRange: [0, 1],
      outputRange: ["grey", "black"]
    });
    const animatedStyles = {
      transform: [
        {
          scale: this.state.scale
        }
      ]
    };
    return (
      <View style={style.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[
              style.box,
              animatedStyles,
              { backgroundColor: colorInterpolation }
            ]}
          />
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
