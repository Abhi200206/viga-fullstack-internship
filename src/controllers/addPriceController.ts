import { PrismaClient } from '@prisma/client';
import { pricingSchema } from "../schema/schema";
const prisma = new PrismaClient();
const addPriceData = async (req: any, res: any) => {
    let { organization_id, item_id, zone, base_distance_in_km, km_price, fix_price } = req.body;
    let value = pricingSchema.safeParse({
        organization_id,
        item_id,
        zone,
        base_distance_in_km,
        km_price,
        fix_price
    });
    if (value.success) {
        try {
            let result = await prisma.pricing.create({
                data: {
                    organization_id,
                    item_id,
                    zone,
                    base_distance_in_km,
                    km_price,
                    fix_price
                }
            });
            res.status(200).json({ message: `pricing of itemid: ${result.item_id} is created successfully `, pricing: result });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "internal server error" });
        }
    }
    else {
        res.status(500).json({ error: "input validation failed expected input type is number for all inputs except zone" });
    }
};
export default addPriceData;