import { Product } from "../models/productModel";

class ProductRepository {
    async findAllProducts(): Promise<Product[]> {
        return [
            {
                uuid: "0",
                img: "https://res.cloudinary.com/evino/image/upload/q_auto:good,fl_progressive:steep,f_auto,dpr_1.0,h_360/v1/products/1000004188-standing-front.png",
                title: "Anciano Gran Reserva 10 years Tempranillo",
                price: "1,00"
            },
            {
                uuid: "1",
                img: "https://res.cloudinary.com/evino/image/upload/q_auto:good,fl_progressive:steep,f_auto,dpr_1.0,h_360/v1/products/1000004368-standing-front.png",
                title: "Domaine de La Motte Pinot Noir 2020",
                price: "1,00"
            },
            {
                uuid: "2",
                img: "https://res.cloudinary.com/evino/image/upload/q_auto:good,fl_progressive:steep,f_auto,dpr_1.0,h_360/v1/products/1000002522-standing-front.png",
                title: "Portada Reserva 2018",
                price: "1,00"
            },
            {
                uuid: "3",
                img: "https://res.cloudinary.com/evino/image/upload/q_auto:good,fl_progressive:steep,f_auto,dpr_1.0,h_360/v1/products/1000003307-standing-front.png",
                title: "Echeverria Reserva Unwooded Chardonnay 2020",
                price: "1,00"
            },
            {
                uuid: "4",
                img: "https://res.cloudinary.com/evino/image/upload/q_auto:good,fl_progressive:steep,f_auto,dpr_1.0,h_360/v1/products/1000004617-standing-front.png",
                title: "Casillero del Diablo Red Blend 2019",
                price: "1,00"
            },
            {
                uuid: "5",
                img: "https://res.cloudinary.com/evino/image/upload/q_auto:good,fl_progressive:steep,f_auto,dpr_1.0,h_360/v1/products/1000004080-standing-front.png",
                title: "Château Saint-Bonnet Médoc AOP 2017",
                price: "1,00"
            },
        ]
    }

    async findById(uuid: string): Promise<Product> {
        const product = {}
        return product
    }

    async create(product: Product): Promise<string> {
        return ""
    }

    async update(product: Product): Promise<void> {

    }

    async delete(uuid: string): Promise<void> {

    }
}

export default new ProductRepository();