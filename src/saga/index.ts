import { call, put, takeEvery, all, fork, take } from "redux-saga/effects";
import { patientListRequestCompletedAction, dieaseswisePatientListRequestCompletedAction, selectedStateCompletedAction, patientListByCountryRequestCompletedAction } from "../action/index";
import { actionIds } from "../common/index";
import { PatientDataModel } from "../Models/PatientDataModel";
import { getPatientList, getDieaseswisePatientList, getStatewisePatientList, getPatientListByCountry } from "../services/patientService";
// ES 6 Generator
export const rootSaga = function* root() {
  yield all([fork(watchProductRequestStart)]);
};

// defining watchers
function* watchProductRequestStart() {
  yield takeEvery(actionIds.GET_STATELIST_REQUEST_START, requestPatientList);
  yield takeEvery(actionIds.GET_DIEASESWISELIST_REQUEST_START, requestDieaseswisePatientList);
  yield takeEvery(actionIds.SELECTED_STATE_REQUEST_START, selectedState);
  yield takeEvery(
    actionIds.GET_PATIENTLIST_COUNTRYWISE_REQUEST_START,
    requestPatientListByCountry
  );

}

// get list of statewise diease count
function* requestPatientList() {
  const data = yield take(actionIds.GET_STATELIST_REQUEST_START);
  console.log("requestPatientList");
  const pateientList: Array<PatientDataModel> = yield call(
    getPatientList,
    data.payload
  );
  yield put(patientListRequestCompletedAction(pateientList));
}

function* requestDieaseswisePatientList() {
  const data = yield take(actionIds.GET_DIEASESWISELIST_REQUEST_START);
  console.log("requestDieaseswisePatientList");
  const pateientList: Array<PatientDataModel> = yield call(
    getDieaseswisePatientList,
    data.payload[0],
    data.payload[1]
  );
  yield put(dieaseswisePatientListRequestCompletedAction(pateientList));
}

function* selectedState() {
  const getSelectedData = yield take(actionIds.SELECTED_STATE_REQUEST_START);
  console.log(getSelectedData.payload.StateName);
  const statewisePateientList: Array<PatientDataModel> = yield call(
    getStatewisePatientList,
    getSelectedData.payload.StateName
  )
  yield put(selectedStateCompletedAction(statewisePateientList));
}
// get list of patients by country
function* requestPatientListByCountry() {
  const data = yield take(actionIds.GET_PATIENTLIST_COUNTRYWISE_REQUEST_START);
  console.log("requestPatientListByCountry");
  const pateientList: Array<PatientDataModel> = yield call(
    getPatientListByCountry,
    data.payload
  );
  yield put(patientListByCountryRequestCompletedAction(pateientList));
}