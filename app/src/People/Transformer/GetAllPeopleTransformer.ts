import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';
import { PeopleEntity } from '../Storage/Entity/PeopleEntity';
import { ClassValidator } from '../../Api/Utils/ClassValidator';
import { GetAllPeopleRequest } from '../Request/GetAllPeopleRequest';
import { PeopleListResponse } from '../Response/PeopleListResponse';
import { PeopleListDto } from '../Dto/PeopleListDto';

export class GetAllPeopleTransformer implements IApiTransformer<PeopleListDto, PeopleListResponse>, IDatabaseTransformer<PeopleListDto, PeopleEntity> {
  public async toEntity(dto: PeopleListDto): Promise<PeopleEntity[]> {
    throw new Error('Method not implemented.');
  }

  public async fromApi(object: any, headers?: any): Promise<PeopleListDto> {
    const requestObject = await ClassValidator.transformerToModel(GetAllPeopleRequest, object);

    await ClassValidator.validateInput(requestObject);
    return {
      search: { name: requestObject?.name || null },
      pagination: {
        page: requestObject.page || 0,
        pageSize: requestObject.pageSize || 100,
        total: 0,
      },
      items: [],
    };
  }

  public async toDto(dto: PeopleListDto, entity?: PeopleEntity[]): Promise<PeopleListDto> {
    return {
      pagination: {
        page: dto.pagination.page,
        pageSize: dto.pagination.pageSize,
        total: dto.pagination.total,
      },
      items: entity.map((el) => {
        return {
          uuid: el.uuid,
          cpf: el.cpf,
          name: el.name,
          rg: el.rg,
          city: el.city,
          district: el.district,
          street: el.street,
          country: el.country,
          number: el.number,
          civil_state: el.civil_state,
          birth_date: el.birth_date,
          active: el.active,
        };
      }),
    };
  }

  public async toApi(dto: PeopleListDto): Promise<PeopleListResponse> {
    return {
      pagination: {
        page: Number(dto.pagination.page),
        pageSize: Number(dto.pagination.pageSize),
        total: dto.pagination.total,
      },
      items: dto.items.map((el) => {
        return {
          uuid: el.uuid,
          cpf: el.cpf,
          name: el.name,
          rg: el.rg,
          city: el.city,
          district: el.district,
          street: el.street,
          country: el.country,
          number: el.number,
          civil_state: el.civil_state,
          birth_date: el.birth_date,
          active: el.active,
        };
      }),
    };
  }
}
