import { Expose } from 'class-transformer';
import { PaginationRequest } from '../../Api/Request/PaginationRequest';

export class GetAllPeopleRequest extends PaginationRequest {
  @Expose()
  public name: string;
}
