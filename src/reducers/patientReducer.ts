import { BaseAction, actionIds } from "../common";
import { PatientDataModel } from "../Models/PatientDataModel";

export type PatientCollectionState = {
  patients: Array<PatientDataModel>;
  selctedStateData: Array<PatientDataModel>;
  dieseswisePatient: Array<PatientDataModel>;
  countrywisePatient: Array<PatientDataModel>
};

// a pure function that accepts state and returns the state
export const patientCollectionReducer = (
  state: PatientCollectionState = {
    patients: new Array<PatientDataModel>(),
    selctedStateData:  new Array<PatientDataModel>(),
    dieseswisePatient: new Array<PatientDataModel>(),
    countrywisePatient: new Array<PatientDataModel>()
  },
  action: BaseAction
) => {
  switch (action.type) {
    case actionIds.GET_STATELIST_REQUEST_COMPLETED:
      return {
        ...state,
        patients: action.payload
      };
      case actionIds.GET_DIEASESWISELIST_REQUEST_COMPLETED:
      return {
        ...state,
        dieseswisePatient: action.payload
      };
    case actionIds.SELECTED_STATE_REQUEST_COMPLETED:
      return {
        ...state,
        selctedStateData: action.payload
      };
      case actionIds.GET_PATIENTLIST_COUNTRYWISE_REQUEST_COMPLETED:
      return {
        ...state,
        countrywisePatient: action.payload
      };
  }
  return state;
};
