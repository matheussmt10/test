import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ShelterDto } from '../dto/shelter.dto';
import { Shelter } from 'src/model/shelter.model';
import { NotFoundException } from '@nestjs/common';

export abstract class ShelterLogicContract {
  abstract getAllShelters(
    params: IPaginationOptions,
  ): Promise<Pagination<Shelter> | NotFoundException>;

  abstract create(shelter: ShelterDto): Promise<Shelter>;
}
