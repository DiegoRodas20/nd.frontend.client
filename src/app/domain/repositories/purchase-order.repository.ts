import { Signal } from "@angular/core";
import { Cart } from "../entities/cart.model";
import { PurchaseOrder } from "../entities/purchase-order.model";

export abstract class PurchaseOrderRepository {

    abstract getPurchaseOrder(): Signal<PurchaseOrder>

    abstract updatePurchaseOrder(productCart: Cart | undefined): Promise<boolean>

    abstract addProductToPurchaseOrder(productCart: Cart): Promise<boolean>

    abstract deleteProductToPurchaseOrder(idProductCart: string): Promise<boolean>
}