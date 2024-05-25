import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

class Address {
  @Column()
  @ApiProperty()
  cep: string;

  @Column()
  @ApiProperty()
  street: string;

  @Column()
  @ApiProperty()
  number: string;

  @Column()
  @ApiProperty()
  state: string;

  @Column()
  @ApiProperty()
  city: string;

  @Column()
  @ApiProperty()
  complement: string;

  @Column()
  @ApiProperty()
  neighborhood: string;
}
@Entity()
export class Shelter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  phone: string;

  @Column()
  @ApiProperty()
  capacity: string;

  @Column()
  @ApiProperty()
  occupancy: string;

  @Column('text', { array: true })
  @ApiProperty()
  donations: Array<string>;

  @Column('text', { array: true })
  @ApiProperty()
  volunteers: Array<string>;

  @Column({ type: 'jsonb' })
  @ApiProperty()
  address: Address;

  @Column({ type: 'jsonb' })
  @ApiProperty()
  social: {
    instagram: string;
    facebook: string;
    twitter: string;
    website: string;
  };
}
