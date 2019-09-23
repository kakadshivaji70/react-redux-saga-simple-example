import { PatientDataModel } from "./PatientDataModel";

export class CountrywiseDieases {
  constructor(
    public StateName: string,
    public MalePatients: number,
    public FemalePatients: number,
    public MaleriaPatients: number,
    public DenguePatients: number,
    public CancerPatients: number,
    public FluePatients: number,
    public TotalPatients: number
  ) { }

  GetGenderCountByStates = (
    patients: PatientDataModel[],
    state: string,
    gender: string
  ): number => {
    return patients.filter(
      o =>
        o.Gender.toLowerCase() == gender.toLowerCase() &&
        o.State.toLowerCase() == state.toLowerCase()
    ).length;
  };

  GetDieasesCountByStates = (
    patients: PatientDataModel[],
    state: string,
    dieases: string
  ): number => {
    let count = 0;
    switch (dieases.toLowerCase()) {
      case "maleria":
        count = patients.filter(
          o =>
            o.State.toLowerCase() == state.toLowerCase() &&
            o.Maleria.toLowerCase() == "yes"
        ).length;
        break;

      case "dengue":
        count = patients.filter(
          o =>
            o.State.toLowerCase() == state.toLowerCase() &&
            o.Dengue.toLowerCase() == "yes"
        ).length;
        break;

      case "cancer":
        count = patients.filter(
          o =>
            o.State.toLowerCase() == state.toLowerCase() &&
            o.Cancer.toLowerCase() == "yes"
        ).length;
        break;

      case "flue":
        count = patients.filter(
          o =>
            o.State.toLowerCase() == state.toLowerCase() &&
            o.Flue.toLowerCase() == "yes"
        ).length;
        break;

      default:
        break;
    }

    return count;
  };



  GetDieasesWisePatientList = (
    patients: PatientDataModel[],
    dieases: string
  ): PatientDataModel[] => {
    let dieasespatientData: PatientDataModel[];
    switch (dieases.toLowerCase()) {
      case "maleria":
        dieasespatientData = patients.filter(
          o => o.Maleria.toLowerCase() == "yes"
        ) as Array<PatientDataModel>;
        break;

      case "dengue":
        dieasespatientData = patients.filter(
          o =>
            o.Dengue.toLowerCase() == "yes"
        ) as Array<PatientDataModel>;
        break;

      case "cancer":
        dieasespatientData = patients.filter(
          o =>
            o.Cancer.toLowerCase() == "yes"
        ) as Array<PatientDataModel>;
        break;

      case "flue":
        dieasespatientData = patients.filter(
          o =>
            o.Flue.toLowerCase() == "yes"
        ) as Array<PatientDataModel>;
        break;

      default:
        break;
    }
    return dieasespatientData;
  };

}
