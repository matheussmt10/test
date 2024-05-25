import { z } from 'zod';
export declare const IShelter: z.ZodObject<{
    name: z.ZodString;
    phone: z.ZodString;
    capacity: z.ZodEffects<z.ZodString, string, string>;
    occupancy: z.ZodEffects<z.ZodString, string, string>;
    donations: z.ZodArray<z.ZodString, "many">;
    volunteers: z.ZodArray<z.ZodString, "many">;
    address: z.ZodObject<{
        cep: z.ZodString;
        street: z.ZodString;
        number: z.ZodString;
        state: z.ZodString;
        city: z.ZodString;
        complement: z.ZodOptional<z.ZodString>;
        neighborhood: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        number?: string;
        cep?: string;
        street?: string;
        state?: string;
        city?: string;
        complement?: string;
        neighborhood?: string;
    }, {
        number?: string;
        cep?: string;
        street?: string;
        state?: string;
        city?: string;
        complement?: string;
        neighborhood?: string;
    }>;
    social: z.ZodObject<{
        instagram: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
        facebook: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
        twitter: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string>;
        website: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        instagram?: string;
        facebook?: string;
        twitter?: string;
        website?: string;
    }, {
        instagram?: string;
        facebook?: string;
        twitter?: string;
        website?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    phone?: string;
    capacity?: string;
    occupancy?: string;
    donations?: string[];
    volunteers?: string[];
    address?: {
        number?: string;
        cep?: string;
        street?: string;
        state?: string;
        city?: string;
        complement?: string;
        neighborhood?: string;
    };
    social?: {
        instagram?: string;
        facebook?: string;
        twitter?: string;
        website?: string;
    };
}, {
    name?: string;
    phone?: string;
    capacity?: string;
    occupancy?: string;
    donations?: string[];
    volunteers?: string[];
    address?: {
        number?: string;
        cep?: string;
        street?: string;
        state?: string;
        city?: string;
        complement?: string;
        neighborhood?: string;
    };
    social?: {
        instagram?: string;
        facebook?: string;
        twitter?: string;
        website?: string;
    };
}>;
