import { MySqlDbErrorException } from '../../Api/Exception/MySqlDbErrorException';
import { PeopleEntity } from './Entity/PeopleEntity';
import { IPeopleStorage } from './IPeopleStorage';
import { KnexInstance } from '../../Database/KnexConnection';

export class PeopleStorage implements IPeopleStorage {
  public async findByCpf(cpf: string): Promise<PeopleEntity> {
    try {
      const entity: PeopleEntity[] = await KnexInstance<PeopleEntity>('people').where('cpf', cpf).limit(1);
      if (entity && entity.length > 0) {
        return entity[0];
      }
      return null;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findByRg(rg: string): Promise<PeopleEntity> {
    try {
      const entity: PeopleEntity[] = await KnexInstance<PeopleEntity>('people').where('rg', rg).limit(1);
      if (entity && entity.length > 0) {
        return entity[0];
      }
      return null;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findByName(name?: string, page?: number, pageSize?: number): Promise<PeopleEntity[]> {
    try {
      const query = KnexInstance.from('people').orderBy('name').offset(page).limit(pageSize);
      if (name && name.length > 0) {
        query.where('name', 'LIKE', '%' + name + '%');
      }
      return (await query) as PeopleEntity[];
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async countByName(name?: string): Promise<number> {
    try {
      const query = KnexInstance.from('people').count('* as qtd').first();

      if (name && name.length > 0) {
        query.where('people.name', 'LIKE', '%' + name + '%');
      }

      const objectQtd: any = await query;
      return objectQtd?.qtd || 0;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async delete(id: string): Promise<void> {
    try {
      await KnexInstance<PeopleEntity>('people').delete().where({ uuid: id });
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findAll(page?: number, pageSize?: number): Promise<PeopleEntity[]> {
    try {
      return await KnexInstance<PeopleEntity>('people').offset(page).limit(pageSize);
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async save(entity: PeopleEntity): Promise<PeopleEntity> {
    try {
      await KnexInstance<PeopleEntity>('people').insert(entity);
      return entity;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async update(entity: PeopleEntity): Promise<PeopleEntity> {
    try {
      await KnexInstance<PeopleEntity>('people').update(entity).where({ uuid: entity.uuid });
      return entity;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async updateStatus(id: string, status: boolean): Promise<void> {
    try {
      await KnexInstance<PeopleEntity>('people').update({ active: status }).where({ uuid: id });
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async findById(id: string): Promise<PeopleEntity> {
    try {
      const entity: PeopleEntity[] = await KnexInstance<PeopleEntity>('people').where('uuid', id).limit(1);
      if (entity && entity.length > 0) {
        return entity[0];
      }
      return null;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async countActive(): Promise<number> {
    try {
      const query = KnexInstance.from('people').count('* as qtd').where('active', true).first();

      const objectQtd: any = await query;

      return objectQtd?.qtd || 0;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async countAll(): Promise<number> {
    try {
      const query = KnexInstance.from('people').count('* as qtd').first();

      const objectQtd: any = await query;

      return objectQtd?.qtd || 0;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }

  public async countDisabled(): Promise<number> {
    try {
      const query = KnexInstance.from('people').count('* as qtd').where('active', false).first();

      const objectQtd: any = await query;

      return objectQtd?.qtd || 0;
    } catch (e) {
      throw new MySqlDbErrorException(e);
    }
  }
}
