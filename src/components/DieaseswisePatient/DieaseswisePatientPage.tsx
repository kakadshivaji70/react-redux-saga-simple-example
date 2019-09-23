import * as React from "react";
import { connect } from "react-redux";
import { dieaseswisePatientListRequestStartAction } from "../../action/index";
import { CountrywiseDieases } from "../../Models/CountrywiseDieases";
import { PatientDataModel } from "../../Models/PatientDataModel";
import { TableComponent } from "../Common/TableComponent";
import { OptionComponent } from "../Common/DropDownComponent";

interface Props {
  dieaseswisePatientsCollection: PatientDataModel[];
  getDieasesPatientData: (dieases: string, counties:string) => void;
}
export interface PatientDetails {
  counties: string;
  dieases: string;
  dieasesList: Array<string>,
  countryList: Array<string>;
  patients: Array<CountrywiseDieases>;
  [key: string]: any;
}

class DieaseswisePatient extends React.Component<Props, PatientDetails> {
  state: PatientDetails = {
    counties: "",
    dieases: "",
    patients: new Array<CountrywiseDieases>(),
    dieasesList: ["Maleria", "Dengue", "Cancer", "Flue"],
    countryList: ["India", "USA", "Japan", "China"]
  };
  constructor(props: Props) {
    super(props);   
  }
  // common change method for all editable elements
  handleChange = (
    evt:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    // reading name of the element
    const name = evt.target.name as string;
    // the State Object that will be used to read new Value default is empty
    const newValue: Partial<PatientDetails> = {};
    // set the new value based on value entered in target element
    newValue[name] = evt.target.value;
    // finally set state
    this.setState({newValue});
    this.setState({
      counties: evt.target.value,
     });
    //fill patientdatamodel to from json to show in table
    this.props.getDieasesPatientData(this.state.dieases,evt.target.value);
  };

  handleDieasesChange =(
    evt:React.ChangeEvent<HTMLSelectElement>
  )=>{
    if(evt.target.value==""){
      alert("Please select Dieases");
      this.setState({
        dieases: evt.target.value,
       });
       
      return;
    }
    this.setState({
      dieases: evt.target.value,
     });
     this.props.getDieasesPatientData(evt.target.value,this.state.counties);
  };

  render() {
    const headerList = ["PatientNumber", "PatientName", "Gender", "State"];

    return (
      <div className="container">
        <h3>Dieaseswise Patient Details</h3>
        <div className="form-group">
          <div className="col-lg-2"> Select Dieases</div>
          <div className="col-lg-4">
            <select
              className="form-control"
              value={this.state.dieases}
              name="dieases"
              onChange={this.handleDieasesChange}
            >
              <option value="">Select Dieases</option>
              {this.state.dieasesList.map((v, i) => (
                <OptionComponent key={i} optValue={v} />
              ))}
            </select>
          </div>
          <div className="col-lg-2"> Select country</div>
          <div className="col-lg-4">
            <select
              className="form-control"
              value={this.state.counties}
              name="counties"
              onChange={this.handleChange}
            >
              <option value="">Select Country</option>
              {this.state.countryList.map((v, i) => (
                <OptionComponent key={i} optValue={v} />
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div>
             { <TableComponent headersValue={headerList} 
            tableValue={this.props.dieaseswisePatientsCollection} /> }           
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: PatientDetails) => ({
  dieaseswisePatientsCollection: state.PatientCollectionState.dieseswisePatient
});

const mapDispatchToProps = dispatch => ({
  getDieasesPatientData: (dieases: string,counties:string) =>
    dispatch(dieaseswisePatientListRequestStartAction(dieases,counties))
});

export const DieaseswisePatientsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DieaseswisePatient);

