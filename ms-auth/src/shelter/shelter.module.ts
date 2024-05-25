import { Module } from '@nestjs/common';
import { ShelterController } from './controller/shelter.controller';
import { Shelter } from '../model/shelter.model';
import { ShelterRepositoryContract } from './repository/shelter.repository.contract';
import { ShelterRepository } from './repository/shelter.repository';
import { ShelterLogicContract } from './logic/shelter.logic.contract';
import { ShelterLogic } from './logic/shelter.logic';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Shelter])],
  controllers: [ShelterController],
  providers: [
    {
      provide: ShelterRepositoryContract,
      useClass: ShelterRepository,
    },
    {
      provide: ShelterLogicContract,
      useClass: ShelterLogic,
    },
  ],
})
export class ShelterModule {}
