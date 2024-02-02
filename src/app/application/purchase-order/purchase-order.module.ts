import { NgModule } from "@angular/core";
import { AddProductPurchaseOrderCommand } from "./commands/add-product-purchase-order/add-product-purchase-order.command";
import { AddProductPurchaseOrderCommandHandler } from "./commands/add-product-purchase-order/add-product-purchase-order.command-handler";
import { DeleteProductPurchaseOrderCommand } from "./commands/delete-product-purchase-order/delete-product-purchase-order.command";
import { DeleteProductPurchaseOrderCommandHandler } from "./commands/delete-product-purchase-order/delete-product-purchase-order.command-handler";
import { GetPurchaseOrderQuery } from "./queries/get-purchase-order/get-purchase-order.query";
import { GetPurchaseOrderQueryHandler } from "./queries/get-purchase-order/get-purchase-order.query-handler";

@NgModule({
    providers: [
        { provide: GetPurchaseOrderQuery, useClass: GetPurchaseOrderQueryHandler },
        { provide: AddProductPurchaseOrderCommand, useClass: AddProductPurchaseOrderCommandHandler },
        { provide: DeleteProductPurchaseOrderCommand, useClass: DeleteProductPurchaseOrderCommandHandler },
    ]
})

export class PurchaseOrderModule { }