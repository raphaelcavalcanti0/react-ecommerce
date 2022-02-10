import { verify } from "jsonwebtoken"
import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from "http-status-codes";
import { User } from "../models/userModel";

export const validateJWT = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(StatusCodes.UNAUTHORIZED).send()
    }

    const [authorizationType, token] = authorization.split(' ')

    if (authorizationType !== 'Bearer' || !token) {
        return res.status(StatusCodes.BAD_REQUEST).send({ "Failed": "Tipo de Token inválido!" })
    }

    try {
        const tokenPayload = verify(token, 'SECRET_KEY');

        if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
            res.status(StatusCodes.UNAUTHORIZED).send({ "Failed": "Token inválido!" })
        }

        console.log(tokenPayload)

        return next();
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).send()
    }
}