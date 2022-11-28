import { IApiTransformer } from '../../Api/Transformers/IApiTransformer';
import { NextFunction, Request, Response } from 'express';
import { PeopleResponse } from '../Response/PeopleResponse';
import { PeopleDto } from '../Dto/PeopleDto';
import { UpdatePeopleService } from '../Services/UpdatePeopleService';

export class UpdatePeopleController {
  constructor(private readonly transformer: IApiTransformer<PeopleDto, PeopleResponse>, private readonly service: UpdatePeopleService) {}

  public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      let dto = <PeopleDto>await this.transformer.fromApi({ ...req.params, ...req.body });
      dto = await this.service.invoke(dto);
      const response = await this.transformer.toApi(dto);
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
