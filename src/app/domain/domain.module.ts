import { NgModule } from "@angular/core";
import { ProductApiRepository } from "../infrastructure/api/product-api.repository";
import { CartLocalStorage } from "../infrastructure/local-storage/cart-local-storage.repository";
import { WishlistLocalStorage } from "../infrastructure/local-storage/wishlist-local-storage.repository";
import { CartRepository } from "./repositories/cart.repository";
import { ProductRepository } from "./repositories/product.repository";
import { WishlistRepository } from "./repositories/wishlist.repository";

@NgModule({
    providers: [
        { provide: CartRepository, useClass: CartLocalStorage },
        { provide: ProductRepository, useClass: ProductApiRepository },
        { provide: WishlistRepository, useClass: WishlistLocalStorage }
    ]
})

export class DomainModule { }