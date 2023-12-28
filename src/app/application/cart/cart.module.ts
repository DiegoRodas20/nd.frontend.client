import { NgModule } from "@angular/core";
import { DeleteProductCartCommand } from "./commands/delete-product-cart/delete-product-cart.command";
import { DeleteProductCartCommandHandler } from "./commands/delete-product-cart/delete-product-cart.command-handler";
import { RegisterProductCartCommand } from "./commands/register-product-cart/register-product-cart.command";
import { RegisterProductCartCommandHandler } from "./commands/register-product-cart/register-product-cart.command-handler";
import { UpdateProductCartCommand } from "./commands/update-product-cart/update-product-cart.command";
import { UpdateProductCartCommandHandler } from "./commands/update-product-cart/update-product-cart.command-handler";
import { GetProductsCartQuery } from "./queries/get-products-cart/get-products-cart.query";
import { GetProductsCartQueryHandler } from "./queries/get-products-cart/get-products-cart.query-handler";

@NgModule({
    providers: [
        { provide: GetProductsCartQuery, useClass: GetProductsCartQueryHandler },
        { provide: DeleteProductCartCommand, useClass: DeleteProductCartCommandHandler },
        { provide: RegisterProductCartCommand, useClass: RegisterProductCartCommandHandler },
        { provide: UpdateProductCartCommand, useClass: UpdateProductCartCommandHandler }
    ]
})

export class CartModule { }