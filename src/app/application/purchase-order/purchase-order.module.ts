import { NgModule } from "@angular/core";
import { SetPurchaseOrderCommand } from "./commands/set-purchase-order/set-purchase-order.command";
import { SetPurchaseOrderCommandHandler } from "./commands/set-purchase-order/set-purchase-order.command-handler";
import { GetPurchaseOrderQuery } from "./queries/get-purchase-order/get-purchase-order.query";
import { GetPurchaseOrderQueryHandler } from "./queries/get-purchase-order/get-purchase-order.query-handler";

@NgModule({
    providers: [
        { provide: GetPurchaseOrderQuery, useClass: GetPurchaseOrderQueryHandler },
        { provide: SetPurchaseOrderCommand, useClass: SetPurchaseOrderCommandHandler },
    ]
})

export class PurchaseOrderModule { }