import * as React from "react";
import { connect } from "react-redux";
import { patientListRequestStartAction, selectedStateStartAction } from
  "../../action/index";
import { CountrywiseDieases } from "../../Models/CountrywiseDieases";
import { OptionComponent } from "../Common/DropDownComponent";

interface Props {
  patientsCollection: CountrywiseDieases[];
  selectCountry: (country: string) => void;
  selectedState: (selectedStateData: CountrywiseDieases) => void;
}
interface PropsOpt {
  optValue?: string;
}

export interface PatientDetails {
  country: string;
  countryList: Array<string>;
  headers: Array<string>;
  patients: Array<CountrywiseDieases>;
  redirectToReferrer: boolean;
  [key: string]: any;
}

class CountrywiseDieasesPage extends React.Component<Props, PatientDetails> {
  state: PatientDetails = {
    country: "",
    headers: new Array<string>(),
    patients: new Array<CountrywiseDieases>(),
    redirectToReferrer: false,
    countryList: ["India", "USA", "Japan", "China"]
  };
  constructor(props: Props) {
    super(props);
    this.loadHeaders();
  }

  //method to read properties of product object and push then in array
  loadHeaders = () => {
    for (let p in this.state.PatientDataModel) {
      this.state.headers.push(p);
    }
  };

  // common change method for all editable elements
  handleChange = (
    evt:
      React.ChangeEvent<HTMLSelectElement>
  ) => {
    this.setState({ [evt.target.name]: evt.target.value });
    this.props.selectCountry(evt.target.value);
  };

  handleRowClick = (p: CountrywiseDieases) => {
    this.setState({ redirectToReferrer: true });
    this.props.selectedState(p);
    this.props.history.push('/statewisePatients');
  }
  render() {
    // const headerList = ["StateName", "MalePatients", "FemalePatients", "MaleriaPatients"
    //   , "DenguePatients", "CancerPatients", "FluePatients", "TotalPatients"];

    return (
      <div className="container">
        <h3>Contrywise Dieases Details</h3>
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
            {/* <TableComponent headersValue={headerList} 
            tableValue={this.props.patientsCollection} /> */}
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <td>StateName</td>
                  <td>MalePatients</td>
                  <td>FemalePatients</td>
                  <td>MaleriaPatients</td>
                  <td>DenguePatients</td>
                  <td>CancerPatients</td>
                  <td>FluePatients</td>
                  <td>TotalPatients</td>
                </tr>
              </thead>
              <tbody>
                {this.props.patientsCollection.map((p, i) => (
                  <tr key={i} onClick={() => this.handleRowClick(p)}
                    style={{ backgroundColor: p.TotalPatients >= 1000 ? 'red' : '' }}>
                    <td>{p.StateName}</td>
                    <td>{p.MalePatients}</td>
                    <td>{p.FemalePatients}</td>
                    <td>{p.MaleriaPatients}</td>
                    <td>{p.DenguePatients}</td>
                    <td>{p.CancerPatients}</td>
                    <td>{p.FluePatients}</td>
                    <td>{p.TotalPatients}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: PatientDetails) => ({
  patientsCollection: state.PatientCollectionState.patients
});

const mapDispatchToProps = dispatch => ({
  selectCountry: (country: string) =>
    dispatch(patientListRequestStartAction(country)),
  selectedState: (st: CountrywiseDieases) => dispatch(selectedStateStartAction(st))
});
export const ListPatientsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountrywiseDieasesPage);
