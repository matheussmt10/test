"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IShelter = void 0;
const openapi = require("@nestjs/swagger");
const zod_1 = require("zod");
exports.IShelter = zod_1.z.object({
    name: zod_1.z
        .string({
        message: 'Campo obrigatório',
    })
        .max(255, 'O nome não pode ter mais que 255 caracteres')
        .min(3, 'O nome não pode ter menos que 3 caracteres'),
    phone: zod_1.z
        .string({
        message: 'Campo obrigatório',
    })
        .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Insira um telefone válido'),
    capacity: zod_1.z
        .string({ message: 'Campo obrigatório' })
        .regex(/^\d+$/, 'Insira um número válido')
        .refine((capacity) => +capacity > 0, 'A capacidade deve ser maior que 0'),
    occupancy: zod_1.z
        .string({ message: 'Campo obrigatório' })
        .regex(/^\d+$/, 'Insira um número válido')
        .refine((occupancy) => +occupancy >= 0, 'A ocupação deve ser maior ou igual a 0'),
    donations: zod_1.z.array(zod_1.z.string()),
    volunteers: zod_1.z.array(zod_1.z.string()),
    address: zod_1.z.object({
        cep: zod_1.z
            .string({ message: 'Campo obrigatório' })
            .regex(/^\d{5}-\d{3}$/, 'Insira um CEP válido'),
        street: zod_1.z.string({ message: 'Campo obrigatório' }),
        number: zod_1.z
            .string({ message: 'Campo obrigatório' })
            .regex(/^\d+$/, 'Insira um número válido'),
        state: zod_1.z
            .string({ message: 'Campo obrigatório' })
            .max(2, 'Insira a sigla do estado'),
        city: zod_1.z.string({ message: 'Campo obrigatório' }),
        complement: zod_1.z.string().optional(),
        neighborhood: zod_1.z.string({ message: 'Campo obrigatório' }),
    }),
    social: zod_1.z.object({
        instagram: zod_1.z
            .string()
            .optional()
            .refine((value) => {
            if (!value)
                return true;
            return value.startsWith('@');
        }, 'O nome de o usuário do Instagram deve começar com @'),
        facebook: zod_1.z
            .string()
            .optional()
            .refine((value) => {
            if (!value)
                return true;
            return value.startsWith('@');
        }, 'O nome de o usuário do Facebook deve começar com @'),
        twitter: zod_1.z
            .string()
            .optional()
            .refine((value) => {
            if (!value)
                return true;
            return value.startsWith('@');
        }, 'O nome de o usuário do Twitter deve começar com @'),
        website: zod_1.z.string().optional(),
    }),
});
//# sourceMappingURL=shelter.dto.js.map