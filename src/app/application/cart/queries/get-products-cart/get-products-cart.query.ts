import { Signal } from "@angular/core";
import { UseCaseSignal } from "src/app/application/base/use-case-signal.base";
import { Cart } from "src/app/domain/cart/cart.model";

export abstract class GetProductsCartQuery implements UseCaseSignal<void, Cart[]> {

    abstract execute(): Signal<Cart[]>

}