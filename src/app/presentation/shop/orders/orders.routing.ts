import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CHECK_OUT_ROUTE, ORDERS_CART_ROUTE, ORDER_TRACK_ROUTE } from "src/app/shared/routes/app.routes";
import { ORDER_PATH } from "src/app/shared/routes/path.routes";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderCartComponent } from "./order-cart/order-cart.component";
import { OrderTrackComponent } from "./order-track/order-track.component";

const routes: Routes = [
    {
        path: ORDER_PATH.CHECK_OUT,
        component: CheckOutComponent,
        data: {
            url: CHECK_OUT_ROUTE,
            name: 'Check Out',
            isActive: true
        }
    },
    {
        path: ORDER_PATH.ORDER_TRACK,
        component: OrderTrackComponent,
        data: {
            url: ORDER_TRACK_ROUTE,
            name: 'Seguimiento de Orden',
            isActive: true
        }
    },
    {
        path: ORDER_PATH.ORDER_CART,
        component: OrderCartComponent,
        data: {
            url: ORDERS_CART_ROUTE,
            name: 'Carrito de Compras',
            isActive: true
        }
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class OrdersRoutingModule { }