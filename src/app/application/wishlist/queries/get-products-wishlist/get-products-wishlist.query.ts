import { Observable } from "rxjs";
import { UseCaseObservable } from "src/app/application/base/use-case-observable.base";
import { Wishlist } from "src/app/domain/entities/wishlist.model";

export abstract class GetProductsWishlistQuery implements UseCaseObservable<void, Wishlist[]> {

    abstract execute(): Observable<Wishlist[]>
    
}