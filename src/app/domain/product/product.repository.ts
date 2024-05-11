import { Product } from "../product/product.model";

export abstract class IProductRepository {

    abstract getProducts(): Product[]

    abstract getProductById(idProduct: number): Promise<Product>

}