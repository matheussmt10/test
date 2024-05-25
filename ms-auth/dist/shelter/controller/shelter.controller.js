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
exports.ShelterController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const shelter_logic_contract_1 = require("../logic/shelter.logic.contract");
const swagger_1 = require("@nestjs/swagger");
const shelter_model_1 = require("../../model/shelter.model");
let ShelterController = class ShelterController {
    constructor(logic) {
        this.logic = logic;
    }
    async index(page = 1, limit = 3) {
        limit = limit > 100 ? 100 : limit;
        return this.logic.getAllShelters({ page, limit });
    }
    async create(shelter) {
        return this.logic.create(shelter);
    }
};
exports.ShelterController = ShelterController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShelterController.prototype, "index", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: shelter_model_1.Shelter }),
    openapi.ApiResponse({ status: 201, type: require("../../model/shelter.model").Shelter }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShelterController.prototype, "create", null);
exports.ShelterController = ShelterController = __decorate([
    (0, swagger_1.ApiTags)('shelters'),
    (0, common_1.Controller)('shelters'),
    __metadata("design:paramtypes", [shelter_logic_contract_1.ShelterLogicContract])
], ShelterController);
//# sourceMappingURL=shelter.controller.js.map