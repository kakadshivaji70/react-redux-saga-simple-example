export class PatientDataModel {
  constructor(
    public PatientNumber: number,
    public PatientName: string,
    public Gender: string,
    public Maleria: string,
    public Dengue: string,
    public Cancer: string,
    public Flue: string,
    public State: string,
    public Country: string
  ) {}
}
