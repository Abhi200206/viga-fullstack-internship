import express from "express";
import addPriceData from "../controllers/addPriceController";
const priceRouter = express.Router();

priceRouter.post('/addPrice', addPriceData);

/**
 * @swagger
 * /api/price/addPrice:
 *    post:
 *      summary: Add pricing data
 *      description: Endpoint to add pricing data for a specific organization and item
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          organization_id:
 *                              type: number
 *                              description: The ID of the organization
 *                          item_id:
 *                              type: number
 *                              description: The ID of the item
 *                          zone:
 *                              type: string
 *                              description: The zone for which the pricing is applicable
 *                          base_distance_in_km:
 *                              type: number
 *                              description: The base distance in kilometers
 *                          km_price:
 *                              type: number
 *                              description: The price per kilometer
 *                          fix_price:
 *                              type: number
 *                              description: The fixed price
 *      responses:
 *          '200':
 *              description: Pricing data added successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: A success message indicating that the pricing data was added successfully
 *                              pricing:
 *                                  $ref: '#/components/schemas/Pricing'
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
 *      Pricing:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *            description: The unique identifier for the pricing data
 *          organization_id:
 *            type: integer
 *            description: The ID of the organization associated with the pricing data
 *          item_id:
 *            type: integer
 *            description: The ID of the item associated with the pricing data
 *          zone:
 *            type: string
 *            description: The zone for which the pricing is applicable
 *          base_distance_in_km:
 *            type: number
 *            description: The base distance in kilometers
 *          km_price:
 *            type: number
 *            description: The price per kilometer
 *          fix_price:
 *            type: number
 *            description: The fixed price
 */

export default priceRouter;