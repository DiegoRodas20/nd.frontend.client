import { BehaviorSubject, Observable } from "rxjs";
import { PurchaseOrder } from "src/app/domain/entities/purchase-order.model";
import { PurchaseOrderRepository } from "src/app/domain/repositories/purchase-order.repository";

export class PurchaseOrderLocalStorage implements PurchaseOrderRepository {

    private localStorageKey: string = 'purchase_order'
    private items = new BehaviorSubject<PurchaseOrder>({
        products: [],
        totalPrice: 0
    })
    private items$ = this.items.asObservable();

    constructor() {
        this.initializePurchaseOrder()
    }

    private initializePurchaseOrder() {

        const storedData = localStorage.getItem(this.localStorageKey)

        if (storedData) {
            this.items.next(JSON.parse(storedData))
        }
    }

    public registerPurchaseOrder(purchaseOrder: PurchaseOrder): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    public setPurchaseOrder(purchaseOrder: PurchaseOrder): Promise<boolean> {

        this.items.next(purchaseOrder)
        
        localStorage.setItem(this.localStorageKey, JSON.stringify(purchaseOrder))

        return new Promise(resolve => {
            resolve(true)
        })
    }

    public getPurchaseOrder(): Observable<PurchaseOrder> {
        return this.items$
    }

}