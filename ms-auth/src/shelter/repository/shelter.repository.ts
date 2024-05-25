/* eslint-disable @typescript-eslint/no-unused-vars */
import { ShelterRepositoryContract } from './shelter.repository.contract';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shelter } from '../../model/shelter.model';
import { Model, ObjectId } from 'mongoose';
import { type z } from 'zod';
import { IShelter } from '../dto/interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { ShelterDto } from '../dto/shelter.dto';

@Injectable()
export class ShelterRepository implements ShelterRepositoryContract {
  constructor(
    @InjectRepository(Shelter)
    private shelterRepository: Repository<Shelter>,
  ) {}

  public async findAll(options: any): Promise<Pagination<Shelter>> {
    try {
      const result = await paginate<Shelter>(this.shelterRepository, options);

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findById(id: string): Promise<z.infer<typeof IShelter> | null> {
    try {
      const result = await this.shelterRepository.findOne({
        where: { name: id },
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findByShelterName(
    shelterName: string,
  ): Promise<z.infer<typeof IShelter>> {
    try {
      const result = await this.shelterRepository.findOne({
        where: { name: shelterName },
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findByCity(
    city: string,
  ): Promise<z.infer<typeof IShelter> | null> {
    try {
      const result = await this.shelterRepository.findOne({
        where: { name: city },
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async create(shelter: ShelterDto): Promise<Shelter> {
    try {
      return this.shelterRepository.save(shelter);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // public async update(
  //   filter: ObjectId,
  //   payload: object,
  // ): Promise<ShelterModel> {
  //   try {
  //     return this.shelterRepository.update(filter, payload);
  //   } catch (error) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.BAD_REQUEST,
  //         error: error.message,
  //       },
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }
  // }
}
