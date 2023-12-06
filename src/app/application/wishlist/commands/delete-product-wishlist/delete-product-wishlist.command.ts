import { UseCasePromise } from "src/app/application/base/use-case-promise.base";

export abstract class DeleteProductWishlistCommand implements UseCasePromise<string, boolean>{

    abstract execute(idProductWishlist: string): Promise<boolean>

}