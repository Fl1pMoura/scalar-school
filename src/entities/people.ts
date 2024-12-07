export interface IPersonData {
  name: string;
  role: string;
  order: number;
}

export interface IPeopleData {
  [filename: string]: IPersonData;
}
