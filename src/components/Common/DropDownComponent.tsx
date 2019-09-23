import * as React from "react";

export interface Props {
    optValue?: string;
}
export interface State {}

export class OptionComponent extends React.Component<Props, State> {
    render() {
      return <option value={this.props.optValue}>{this.props.optValue}</option>;
    }
  }