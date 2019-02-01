import React, { Component } from "react";
import { StyleSheet, Animated, ScrollView } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1)
    };
  }

  render() {
    this.state.animation.addListener(({ value }) => {
      console.log(value);
    });
    const animatedStyles = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ["grey", "black"]
    });
    return (
      <ScrollView
        scrollEventThrottle={16} //render 16 frames per second
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: this.state.animation
              }
            }
          }
        ])}
        // onScroll = {(e)=>{
        //   this.state.animation.setValue(e.nativeEvent.contentOffset.y);
        // }}
      >
        <Animated.View
          style={[styles.box, { backgroundColor: animatedStyles }]}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F5FCFF",
    height: 3000
  }
});
