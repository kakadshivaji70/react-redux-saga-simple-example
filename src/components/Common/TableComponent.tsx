import * as React from "react";
import { Component } from "react";

export interface Props {
  tableValue?: Array<any>;
  headersValue?: Array<string>;
  //selectData?:
}
export interface State {}
export class TableComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  handleRowClick(prd: any) {
    // this.props.handleRowClick(prd);
  }
  render() {
    // console.log(this.props);
    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {this.props.headersValue &&
              this.props.headersValue.map((v, i) => <td key={i}>{v}</td>)}
          </tr>
        </thead>
        <tbody>
          {this.props.tableValue &&
            this.props.tableValue.map((v, i) => (
              <tr key={i} onClick={() => this.handleRowClick(v)}>
                {this.props.headersValue &&
                  this.props.headersValue.map((h, j) => (
                    <td key={j}>{v[h]}</td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}
