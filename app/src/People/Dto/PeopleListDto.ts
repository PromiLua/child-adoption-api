import { PeopleDto } from './PeopleDto';
import PaginationDto from '../../Api/Dto/PaginationDto';

export interface PeopleListDto {
  items?: PeopleDto[];
  pagination?: PaginationDto;
  search?: {
    name: string;
  };
}
