import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Cart } from "src/app/domain/entities/cart.model";
import { PurchaseOrderRepository } from "src/app/domain/repositories/purchase-order.repository";
import { SetPurchaseOrderCommand } from "./set-purchase-order.command";

@Injectable({
    providedIn: 'root'
})
export class SetPurchaseOrderCommandHandler implements SetPurchaseOrderCommand {

    constructor(
        private _purchaseOrderRepository: PurchaseOrderRepository
    ) { }

    async execute(productsCart: Cart[]): Promise<boolean> {

        const purchaseOrder = await firstValueFrom(this._purchaseOrderRepository.getPurchaseOrder())

        purchaseOrder.products = productsCart
        purchaseOrder.totalPrice = purchaseOrder.products.reduce((total, product) => total + product.priceCart, 0)

        const isSetPurchaseOrder = await this._purchaseOrderRepository.setPurchaseOrder(purchaseOrder)

        return isSetPurchaseOrder
    }

}