import { Product } from "src/app/domain/product/product.model";


export abstract class GetProductsQuery {

    abstract execute(): Product[];
    
}