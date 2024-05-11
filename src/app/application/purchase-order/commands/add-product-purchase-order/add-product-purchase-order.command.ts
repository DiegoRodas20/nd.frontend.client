import { UseCasePromise } from "src/app/application/base/use-case-promise.base";
import { Cart } from "src/app/domain/cart/cart.model";

export abstract class AddProductPurchaseOrderCommand implements UseCasePromise<Cart, boolean>{

    abstract execute(productCart: Cart | undefined): Promise<boolean>;

}