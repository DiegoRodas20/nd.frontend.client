import { NgModule } from "@angular/core";
import { CartModule } from "./cart/cart.module";
import { ProductModule } from "./product/product.module";
import { PurchaseOrderModule } from "./purchase-order/purchase-order.module";
import { UserModule } from "./user/user.module";
import { WishlistModule } from "./wishlist/wishlist.module";


@NgModule({
    imports: [
        CartModule,
        ProductModule,
        PurchaseOrderModule,
        UserModule,
        WishlistModule
    ]
})

export class ApplicationModule { }