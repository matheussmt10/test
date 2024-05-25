"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShelterRepository = void 0;
const common_1 = require("@nestjs/common");
const shelter_model_1 = require("../../model/shelter.model");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let ShelterRepository = class ShelterRepository {
    constructor(shelterRepository) {
        this.shelterRepository = shelterRepository;
    }
    async findAll(options) {
        try {
            const result = await (0, nestjs_typeorm_paginate_1.paginate)(this.shelterRepository, options);
            return result;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findById(id) {
        try {
            const result = await this.shelterRepository.findOne({
                where: { name: id },
            });
            return result;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findByShelterName(shelterName) {
        try {
            const result = await this.shelterRepository.findOne({
                where: { name: shelterName },
            });
            return result;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findByCity(city) {
        try {
            const result = await this.shelterRepository.findOne({
                where: { name: city },
            });
            return result;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async create(shelter) {
        try {
            return this.shelterRepository.save(shelter);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: error.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ShelterRepository = ShelterRepository;
exports.ShelterRepository = ShelterRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shelter_model_1.Shelter)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ShelterRepository);
//# sourceMappingURL=shelter.repository.js.map