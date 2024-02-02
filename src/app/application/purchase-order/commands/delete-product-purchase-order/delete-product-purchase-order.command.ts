import { UseCasePromise } from "src/app/application/base/use-case-promise.base";

export abstract class DeleteProductPurchaseOrderCommand implements UseCasePromise<string, boolean>{

    abstract execute(idProductCart: string): Promise<boolean>;

}