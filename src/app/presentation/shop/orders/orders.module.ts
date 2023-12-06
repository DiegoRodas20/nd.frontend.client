import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderCartComponent } from "./order-cart/order-cart.component";
import { OrderTrackComponent } from "./order-track/order-track.component";
import { OrdersRoutingModule } from "./orders.routing";

const COMPONENTS = [
    CheckOutComponent,
    OrderTrackComponent,
    OrderCartComponent
]

@NgModule({
    declarations: [
        COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        OrdersRoutingModule
    ]
})

export class OrdersModule { }