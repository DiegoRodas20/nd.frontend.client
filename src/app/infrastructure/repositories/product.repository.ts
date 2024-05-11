import { Product } from "src/app/domain/product/product.model";
import { IProductRepository } from "src/app/domain/product/product.repository";

export class ProductRepository implements IProductRepository {

    private products: Product[] = [
        {
            id: 1,
            rating: 2,
            images: ['https://www.chikarastore.com/tienda/wp-content/uploads/2022/01/Demon-Slayer-Kimetsu-no-Yaiba-FIGURE-vol.9-A-Kochou-Shinobu.jpeg'],
            category: 'Category 1',
            description: 'Descripcion',
            status: 'Disponible',
            name: 'Name 1',
            price: 300.50,
            priceAfter: 200
        },
        {
            id: 2,
            rating: 3,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 2',
            description: 'Descripcion',
            name: 'Name 2',
            status: 'Disponible',
            price: 300.50,
            priceAfter: 200
        },
        {
            id: 3,
            rating: 4,
            images: ['https://m.media-amazon.com/images/I/71gR2xXpbvL.jpg'],
            category: 'Category 3',
            description: 'Descripcion',
            name: 'Name 3',
            status: 'Disponible',
            price: 300.50,
            priceAfter: 200
        },
        {
            id: 4,
            rating: 5,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 4',
            description: 'Descripcion',
            name: 'Name 4',
            status: 'No Disponible',
            price: 300.50,
            priceAfter: 200
        },
        {
            id: 5,
            rating: 4.5,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 5',
            description: 'Descripcion',
            name: 'Name 5',
            status: 'Disponible',
            price: 250.00,
            priceAfter: 200
        },
        {
            id: 6,
            rating: 3.7,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 6',
            description: 'Descripcion',
            name: 'Name 6',
            status: 'Disponible',
            price: 150.00,
            priceAfter: 120
        },
        {
            id: 7,
            rating: 4.2,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 7',
            description: 'Descripcion',
            name: 'Name 7',
            status: 'No Disponible',
            price: 350.00,
            priceAfter: 280
        },
        {
            id: 8,
            rating: 4.8,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 8',
            description: 'Descripcion',
            name: 'Name 8',
            status: 'Disponible',
            price: 180.00,
            priceAfter: 150
        },
        {
            id: 9,
            rating: 3.9,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 9',
            description: 'Descripcion',
            name: 'Name 9',
            status: 'Disponible',
            price: 280.00,
            priceAfter: 220
        },
        {
            id: 10,
            rating: 4.1,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 10',
            description: 'Descripcion',
            name: 'Name 10',
            status: 'No Disponible',
            price: 320.00,
            priceAfter: 260
        },
        {
            id: 11,
            rating: 4.6,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 11',
            description: 'Descripcion',
            name: 'Name 11',
            status: 'Disponible',
            price: 200.00,
            priceAfter: 160
        },
        {
            id: 12,
            rating: 3.5,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 12',
            description: 'Descripcion',
            name: 'Name 12',
            status: 'Disponible',
            price: 380.00,
            priceAfter: 300
        },
        {
            id: 13,
            rating: 4.9,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 13',
            description: 'Descripcion',
            name: 'Name 13',
            status: 'No Disponible',
            price: 270.00,
            priceAfter: 210
        },
        {
            id: 14,
            rating: 4.0,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 14',
            description: 'Descripcion',
            name: 'Name 14',
            status: 'Disponible',
            price: 310.00,
            priceAfter: 250
        },
        {
            id: 15,
            rating: 3.8,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 15',
            description: 'Descripcion',
            name: 'Name 15',
            status: 'Disponible',
            price: 220.00,
            priceAfter: 180
        },
        {
            id: 16,
            rating: 4.3,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 16',
            description: 'Descripcion',
            name: 'Name 16',
            status: 'No Disponible',
            price: 290.00,
            priceAfter: 230
        },
        {
            id: 17,
            rating: 3.6,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 17',
            description: 'Descripcion',
            name: 'Name 17',
            status: 'Disponible',
            price: 240.00,
            priceAfter: 200
        },
        {
            id: 18,
            rating: 4.7,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 18',
            description: 'Descripcion',
            name: 'Name 18',
            status: 'Disponible',
            price: 190.00,
            priceAfter: 150
        },
        {
            id: 19,
            rating: 3.3,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 19',
            description: 'Descripcion',
            name: 'Name 19',
            status: 'No Disponible',
            price: 330.00,
            priceAfter: 270
        },
        {
            id: 20,
            rating: 4.4,
            images: ['https://www.grutinetpro.com/articulos/lg/lg_212056_0.jpg'],
            category: 'Category 20',
            description: 'Descripcion',
            name: 'Name 20',
            status: 'Disponible',
            price: 260.00,
            priceAfter: 210
        }
    ]

    constructor() { }

    public getProducts(): Product[] {
        return this.products
    }

    public getProductById(idProduct: number): Promise<Product | any> {

        const product = this.products.find(product => product.id === idProduct)

        return new Promise(resolve => {
            resolve(product)
        })
    }

}