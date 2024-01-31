import { Signal } from "@angular/core";
import { UseCaseSignal } from "src/app/application/base/use-case-signal.base";
import { Cart } from "src/app/domain/entities/cart.model";

export abstract class GetProductsCartSignalQuery implements UseCaseSignal<void, Cart[]> {

    abstract execute(): Signal<Cart[]>

}