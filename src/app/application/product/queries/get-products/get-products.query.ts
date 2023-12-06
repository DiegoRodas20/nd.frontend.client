import { Product } from "src/app/domain/entities/product.model";


export abstract class GetProductsQuery {

    abstract execute(): Product[];
    
}