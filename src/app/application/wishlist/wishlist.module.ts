import { NgModule } from "@angular/core";
import { DeleteProductWishlistCommand } from "./commands/delete-product-wishlist/delete-product-wishlist.command";
import { DeleteProductWishlistCommandHandler } from "./commands/delete-product-wishlist/delete-product-wishlist.command-handler";
import { RegisterProductWishlistCommand } from "./commands/register-product-wishlist/register-product-wishlist.command";
import { RegisterProductWishlistCommandHandler } from "./commands/register-product-wishlist/register-product-wishlist.command-handler";
import { GetProductsWishlistQuery } from "./queries/get-products-wishlist/get-products-wishlist.query";
import { GetProductsWishlistQueryHandler } from "./queries/get-products-wishlist/get-products-wishlist.query-handler";

@NgModule({
    providers: [
        { provide: GetProductsWishlistQuery, useClass: GetProductsWishlistQueryHandler },
        { provide: DeleteProductWishlistCommand, useClass: DeleteProductWishlistCommandHandler },
        { provide: RegisterProductWishlistCommand, useClass: RegisterProductWishlistCommandHandler },
    ]
})

export class WishlistModule { }