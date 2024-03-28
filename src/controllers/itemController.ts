import { PrismaClient } from '@prisma/client';
import { itemSchema } from "../schema/schema";
const prisma = new PrismaClient();
const itemData = async (req: any, res: any) => {
    let { type, description } = req.body;
    console.log(type, description);
    let value = itemSchema.safeParse({
        type,
        description
    });
    if (value.success) {
        try {
            let result = await prisma.item.create({
                data: {
                    type: type,
                    description: description
                }
            });
            res.status(200).json({ message: `item with type: '${result.type}' and description: '${result.description}' is sucessfully created with id: '${result.id}' `, item: result });

        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "internal server error" });
        }
    }
    else {
        res.status(501).json({ error: "input validation failed expected input type is string for both type and description" });
    }
};
export default itemData;