import { Product } from "../entities/product.model";

export abstract class ProductRepository {

    abstract getProducts(): Product[]

    abstract getProductById(idProduct: number): Promise<Product>

}