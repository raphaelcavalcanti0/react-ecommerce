import { Router, Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const statusRoutes = Router();

statusRoutes.get('/api/v1/status',
    async (req: Request, res: Response, next: NextFunction) => {
        res.status(StatusCodes.OK).send({ status: "running" })
    })