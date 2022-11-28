import { IPeopleStorage } from '../Storage/IPeopleStorage';
import { PeopleListDto } from '../Dto/PeopleListDto';
import { GetAllPeopleTransformer } from '../Transformer/GetAllPeopleTransformer';

export class GetAllPeopleService {
  constructor(private readonly storage: IPeopleStorage, private readonly transformer: GetAllPeopleTransformer) {}

  public async invoke(dto?: PeopleListDto): Promise<PeopleListDto> {
    let offset = 0;

    if (dto.pagination.page >= 1) {
      offset = dto.pagination.page * dto.pagination.pageSize;
    }

    dto.pagination.total = await this.storage.countByName(dto.search.name);

    if (dto.pagination.total <= 0) {
      return await this.transformer.toDto(dto, []);
    }

    const entity = await this.storage.findByName(dto.search.name, offset, dto.pagination.pageSize);

    return await this.transformer.toDto(dto, entity);
  }
}
