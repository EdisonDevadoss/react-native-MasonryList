import React, { Component } from "react";
import MasonryList from "react-native-masonry-list";
import data from "./data";

export default class App extends Component<Props> {
  onPressImage = value => {
    console.warn(value);
  };
  render() {
    return (
      <MasonryList sorted onPressImage={this.onPressImage} images={data} />
    );
  }
}
