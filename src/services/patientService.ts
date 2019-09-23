import { PatientDataModel } from "../Models/PatientDataModel";
import { CountrywiseDieases } from "../Models/CountrywiseDieases";

let allPatients = `[
    {
      "PatientNumber": 1,
      "PatientName": "Shivaji",
      "Gender": "Male",
      "Maleria": "No",
      "Dengue": "No",
      "Cancer": "No",
      "Flue": "Yes",
      "State": "MH",
      "Country": "INDIA"
    },
    {
      "PatientNumber": 5,
      "PatientName": "Vimaljit",
      "Gender": "Female",
      "Maleria": "No",
      "Dengue": "No",
      "Cancer": "No",
      "Flue": "Yes",
      "State": "MH",
      "Country": "INDIA"
    },
    {
      "PatientNumber": 2,
      "PatientName": "Gopi",
      "Gender": "Female",
      "Maleria": "Yes",
      "Dengue": "No",
      "Cancer": "No",
      "Flue": "Yes",
      "State": "KA",
      "Country": "INDIA"
    },
    {
      "PatientNumber": 3,
      "PatientName": "Poonam",
      "Gender": "Female",
      "Maleria": "Yes",
      "Dengue": "Yes",
      "Cancer": "No",
      "Flue": "Yes",
      "State": "GJ",
      "Country": "INDIA"
    },
    {
      "PatientNumber": 4,
      "PatientName": "Ankush",
      "Gender": "Male",
      "Maleria": "Yes",
      "Dengue": "Yes",
      "Cancer": "No",
      "Flue": "Yes",
      "State": "CA",
      "Country": "USA"
    },
    {
    "PatientNumber": 6,
      "PatientName": "Roshani",
      "Gender": "Female",
      "Maleria": "Yes",
      "Dengue": "No",
      "Cancer": "No",
      "Flue": "No",
      "State": "FL",
      "Country": "USA"
    },
    {
      "PatientNumber": 7,
        "PatientName": "Kit Harington",
        "Gender": "Male",
        "Maleria": "Yes",
        "Dengue": "No",
        "Cancer": "Yes",
        "Flue": "No",
        "State": "NJ",
        "Country": "USA"
      },
      {
        "PatientNumber": 8,
          "PatientName": "Sophie Turner",
          "Gender": "Female",
          "Maleria": "No",
          "Dengue": "Yes",
          "Cancer": "Yes",
          "Flue": "No",
          "State": "CA",
          "Country": "USA"
        }
  ]`;

export const getPatientList = (country: string) => {
  console.log("service");
  const patientList = JSON.parse(allPatients) as Array<PatientDataModel>;
  const patientsByCountry = patientList.filter(
    o => o.Country.toLowerCase() == country.toLowerCase()
  ) as Array<PatientDataModel>;

  // to get all state names
  let distinctStates = [];
  for (let i = 0; i < patientsByCountry.length; i++) {
    if (!distinctStates.includes(patientsByCountry[i].State)) {
      distinctStates.push(patientsByCountry[i].State);
    }
  }

  let tempArray = [];
  distinctStates.forEach((element, i) => {
    const countrywiseDieases = new CountrywiseDieases(
      element,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    );
    countrywiseDieases.MalePatients = countrywiseDieases.GetGenderCountByStates(
      patientsByCountry,
      element,
      "male"
    );
    countrywiseDieases.FemalePatients = countrywiseDieases.GetGenderCountByStates(
      patientsByCountry,
      element,
      "female"
    );
    countrywiseDieases.MaleriaPatients = countrywiseDieases.GetDieasesCountByStates(
      patientsByCountry,
      element,
      "maleria"
    );
    countrywiseDieases.DenguePatients = countrywiseDieases.GetDieasesCountByStates(
      patientsByCountry,
      element,
      "Dengue"
    );
    countrywiseDieases.CancerPatients = countrywiseDieases.GetDieasesCountByStates(
      patientsByCountry,
      element,
      "Cancer"
    );
    countrywiseDieases.FluePatients = countrywiseDieases.GetDieasesCountByStates(
      patientsByCountry,
      element,
      "Flue"
    );
    countrywiseDieases.TotalPatients = patientsByCountry.filter(
      o => o.State.toLowerCase() == element.toLowerCase()
    ).length;
    tempArray.push(countrywiseDieases);
  });

  return tempArray as Array<CountrywiseDieases>;
};

export const getDieaseswisePatientList = (disease: string, country: string) => {
  const patientList = JSON.parse(allPatients) as Array<PatientDataModel>;
  let patientsByCountry: Array<PatientDataModel>;
  if (country != "") {
    patientsByCountry = patientList.filter(
      o => o.Country.toLowerCase() == country.toLowerCase()
    ) as Array<PatientDataModel>;
  } else { patientsByCountry = patientList; }

  const countrywiseDieases = new CountrywiseDieases(
    "",
    0,
    0,
    0,
    0,
    0,
    0,
    0
  );
  return countrywiseDieases.GetDieasesWisePatientList(patientsByCountry, disease);
};


/// Get Seleted statewise data
export const getStatewisePatientList = (stateName: string) => {
  const patientList = JSON.parse(allPatients) as Array<PatientDataModel>;
  const patientsBySates = patientList.filter(
    o => o.State.toLowerCase() == stateName.toLowerCase()
  ) as Array<PatientDataModel>;
  return patientsBySates;
};

//patient details by country
export const getPatientListByCountry = (country: string) => {
  const patientList = JSON.parse(allPatients) as Array<PatientDataModel>;
  const patientsByCountry = patientList.filter(
    o => o.Country.toLowerCase() == country.toLowerCase()
  ) as Array<PatientDataModel>; 
  return patientsByCountry;
};
