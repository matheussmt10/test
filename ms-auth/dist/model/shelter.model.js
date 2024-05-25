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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shelter = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const bson_typings_1 = require("typeorm/driver/mongodb/bson.typings");
class Address {
}
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "complement", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "neighborhood", void 0);
let Shelter = class Shelter extends typeorm_1.BaseEntity {
};
exports.Shelter = Shelter;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", bson_typings_1.UUID)
], Shelter.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Shelter.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Shelter.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Shelter.prototype, "capacity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Shelter.prototype, "occupancy", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Shelter.prototype, "donations", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Shelter.prototype, "volunteers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Address)
], Shelter.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], Shelter.prototype, "social", void 0);
exports.Shelter = Shelter = __decorate([
    (0, typeorm_1.Entity)()
], Shelter);
//# sourceMappingURL=shelter.model.js.map