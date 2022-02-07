import { Router, Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import userRepository from '../repositories/userRepository';

export const apiRoutes = Router();

apiRoutes.get('/api/v1/users',
    async (req: Request, res: Response, next: NextFunction) => {
        const users = await userRepository.findAllUsers()
        res.status(StatusCodes.OK).send({ users })
    })

apiRoutes.get('/api/v1/users/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid
        const user = await userRepository.findById(uuid)
        res.status(StatusCodes.OK).send({ user })
    })

apiRoutes.post('/api/v1/users',
    async (req: Request, res: Response, next: NextFunction) => {
        const newUser = req.body
        await userRepository.create(newUser)
        res.status(StatusCodes.CREATED)
    })

apiRoutes.put('/api/v1/users/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid
        const updateUser = req.body
        updateUser.uuid = uuid
        await userRepository.update(updateUser);
        res.status(StatusCodes.OK)
    })

apiRoutes.delete('/api/v1/users/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid
        await userRepository.delete(uuid)
        res.status(StatusCodes.OK)
    })