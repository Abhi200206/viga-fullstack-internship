import express from "express";
import itemData from "../controllers/itemController";
const itemRouter = express.Router();

itemRouter.post('/addItem', itemData);

/**
 * @swagger
 * /api/item/addItem:
 *    post:
 *      summary: Create a new item with the provided type and description
 *      description: Creates a new item in the database with the specified type and description.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          type:
 *                              type: string
 *                              description: The type of the item.
 *                              example: "prishable"
 *                          description:
 *                              type: string
 *                              description: The description of the item.
 *                              example: "Apple"
 *      responses:
 *         '200':
 *              description: Item created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: Confirmation message.
 *                              item:
 *                                  $ref: '#/components/schemas/Item'
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

/**
 * @swagger
 * components:
 *    schemas:
 *      Item:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *            description: The unique identifier for the item.
 *          type:
 *            type: string
 *            description: The type of the item.
 *          description:
 *            type: string
 *            description: The description of the item.
 */


export default itemRouter;