import { Router, Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { User } from '../models/userModel';
import userRepository from '../repositories/userRepository';
import { compareSync } from 'bcryptjs';
import { Login } from '../models/loginModel';
import { sign, SignOptions, verify } from "jsonwebtoken";

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
        const user: User = await userRepository.findByEmail(loginInfo.email)
        const compare = compareSync(loginInfo.password, String(user.password))
        if (compare) {
            const jwtPayload = { user: user };
            const jwtOptions: SignOptions = { subject: user.uuid, expiresIn: '5y' };
            const secretKey = 'SECRET_KEY';
            const token = sign(jwtPayload, secretKey, jwtOptions);

            res.status(StatusCodes.OK).send(JSON.stringify({ uuid: user.uuid, token: token }))
        } else {
            res.status(StatusCodes.UNAUTHORIZED).send()
        }
    })

userRoutes.get('/api/v1/login-validate',
    async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization
        if (token) {
            const jwtPayload = verify(token, 'SECRET_KEY')
            const userId = jwtPayload.sub
            const user = await userRepository.findById(String(userId))
            res.status(StatusCodes.OK).send(user)
        }
    })
