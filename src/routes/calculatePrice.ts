import express from "express";
import priceCalculation from "../controllers/priceController";
const responseRouter = express.Router();

responseRouter.post('/price', priceCalculation);
/**
 * @swagger
 * /api/calculate/price:
 *    post:
 *      summary: Calculate the total price of the given request body and send back the response
 *      description: Calculates the total price for food delivery based on various factors.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          zone:
 *                              type: string
 *                              description: The delivery zone.
 *                          organization_id:
 *                              type: string
 *                              description: The ID of the organization.
 *                          total_distance:
 *                              type: number
 *                              description: The total distance for delivery in kilometers.
 *                              example: 12
 *                          item_type:
 *                              type: string
 *                              enum:
 *                                  - perishable
 *                                  - non-perishable
 *                              description: The type of food item.
 *      responses:
 *         '200':
 *              description: Total price calculated successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              total_price:
 *                                  type: number
 *                                  description: The total price of the food delivery.
 *                                  example: 20.5
 *         '500':
 *              description: Internal server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: Error message.
 *         '501':
 *              description: Input validation failed
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  description: Error message.
 */


export default responseRouter;