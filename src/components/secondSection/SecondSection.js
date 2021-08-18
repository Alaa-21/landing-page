import React, { Component } from "react";
import ReusableSection from "../reusableSection/ReusableSection";
export default class SecondSection extends Component {
  render() {
    return (
      <ReusableSection
        title="Build up the whole picture"
        paragraph="Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum — semper quis
      lectus nulla at volutpat diam ut venenatis."
      />
    );
  }
}
