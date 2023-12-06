import { UseCasePromise } from "src/app/application/base/use-case-promise.base";
import { Product } from "src/app/domain/entities/product.model";

export abstract class GetProductByIdQuery implements UseCasePromise<number, Product>{
    
    abstract execute(idProduct: number): Promise<Product>

}