import { NgModule } from "@angular/core";
import { ProductApiRepository } from "../infrastructure/api/product-api.repository";
import { CartLocalStorage } from "../infrastructure/local-storage/cart.local-storage";
import { PurchaseOrderLocalStorage } from "../infrastructure/local-storage/purchase-order.local-storage";
import { WishlistLocalStorage } from "../infrastructure/local-storage/wishlist.local-storage";
import { CartRepository } from "./repositories/cart.repository";
import { ProductRepository } from "./repositories/product.repository";
import { PurchaseOrderRepository } from "./repositories/purchase-order.repository";
import { WishlistRepository } from "./repositories/wishlist.repository";

@NgModule({
    providers: [
        { provide: CartRepository, useClass: CartLocalStorage },
        { provide: ProductRepository, useClass: ProductApiRepository },
        { provide: WishlistRepository, useClass: WishlistLocalStorage },
        { provide: PurchaseOrderRepository, useClass: PurchaseOrderLocalStorage },
    ]
})

export class DomainModule { }