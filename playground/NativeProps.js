import React, { Component } from "react";
import { StyleSheet, Animated, ScrollView, Button, View } from "react-native";

export default class App extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  _enable = true;

  handleToggle = () => {
    this._enable = !this._enable;
    this._scrollref.setNativeProps({
      scrollEnabled: this._enable
    });
  };

  render() {
    this.state.animation.addListener(({ value }) => {
      console.log(value);
    });
    const animatedStyles = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ["grey", "black"]
    });
    return (
      <View>
        <Button title="toggle" onPress={this.handleToggle} />
        <ScrollView
          scrollEventThrottle={16} //render 16 frames per second
          ref={scroll => (this._scrollref = scroll)}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F5FCFF",
    height: 3000
  }
});
