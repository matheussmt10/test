import { ShelterRepositoryContract } from './shelter.repository.contract';
import { Shelter } from '../../model/shelter.model';
import { type z } from 'zod';
import { IShelter } from '../dto/interface';
import { Repository } from 'typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ShelterDto } from '../dto/shelter.dto';
export declare class ShelterRepository implements ShelterRepositoryContract {
    private shelterRepository;
    constructor(shelterRepository: Repository<Shelter>);
    findAll(options: any): Promise<Pagination<Shelter>>;
    findById(id: string): Promise<z.infer<typeof IShelter> | null>;
    findByShelterName(shelterName: string): Promise<z.infer<typeof IShelter>>;
    findByCity(city: string): Promise<z.infer<typeof IShelter> | null>;
    create(shelter: ShelterDto): Promise<Shelter>;
}
