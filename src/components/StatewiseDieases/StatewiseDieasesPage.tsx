import * as React from "react";
import { connect } from "react-redux";
import { PatientDataModel } from "../../Models/PatientDataModel";
import { TableComponent } from "../Common/TableComponent";

interface Props {
  stateWisePatientsCollection: PatientDataModel[];
}

export interface PatientDetails {
  [key: string]: any;
}

class StatewisePatientsDetails extends React.Component<Props, PatientDetails> {
  state: PatientDetails = {};
  constructor(props: Props) {
    super(props);
  }

  render() {
    const headerList = ["PatientNumber", "PatientName", "Gender", "Maleria", "Dengue",
      "Cancer", "Flue", "State", "Country"];
    return (
      <div className="container">
        <h3>Statewise Patient Details</h3>

        <div className="row">
          <div>
            {<TableComponent headersValue={headerList}
              tableValue={this.props.stateWisePatientsCollection} />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: PatientDetails) => ({
  stateWisePatientsCollection: state.PatientCollectionState.selctedStateData
});
export const StatewisePatientsDetailsContainer = connect(
  mapStateToProps  
)(StatewisePatientsDetails);

