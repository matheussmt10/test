import { BaseEntity } from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
declare class Address {
    cep: string;
    street: string;
    number: string;
    state: string;
    city: string;
    complement: string;
    neighborhood: string;
}
export declare class Shelter extends BaseEntity {
    id: UUID;
    name: string;
    phone: string;
    capacity: string;
    occupancy: string;
    donations: Array<string>;
    volunteers: Array<string>;
    address: Address;
    social: {
        instagram: string;
        facebook: string;
        twitter: string;
        website: string;
    };
}
export {};
