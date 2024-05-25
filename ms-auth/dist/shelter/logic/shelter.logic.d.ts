import { NotFoundException } from '@nestjs/common';
import { ShelterRepositoryContract } from '../repository/shelter.repository.contract';
import { ShelterLogicContract } from './shelter.logic.contract';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Shelter } from 'src/model/shelter.model';
import { ShelterDto } from '../dto/shelter.dto';
export declare class ShelterLogic implements ShelterLogicContract {
    private readonly repository;
    constructor(repository: ShelterRepositoryContract);
    getAllShelters(params: IPaginationOptions): Promise<Pagination<Shelter> | NotFoundException>;
    create(shelter: ShelterDto): Promise<Shelter>;
}
