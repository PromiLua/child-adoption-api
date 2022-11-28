import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { NextFunction, Request, Response } from 'express';
import { DashboardDto } from '../Dto/DashboardDto';
import { DashboardResponse } from '../Response/DashboardResponse';
import { DashboardService } from '../Services/DashboardService';

export class DashboardController {
  constructor(private readonly transformer: IApiTransformer<DashboardDto, DashboardResponse>, private readonly service: DashboardService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const dto = await this.service.invoke();

      const response = await this.transformer.toApi(dto);

      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
