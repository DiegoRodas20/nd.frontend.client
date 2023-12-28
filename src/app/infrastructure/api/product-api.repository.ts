import { Product } from "src/app/domain/entities/product.model";
import { ProductRepository } from "src/app/domain/repositories/product.repository";

export class ProductApiRepository implements ProductRepository {

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