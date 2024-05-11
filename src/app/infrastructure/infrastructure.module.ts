import { NgModule } from "@angular/core";
import { ICartRepository } from "../domain/cart/cart.repository";
import { ICategoryRepository } from "../domain/category/category.repository";
import { IProductRepository } from "../domain/product/product.repository";
import { IPurchaseOrderRepository } from "../domain/purchase-order/purchase-order.repository";
import { IWishlistRepository } from "../domain/wishlist/wishlist.repository";
import { CartRepository } from "./repositories/cart.repository";
import { PurchaseOrderRepository } from "./repositories/purchase-order.repository";
import { CategoryRepository } from "./repositories/category.repository";
import { ProductRepository } from "./repositories/product.repository";
import { WishlistRepository } from "./repositories/wishlist.repository";

@NgModule({
    providers: [
        { provide: ICartRepository, useClass: CartRepository },
        { provide: IProductRepository, useClass: ProductRepository },
        { provide: IWishlistRepository, useClass: WishlistRepository },
        { provide: ICategoryRepository, useClass: CategoryRepository },
        { provide: IPurchaseOrderRepository, useClass: PurchaseOrderRepository },
    ]
})

export class InfrastructureModule { }