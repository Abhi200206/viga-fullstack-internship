import calculatePrice from "../services/priceCalculationService";
import { PrismaClient } from '@prisma/client';
import { responseSchema } from "../schema/schema";
const prisma = new PrismaClient();
const priceCalculation = async (req: any, res: any) => {
    let { zone, organization_id, total_distance, item_type } = req.body;
    let value = responseSchema.safeParse({
        zone,
        organization_id,
        total_distance,
        item_type
    });
    if (value.success) {
        try {
            let result: any = await prisma.pricing.findFirst({
                where: {
                    zone: zone,
                    organization_id: organization_id,
                }
            });
            let price = calculatePrice(total_distance, result.base_distance_in_km, item_type, result.km_price, result.fix_price)
            res.status(200).json({ total_price: price })
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "Total distance cannot be negative or wrong inputs given" });
        }
    }
    else {
        res.status(501).json({ error: "input validation failed expected input type is string for all inputs except total_distance and organization_id" });
    }

};
export default priceCalculation;