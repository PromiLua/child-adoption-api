import PaginationDto from '../../Api/Dto/PaginationDto';

export interface PeopleDto {
  uuid?: string;
  cpf?: string;
  name?: string;
  rg?: string;
  city?: string;
  district?: string;
  street?: string;
  country?: string;
  number?: string;
  birth_date?: Date;
  civil_state?: string;
  active?: boolean;
  pagination?: PaginationDto;
}
