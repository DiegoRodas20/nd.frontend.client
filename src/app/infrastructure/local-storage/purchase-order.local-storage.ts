import { Signal, WritableSignal, signal } from "@angular/core";
import { Cart } from "src/app/domain/entities/cart.model";
import { PurchaseOrder } from "src/app/domain/entities/purchase-order.model";
import { PurchaseOrderRepository } from "src/app/domain/repositories/purchase-order.repository";

export class PurchaseOrderLocalStorage implements PurchaseOrderRepository {

    private localStorageKey: string = 'purchase_order'
    private purchaseOrder: WritableSignal<PurchaseOrder> = signal({
        products: [],
        totalPrice: 0
    })

    constructor() {
        this.initializePurchaseOrder()
    }

    private initializePurchaseOrder() {

        const storedData = localStorage.getItem(this.localStorageKey)

        if (storedData) {
            this.purchaseOrder.set(JSON.parse(storedData))
        }
    }

    private updateStoragePurchaseOrder() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.purchaseOrder()))
    }

    public getPurchaseOrder(): Signal<PurchaseOrder> {
        return this.purchaseOrder
    }

    public updatePurchaseOrder(productCart: Cart): Promise<boolean> {

        this.purchaseOrder().products.forEach(value => {
            
            if (value.id === productCart.id) {
                value.quantity = productCart.quantity
                value.priceCart = productCart.priceCart
            }
        })

        this.purchaseOrder().totalPrice = this.purchaseOrder().products.reduce((total, product) => total + product.priceCart, 0)

        this.updateStoragePurchaseOrder()

        return Promise.resolve(true)
    }

    public addProductToPurchaseOrder(productCart: Cart): Promise<boolean> {

        this.purchaseOrder().products.push(productCart)
        this.purchaseOrder().totalPrice = this.purchaseOrder().products.reduce((total, product) => total + product.priceCart, 0)

        this.updateStoragePurchaseOrder()

        return Promise.resolve(true)
    }

    public deleteProductToPurchaseOrder(idProductCart: string): Promise<boolean> {

        this.purchaseOrder().products = this.purchaseOrder().products.filter(value => value.id !== idProductCart)
        this.purchaseOrder().totalPrice = this.purchaseOrder().products.reduce((total, product) => total + product.priceCart, 0)

        this.updateStoragePurchaseOrder()

        return Promise.resolve(true)
    }
}