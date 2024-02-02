import { Signal } from "@angular/core";
import { UseCaseSignal } from "src/app/application/base/use-case-signal.base";
import { PurchaseOrder } from "src/app/domain/entities/purchase-order.model";

export abstract class GetPurchaseOrderQuery implements UseCaseSignal<null, PurchaseOrder>{

    abstract execute(): Signal<PurchaseOrder>

}