import { NgModule } from "@angular/core";
import { DecreaseProductCartCommand } from "./commands/decrease-product-cart/decrease-product-cart.command";
import { DecreaseProductCartCommandHandler } from "./commands/decrease-product-cart/decrease-product-cart.command-handler";
import { DeleteProductCartCommand } from "./commands/delete-product-cart/delete-product-cart.command";
import { DeleteProductCartCommandHandler } from "./commands/delete-product-cart/delete-product-cart.command-handler";
import { IncreaseProductCartCommand } from "./commands/increase-product-cart/increase-product-cart.command";
import { IncreaseProductCartCommandHandler } from "./commands/increase-product-cart/increase-product-cart.command-handler";
import { RegisterProductCartCommand } from "./commands/register-product-cart/register-product-cart.command";
import { RegisterProductCartCommandHandler } from "./commands/register-product-cart/register-product-cart.command-handler";
import { GetProductsCartQuery } from "./queries/get-products-cart/get-products-cart.query";
import { GetProductsCartQueryHandler } from "./queries/get-products-cart/get-products-cart.query-handler";

@NgModule({
    providers: [
        { provide: GetProductsCartQuery, useClass: GetProductsCartQueryHandler },
        { provide: DeleteProductCartCommand, useClass: DeleteProductCartCommandHandler },
        { provide: RegisterProductCartCommand, useClass: RegisterProductCartCommandHandler },
        { provide: IncreaseProductCartCommand, useClass: IncreaseProductCartCommandHandler },
        { provide: DecreaseProductCartCommand, useClass: DecreaseProductCartCommandHandler },
    ]
})

export class CartModule { }