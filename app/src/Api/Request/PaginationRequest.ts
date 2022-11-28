import { Expose } from 'class-transformer';
import { IsNumberString, IsOptional } from 'class-validator';

export class PaginationRequest {
  @Expose()
  @IsNumberString()
  @IsOptional()
  page: number;

  @Expose()
  @IsNumberString()
  @IsOptional()
  pageSize: number;
}
