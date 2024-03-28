import swaggerJSDoc from "swagger-jsdoc";
const port = process.env.PORT || 3000;
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: { 
            title: "Viga Entertainment Full Stack Internship Assignment",
            version: "1.0.0",
            description: "Backend Development for a Food Delivery App"
        },
        servers: [
            {
                url: `http://localhost:${port}`
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};


const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;