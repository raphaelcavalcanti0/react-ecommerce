import { Router, Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import productRepository from '../repositories/productRepository';
import categoriesRepository from '../repositories/categoriesRepository'

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
        const uuid: string = await productRepository.create(newProduct)
        res.status(StatusCodes.CREATED).send({ uuid })
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

apiRoutes.get('/api/v1/categories',
    async (req: Request, res: Response, next: NextFunction) => {
        const categories = await categoriesRepository.findAllCategories()
        res.status(StatusCodes.OK).send(categories)
    })

apiRoutes.post('/api/v1/categories',
    async (req: Request, res: Response, next: NextFunction) => {
        const newCategory = req.body
        const uuid: string = await categoriesRepository.create(newCategory)
        res.status(StatusCodes.CREATED).send({ uuid })
    })

apiRoutes.put('/api/v1/categories/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid
        const updateCategory = req.body
        updateCategory.uuid = uuid
        await categoriesRepository.update(updateCategory);
        res.status(StatusCodes.OK).send()
    })

apiRoutes.delete('/api/v1/categories/:uuid',
    async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid
        await categoriesRepository.delete(uuid)
        res.status(StatusCodes.OK).send()
    })
