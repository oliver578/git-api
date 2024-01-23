import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - phoneNumber
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of user
 *         username:
 *           type: string
 *           description: The name of user
 *         phoneNumber:
 *           type: string
 *           description: The phone number of user 
 *         email:
 *           type: string
 *           description: The user email
 *         password: 
 *           type: string
 *           description: The hashed user password
 *       example:
 *         id: CGHKIY23345678
 *         username: olivier12
 *         phoneNumber: 781796154
 *         email: oli@gmail.com
 *         password: oliva234
 */

/**
 * @swagger
 *tags:
 *  name: Users
 *  description: The Users managing API
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the liste of the  users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The liste of the users
 *         contens:
 *          application/json:
 *             schema:
 *                  type: array
 *                  items:
 *                     $ref:'#/components/schemas/user'
 *         400:
 *           description: Could not get  liste of users
 */
router.get('/users', userController.getAllUsers);

/**
 * @swagger
 * /users/:id:
 *   get:
 *     summary: Get a user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: The user was not found
 */
router.get('/users/:id', userController.getUser);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create user 
 *     tags: [Users]
 *     requestBody:
 *        required: true
 *        content:
 *           application/json
 *              schema:
 *                   $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */
router.post('/users', userController.creatUser);

/**
 * @swagger
 * /users/:id:
 *   put:
 *     summary: Update user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id for updating
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *             application/json:
 *                schema:
 *                  $ref: '#/components/schemas/User'
 *       400:
 *         description: The updating failed
 */
router.put('/users/:id', userController.updateUser);


/**
 * @swagger
 * /users/:id:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id for deleting
 *     responses:
 *       200:
 *         description: The user was deleted
 *         content:
 *           application/json:
 *           schema:
 *         $ref: '#/components/schemas/User'
 *       400:
 *         description: The deleting failed
 */
router.delete('/users/:id', userController.deleteUser);

export default router;

