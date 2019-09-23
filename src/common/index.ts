export const actionIds = {
  GET_STATELIST_REQUEST_START: "Request For Statewise Info",
  GET_STATELIST_REQUEST_COMPLETED: "StatewiseInfo are returned",

  GET_DIEASESWISELIST_REQUEST_START: "Request For Dieseswise patients Info",
  GET_DIEASESWISELIST_REQUEST_COMPLETED: "Dieseswise patients are returned",


  SELECTED_STATE_REQUEST_START: "SELECTED_STATE_REQUEST_START",
  SELECTED_STATE_REQUEST_COMPLETED: "SELECTED_STATE_REQUEST_COMPLETED",

  GET_PATIENTLIST_COUNTRYWISE_REQUEST_START:
  "Request For Patient List by Country",
GET_PATIENTLIST_COUNTRYWISE_REQUEST_COMPLETED: "Patient List are returned",


};

export interface BaseAction {
  type: string;
  payload: any;
}
