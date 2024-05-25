interface Address {
    readonly cep: string;
    readonly street: string;
    readonly number: string;
    readonly state: string;
    readonly city: string;
    readonly complement: string;
    readonly neighborhood: string;
}
export interface ShelterDto {
    readonly id: number;
    readonly name: string;
    readonly phone: string;
    readonly capacity: string;
    readonly occupancy: string;
    readonly donations: string[];
    readonly volunteers: string[];
    readonly address: Address;
    readonly social: {
        instagram: string;
        facebook: string;
        twitter: string;
        website: string;
    };
}
export {};
