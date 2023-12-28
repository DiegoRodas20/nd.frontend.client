import { Observable } from "rxjs";
import { UseCaseObservable } from "src/app/application/base/use-case-observable.base";
import { PurchaseOrder } from "src/app/domain/entities/purchase-order.model";

export abstract class GetPurchaseOrderQuery implements UseCaseObservable<null, PurchaseOrder>{

    abstract execute(): Observable<PurchaseOrder>

}