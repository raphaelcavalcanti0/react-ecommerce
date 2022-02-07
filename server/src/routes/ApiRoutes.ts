import { Router, Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const apiRoutes = Router();

apiRoutes.get('/api/v1/products',
    async (req: Request, res: Response, next: NextFunction) => {
        res.status(StatusCodes.OK).send({ products: [] })
    })