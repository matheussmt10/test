import { NotFoundException } from '@nestjs/common';
import { ShelterLogicContract } from '../logic/shelter.logic.contract';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ShelterDto } from '../dto/shelter.dto';
import { Shelter } from 'src/model/shelter.model';
export declare class ShelterController {
    private readonly logic;
    constructor(logic: ShelterLogicContract);
    index(page?: number, limit?: number): Promise<Pagination<Shelter> | NotFoundException>;
    create(shelter: ShelterDto): Promise<Shelter>;
}
