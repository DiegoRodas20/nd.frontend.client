import { NgModule } from "@angular/core";
import { DecrementQuantityProductCartCommand } from "./cart/commands/decrement-quantity-product-cart/decrement-quantity-product-cart.command";
import { DecrementQuantityProductCartCommandHandler } from "./cart/commands/decrement-quantity-product-cart/decrement-quantity-product-cart.command-handler";
import { DeleteProductCartCommand } from "./cart/commands/delete-product-cart/delete-product-cart.command";
import { DeleteProductCartCommandHandler } from "./cart/commands/delete-product-cart/delete-product-cart.command-handler";
import { IncrementQuantityProductCartCommand } from "./cart/commands/increment-quantity-product-cart/increment-quantity-product-cart.command";
import { IncrementQuantityProductCartCommandHandler } from "./cart/commands/increment-quantity-product-cart/increment-quantity-product-cart.command-handler";
import { RegisterProductCartCommand } from "./cart/commands/register-product-cart/register-product-cart.command";
import { RegisterProductCartCommandHandler } from "./cart/commands/register-product-cart/register-product-cart.command-handler";
import { GetProductsCartQuery } from "./cart/queries/get-products-cart/get-products-cart.query";
import { GetProductsCartQueryHandler } from "./cart/queries/get-products-cart/get-products-cart.query-handler";
import { GetProductByIdQuery } from "./product/queries/get-product-by-id/get-product-by-id.query";
import { GetProductByIdQueryHandler } from "./product/queries/get-product-by-id/get-product-by-id.query-handler";
import { GetProductsByNameQuery } from "./product/queries/get-product-by-name/get-products-by-name.query";
import { GetProductsByNameQueryHandler } from "./product/queries/get-product-by-name/get-products-by-name.query-handler";
import { GetProductsQuery } from "./product/queries/get-products/get-products.query";
import { GetProductsQueryHandler } from "./product/queries/get-products/get-products.query-handler";
import { DeleteProductWishlistCommand } from "./wishlist/commands/delete-product-wishlist/delete-product-wishlist.command";
import { DeleteProductWishlistCommandHandler } from "./wishlist/commands/delete-product-wishlist/delete-product-wishlist.command-handler";
import { RegisterProductWishlistCommand } from "./wishlist/commands/register-product-wishlist/register-product-wishlist.command";
import { RegisterProductWishlistCommandHandler } from "./wishlist/commands/register-product-wishlist/register-product-wishlist.command-handler";
import { GetProductsWishlistQuery } from "./wishlist/queries/get-products-wishlist/get-products-wishlist.query";
import { GetProductsWishlistQueryHandler } from "./wishlist/queries/get-products-wishlist/get-products-wishlist.query-handler";


@NgModule({
    providers: [
        { provide: GetProductsQuery, useClass: GetProductsQueryHandler },
        { provide: GetProductByIdQuery, useClass: GetProductByIdQueryHandler },
        { provide: GetProductsByNameQuery, useClass: GetProductsByNameQueryHandler },

        { provide: GetProductsCartQuery, useClass: GetProductsCartQueryHandler },
        { provide: DeleteProductCartCommand, useClass: DeleteProductCartCommandHandler },
        { provide: RegisterProductCartCommand, useClass: RegisterProductCartCommandHandler },
        { provide: IncrementQuantityProductCartCommand, useClass: IncrementQuantityProductCartCommandHandler },
        { provide: DecrementQuantityProductCartCommand, useClass: DecrementQuantityProductCartCommandHandler },

        { provide: RegisterProductWishlistCommand, useClass: RegisterProductWishlistCommandHandler },
        { provide: DeleteProductWishlistCommand, useClass: DeleteProductWishlistCommandHandler },
        { provide: GetProductsWishlistQuery, useClass: GetProductsWishlistQueryHandler },
    ]
})

export class ApplicationModule { }