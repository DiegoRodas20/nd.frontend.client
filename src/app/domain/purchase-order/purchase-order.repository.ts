import { Signal } from "@angular/core";
import { Cart } from "../cart/cart.model";
import { PurchaseOrder } from "../purchase-order/purchase-order.model";

export abstract class IPurchaseOrderRepository {

    abstract getPurchaseOrder(): Signal<PurchaseOrder>

    abstract updatePurchaseOrder(productCart: Cart | undefined): Promise<boolean>

    abstract addProductToPurchaseOrder(productCart: Cart): Promise<boolean>

    abstract deleteProductToPurchaseOrder(idProductCart: string): Promise<boolean>
}