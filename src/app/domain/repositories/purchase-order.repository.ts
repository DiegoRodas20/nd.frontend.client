import { Observable } from "rxjs";
import { PurchaseOrder } from "../entities/purchase-order.model";

export abstract class PurchaseOrderRepository {

    abstract registerPurchaseOrder(purchaseOrder: PurchaseOrder): Promise<boolean>

    abstract setPurchaseOrder(purchaseOrder: PurchaseOrder): Promise<boolean>

    abstract getPurchaseOrder(): Observable<PurchaseOrder>

}