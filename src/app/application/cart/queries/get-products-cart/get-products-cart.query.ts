import { Observable } from "rxjs";
import { UseCaseObservable } from "src/app/application/base/use-case-observable.base";
import { Cart } from "src/app/domain/entities/cart.model";

export abstract class GetProductsCartQuery implements UseCaseObservable<void, Cart[]> {

    abstract execute(): Observable<Cart[]>

}