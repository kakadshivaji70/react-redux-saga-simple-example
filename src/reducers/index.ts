import { combineReducers } from "redux";
import {PatientCollectionState,patientCollectionReducer} from "./patientReducer";
patientCollectionReducer;
export interface State {
  PatientCollectionState: PatientCollectionState;
}

export const reducers = combineReducers<State>({
  PatientCollectionState: patientCollectionReducer
});
