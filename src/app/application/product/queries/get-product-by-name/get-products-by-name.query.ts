import { UseCasePromise } from "src/app/application/base/use-case-promise.base";
import { Product } from "src/app/domain/entities/product.model";


export abstract class GetProductsByNameQuery implements UseCasePromise<string, Product[]>{

    abstract execute(productName: string): Promise<Product[]>

}