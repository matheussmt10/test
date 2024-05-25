import { Module } from '@nestjs/common';
import { ShelterModule } from './shelter/shelter.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shelter } from './model/shelter.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'password',
      database: 'sos-pet',
      entities: [Shelter],
    }),
    ShelterModule,
  ],
})
export class AppModule {}
