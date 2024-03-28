import express from "express";
import organizationData from "../controllers/organizationController";
const organizationRouter = express.Router();
organizationRouter.post('/register', organizationData);

/**
 * @swagger
 * /api/organization/register:
 *    post:
 *      summary: Create a new organization
 *      description: Endpoint to create a new organization with the provided organization name
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          organizationName:
 *                              type: string
 *      responses:
 *          '200':
 *              description: Organization created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: A success message indicating that the organization was created successfully
 *                              organization:
 *                                  $ref: '#/components/schemas/Organization'
 *          '500':
 *              description: Internal server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: An error message indicating the failure reason
 * components:
 *    schemas:
 *      Organization:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *            description: The unique identifier for the organization
 *          name:
 *            type: string
 *            description: The name of the organization
 */


export default organizationRouter;