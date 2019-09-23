import * as React from "react";
import { HashRouter as Router, NavLink, Switch, Route } from "react-router-dom";
import AboutPage from "../About/AboutPage";
import { ListPatientsContainer } from "../CountrywiseDieases/CountrywiseDieasesPage";
 
import { ListPatientDetailsContainer } from "../CountrywisePatient/CountrywisePatientPage";
import { StatewisePatientsDetailsContainer } from "../StatewiseDieases/StatewiseDieasesPage";
import { DieaseswisePatientsContainer } from "../DieaseswisePatient/DieaseswisePatientPage";

const HomePage = () => (
  <div className="jumborton">
    <Router>
      <nav>
        <NavLink to="/CountrywiseDieases" exact activeStyle={{ color: 'green' }}>1.Disease Details</NavLink>
        {" | "}
        <NavLink to="/DieaseswisePatient" exact activeStyle={{ color: 'green' }}>2.Diseasewise Patient's</NavLink>
        {" | "}
        <NavLink to="/CountrywisePatient" exact activeStyle={{ color: 'green' }}>3.Countrywise Patient's</NavLink>
        </nav>

      <Switch>       
        <Route
          exact
          path="/CountrywisePatient"
          component={ListPatientDetailsContainer}
        />
        <Route
          exact
          path="/CountrywiseDieases"
          component={ListPatientsContainer}
        />
        <Route
          exact
          path="/statewisePatients"
          component={StatewisePatientsDetailsContainer}
        />
        <Route
          exact
          path="/DieaseswisePatient"
          component={DieaseswisePatientsContainer}
        />
      </Switch>
    </Router>
  </div>
);

export default HomePage;
