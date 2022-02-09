import { Router, Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { User } from '../models/userModel';
import userRepository from '../repositories/userRepository';
import { compareSync } from 'bcryptjs';
import { Login } from '../models/loginModel';

export const userRoutes = Router();

userRoutes.get('/api/v1/users',
    async (req: Request, res: Response, next: NextFunction) => {
        const users: User[] = await userRepository.findAllUsers()
        res.status(StatusCodes.OK).send(users)
    })

userRoutes.get('/api/v1/users/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid: string = req.params.uuid
        const user: User = await userRepository.findById(uuid)
        res.status(StatusCodes.OK).send(JSON.stringify(user))
    })

userRoutes.post('/api/v1/users',
    async (req: Request, res: Response, next: NextFunction) => {
        const newUser: User = req.body
        const uuid: string = await userRepository.create(newUser)
        res.status(StatusCodes.CREATED).send({ uuid })
    })

userRoutes.put('/api/v1/users/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid: string = req.params.uuid
        const updateUser: User = req.body
        updateUser.uuid = uuid
        await userRepository.update(updateUser);
        res.status(StatusCodes.OK).send()
    })

userRoutes.delete('/api/v1/users/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid: string = req.params.uuid
        await userRepository.delete(uuid)
        res.status(StatusCodes.OK).send()
    })

userRoutes.post('/api/v1/login',
    async (req: Request, res: Response, next: NextFunction) => {
        const loginInfo: Login = req.body
        const user = await userRepository.findByEmail(loginInfo.email)
        const compare = compareSync(loginInfo.password, String(user.password))
        console.log(compare)
        if (compare) {
            res.status(StatusCodes.OK).send(JSON.stringify(user.uuid))
        } else {
            res.status(StatusCodes.UNAUTHORIZED).send()
        }
    })