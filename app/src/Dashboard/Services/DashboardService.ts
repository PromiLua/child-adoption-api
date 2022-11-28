import { DashboardDto } from '../Dto/DashboardDto';
import { IPeopleStorage } from '../../People/Storage/IPeopleStorage';
import { DashboardTransformer } from '../Transformer/DashboardTransformer';

export class DashboardService {
  constructor(private readonly personStorage: IPeopleStorage, private readonly transformer: DashboardTransformer) {}

  public async invoke(): Promise<DashboardDto> {
    const dto: DashboardDto = {
      active: 0,
      people: 0,
      disabled: 0,
    };

    dto.disabled = await this.personStorage.countDisabled();
    dto.active = await this.personStorage.countActive();
    dto.people = await this.personStorage.countAll();

    return this.transformer.toDto(dto);
  }
}
