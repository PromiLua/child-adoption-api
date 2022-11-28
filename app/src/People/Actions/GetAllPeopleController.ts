import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { NextFunction, Request, Response } from 'express';
import { PeopleDto } from '../Dto/PeopleDto';
import { GetAllPeopleService } from '../Services/GetAllPeopleService';
import { PeopleListDto } from '../Dto/PeopleListDto';
import { PeopleListResponse } from '../Response/PeopleListResponse';

export class GetAllPeopleController {
  constructor(private readonly transformer: IApiTransformer<PeopleListDto, PeopleListResponse>, private readonly service: GetAllPeopleService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const request = <PeopleDto>await this.transformer.fromApi(req.query);
      const dto = await this.service.invoke(request);
      const response = await this.transformer.toApi(dto);
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
