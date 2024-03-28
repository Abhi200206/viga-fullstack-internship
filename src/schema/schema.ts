import zod from "zod";

export const organizationSchema = zod.string();

export const itemSchema = zod.object({
    type: zod.string(),
    description: zod.string()
});

export const pricingSchema = zod.object({
    organization_id: zod.number(),
    item_id: zod.number(),
    zone: zod.string(),
    base_distance_in_km: zod.number(),
    km_price: zod.number(),
    fix_price: zod.number()
});

export const responseSchema = zod.object({
    zone: zod.string(),
    organization_id: zod.number(),
    total_distance: zod.number(),
    item_type: zod.string(),
});