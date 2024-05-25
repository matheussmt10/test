import { Injectable, NotFoundException } from '@nestjs/common';
import { ShelterRepositoryContract } from '../repository/shelter.repository.contract';
import { ShelterLogicContract } from './shelter.logic.contract';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Shelter } from 'src/model/shelter.model';
import { ShelterDto } from '../dto/shelter.dto';

@Injectable()
export class ShelterLogic implements ShelterLogicContract {
  constructor(private readonly repository: ShelterRepositoryContract) {}

  public async getAllShelters(
    params: IPaginationOptions,
  ): Promise<Pagination<Shelter> | NotFoundException> {
    const data = await this.repository.findAll(params);
    if (!data) {
      return new NotFoundException('Shelters not found');
    }

    return data;
  }

  public async create(shelter: ShelterDto): Promise<Shelter> {
    return this.repository.create(shelter);
  }
}
