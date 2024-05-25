import { Shelter } from 'src/model/shelter.model';
import { type z } from 'zod';
import { IShelter } from '../dto/interface';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ShelterDto } from '../dto/shelter.dto';
export declare abstract class ShelterRepositoryContract {
    abstract findAll(options: any): Promise<Pagination<Shelter>>;
    abstract findById(id: string): Promise<z.infer<typeof IShelter> | null>;
    abstract findByShelterName(email: string): Promise<z.infer<typeof IShelter>>;
    abstract findByCity(email: string): Promise<z.infer<typeof IShelter> | null>;
    abstract create(shelter: ShelterDto): Promise<Shelter>;
}
