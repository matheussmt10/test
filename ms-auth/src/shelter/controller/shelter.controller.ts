import {
  Controller,
  UseGuards,
  Get,
  Query,
  Post,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { ApiKeyGuard } from 'src/configs/api-key';
import { IPaginationParams, IShelter } from '../dto/interface';
import { ZodValidationPipe } from 'src/utils/pipes';
import { ShelterLogicContract } from '../logic/shelter.logic.contract';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ShelterDto } from '../dto/shelter.dto';
import { Shelter } from 'src/model/shelter.model';

@ApiTags('shelters')
@Controller('shelters')
// @UseGuards(ApiKeyGuard)
export class ShelterController {
  constructor(private readonly logic: ShelterLogicContract) {}

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async index(
    @Query('page') page = 1,
    @Query('limit') limit = 3,
  ): Promise<Pagination<Shelter> | NotFoundException> {
    limit = limit > 100 ? 100 : limit;
    return this.logic.getAllShelters({ page, limit });
  }

  @Post()
  @ApiBody({ type: Shelter })
  async create(@Body() shelter: ShelterDto) {
    return this.logic.create(shelter);
  }
}
