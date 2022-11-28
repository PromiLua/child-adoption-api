import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { DashboardDto } from '../Dto/DashboardDto';
import { DashboardResponse } from '../Response/DashboardResponse';
import { IDatabaseTransformer } from '../../Api/Transformers/IDatabaseTransformer';

export class DashboardTransformer implements IApiTransformer<DashboardDto, DashboardResponse>, IDatabaseTransformer<DashboardDto, any> {
  public async fromApi(object: any, headers?: any): Promise<DashboardDto[] | DashboardDto> {
    throw new Error('Method not implemented');
  }

  public async toApi(dto: DashboardDto): Promise<DashboardResponse> {
    return {
      people: dto.people,
      active: dto.active,
      disabled: dto.disabled,
    };
  }

  public async toDto(dto: DashboardDto): Promise<DashboardDto> {
    return {
      people: dto.people,
      active: dto.active,
      disabled: dto.disabled,
    };
  }

  public async toEntity(dto: DashboardDto[] | DashboardDto): Promise<any> {
    throw new Error('Method not implemented');
  }
}
