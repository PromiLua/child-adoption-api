import { PeopleResponse } from './PeopleResponse';
import PaginationResponse from '../../Api/Response/PaginationResponse';

export interface PeopleListResponse {
  items?: PeopleResponse[];
  pagination?: PaginationResponse;
}
