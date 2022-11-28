import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsUUID, MaxLength, MinLength } from 'class-validator';

export class UpdatePeopleRequest {
  @IsNotEmpty()
  @IsUUID()
  @Expose()
  public uuid: string;

  @IsOptional()
  @Expose()
  public name: string;

  @IsOptional()
  @MaxLength(11)
  @MinLength(11)
  @Expose()
  public cpf: string;

  @IsOptional()
  @MaxLength(9)
  @MinLength(9)
  @Expose()
  public rg: string;

  @IsOptional()
  @Expose()
  public birth_date: Date;

  @IsOptional()
  @Expose()
  public country: string;

  @IsOptional()
  @Expose()
  public number: string;

  @IsOptional()
  @Expose()
  public city: string;

  @IsOptional()
  @Expose()
  public district: string;

  @IsOptional()
  @Expose()
  public street: string;
}
