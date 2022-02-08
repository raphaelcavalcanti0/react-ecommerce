import { Router, Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import userRepository from '../repositories/userRepository';

export const userRoutes = Router();

userRoutes.get('/api/v1/users',
    async (req: Request, res: Response, next: NextFunction) => {
        const users = await userRepository.findAllUsers()
        res.status(StatusCodes.OK).send({ users })
    })

userRoutes.get('/api/v1/users/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid
        const user = await userRepository.findById(uuid)
        res.status(StatusCodes.OK).send({ user })
    })

userRoutes.post('/api/v1/users',
    async (req: Request, res: Response, next: NextFunction) => {
        const newUser = req.body
        await userRepository.create(newUser)
        res.status(StatusCodes.CREATED)
    })

userRoutes.put('/api/v1/users/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid
        const updateUser = req.body
        updateUser.uuid = uuid
        await userRepository.update(updateUser);
        res.status(StatusCodes.OK)
    })

userRoutes.delete('/api/v1/users/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid
        await userRepository.delete(uuid)
        res.status(StatusCodes.OK)
    })