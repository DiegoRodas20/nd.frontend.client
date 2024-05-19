import { Signal } from "@angular/core";
import { UseCaseSignal } from "src/app/application/base/use-case-signal.base";
import { Wishlist } from "src/app/domain/wishlist/wishlist.model";

export abstract class GetProductsWishlistQuery implements UseCaseSignal<void, Wishlist[]> {

    abstract execute(): Signal<Wishlist[]>

}