export interface PeopleResponse {
  uuid: string;
  cpf?: string;
  name?: string;
  rg?: string;
  city?: string;
  district?: string;
  street?: string;
  country?: string;
  number?: string;
  civil_state?: string;
  birth_date?: Date;
  active?: boolean;
}
