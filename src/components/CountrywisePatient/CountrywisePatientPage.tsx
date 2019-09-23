import * as React from "react";
import { connect } from "react-redux";
import { patientListByCountryRequestStartAction } from "../../action/index";
import { PatientDataModel } from "../../Models/PatientDataModel";
import { TableComponent } from "../Common/TableComponent";
import { OptionComponent } from "../Common/DropDownComponent";

interface Props {
  patientsDetailsCollection: PatientDataModel[];
  selectCountry: (country: string) => void;
}
export interface PatientDetails {
  country: string;
  countryList: Array<string>;
  patients: Array<PatientDataModel>;
  [key: string]: any;
}

class CountrywisePatientsPage extends React.Component<Props, PatientDetails> {
  state: PatientDetails = {
    country: "",
    patients: new Array<PatientDataModel>(),
    countryList: ["India", "USA", "Japan", "China"]
  };
  constructor(props: Props) {
    super(props);
  }

  // common change method for all editable elements
  handleChange = (
    evt:
      React.ChangeEvent<HTMLSelectElement>
  ) => {
    this.setState({ [evt.target.name]: evt.target.value });
    this.props.selectCountry(evt.target.value);
  };

  render() {
    const headerList = ["PatientNumber","PatientName","Gender","Maleria","Dengue",
      "Cancer","Flue","State","Country"];

    return (
      <div className="container">
        <h3>Contrywise Patient Details</h3>
        <div className="form-group">
          <div className="col-lg-2"> Select country</div>
          <div className="col-lg-4">
            <select
              className="form-control"
              value={this.state.country}
              name="country"
              onChange={this.handleChange}
            >
              <option>Select Country</option>
              {this.state.countryList.map((v, i) => (
                <OptionComponent key={i} optValue={v} />
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div>
          { <TableComponent headersValue={headerList} 
            tableValue={this.props.patientsDetailsCollection} /> }           
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: PatientDetails) => ({
  patientsDetailsCollection: state.PatientCollectionState.countrywisePatient
});

const mapDispatchToProps = dispatch => ({
  selectCountry: (country: string) =>
    dispatch(patientListByCountryRequestStartAction(country))
});

export const ListPatientDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountrywisePatientsPage);
