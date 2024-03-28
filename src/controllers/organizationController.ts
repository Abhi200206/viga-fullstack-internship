import { PrismaClient } from '@prisma/client';
import { organizationSchema } from "../schema/schema";
const prisma = new PrismaClient();
const organizationData = async (req: any, res: any) => {
    let { organizationName } = req.body;
    let value = organizationSchema.safeParse(organizationName);
    if (value.success) {
        try {
            let result = await prisma.organization.create({
                data: {
                    name: organizationName
                },
                select: {
                    id: true,
                    name: true
                }
            });
            res.status(200).json({ message: `organination with name: '${result.name}' with id: '${result.id}' is created successfully`, organization: result });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "internal server error" });
        }
    }
    else {
        res.status(500).json({ error: "input validation failed expected input type is string" });
    }
};
export default organizationData;