import { Router, Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import productRepository from '../repositories/productRepository';

export const apiRoutes = Router();

apiRoutes.get('/api/v1/products',
    async (req: Request, res: Response, next: NextFunction) => {
        const products = await productRepository.findAllProducts()
        res.status(StatusCodes.OK).send(products)
    })

apiRoutes.get('/api/v1/products/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid
        const product = await productRepository.findById(uuid)
        res.status(StatusCodes.OK).send(product)
    })

apiRoutes.post('/api/v1/products',
    async (req: Request, res: Response, next: NextFunction) => {
        const newProduct = req.body
        await productRepository.create(newProduct)
        res.status(StatusCodes.CREATED).send()
    })

apiRoutes.put('/api/v1/products/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid
        const updateProduct = req.body
        updateProduct.uuid = uuid
        await productRepository.update(updateProduct);
        res.status(StatusCodes.OK).send()
    })

apiRoutes.delete('/api/v1/products/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid
        await productRepository.delete(uuid)
        res.status(StatusCodes.OK).send()
    })