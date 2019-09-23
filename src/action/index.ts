import { BaseAction, actionIds } from "../common";
import { PatientDataModel } from "../Models/PatientDataModel";
import { CountrywiseDieases } from "../Models/CountrywiseDieases";

export const patientListRequestStartAction: (p: string) => BaseAction = (
  country: string
) => ({
  type: actionIds.GET_STATELIST_REQUEST_START,
  payload: country
});

export const patientListRequestCompletedAction: (
  p: PatientDataModel[]
) => BaseAction = productsReceived => ({
  type: actionIds.GET_STATELIST_REQUEST_COMPLETED,
  payload: productsReceived
});

//Dieaseswise patients data
export const dieaseswisePatientListRequestStartAction: (...a ) => BaseAction = (
  ...a
) => ({
  type: actionIds.GET_DIEASESWISELIST_REQUEST_START,
  payload: a
});

export const dieaseswisePatientListRequestCompletedAction: (
  p: PatientDataModel[]
) => BaseAction = productsReceived => ({
  type: actionIds.GET_DIEASESWISELIST_REQUEST_COMPLETED,
  payload: productsReceived
});

// Details of the selected state

export const selectedStateStartAction: (st: CountrywiseDieases) => BaseAction = (st) => ({
  type: actionIds.SELECTED_STATE_REQUEST_START,
  payload: st,
});

export const selectedStateCompletedAction: (st: PatientDataModel[]) => BaseAction = 
(stResponce) => (
  {
    type: actionIds.SELECTED_STATE_REQUEST_COMPLETED,
    payload: stResponce,
  });


//get patient details by country
export const patientListByCountryRequestStartAction: (
  p: string
) => BaseAction = (country: string) => ({
  type: actionIds.GET_PATIENTLIST_COUNTRYWISE_REQUEST_START,
  payload: country
});

export const patientListByCountryRequestCompletedAction: (
  p: PatientDataModel[]
) => BaseAction = productsReceived => ({
  type: actionIds.GET_PATIENTLIST_COUNTRYWISE_REQUEST_COMPLETED,
  payload: productsReceived
});
