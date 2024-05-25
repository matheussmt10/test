"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShelterModule = void 0;
const common_1 = require("@nestjs/common");
const shelter_controller_1 = require("./controller/shelter.controller");
const shelter_model_1 = require("../model/shelter.model");
const shelter_repository_contract_1 = require("./repository/shelter.repository.contract");
const shelter_repository_1 = require("./repository/shelter.repository");
const shelter_logic_contract_1 = require("./logic/shelter.logic.contract");
const shelter_logic_1 = require("./logic/shelter.logic");
const typeorm_1 = require("@nestjs/typeorm");
let ShelterModule = class ShelterModule {
};
exports.ShelterModule = ShelterModule;
exports.ShelterModule = ShelterModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([shelter_model_1.Shelter])],
        controllers: [shelter_controller_1.ShelterController],
        providers: [
            {
                provide: shelter_repository_contract_1.ShelterRepositoryContract,
                useClass: shelter_repository_1.ShelterRepository,
            },
            {
                provide: shelter_logic_contract_1.ShelterLogicContract,
                useClass: shelter_logic_1.ShelterLogic,
            },
        ],
    })
], ShelterModule);
//# sourceMappingURL=shelter.module.js.map