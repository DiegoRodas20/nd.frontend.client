import { UseCasePromise } from "src/app/application/base/use-case-promise.base";

export abstract class RegisterProductWishlistCommand implements UseCasePromise<number, boolean>{

    abstract execute(idProduct: number): Promise<boolean>;

}