import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from "src/app/shared/routes/app.routes";
import { ORDER_PATH } from "src/app/shared/routes/path.routes";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderCartComponent } from "./order-cart/order-cart.component";
import { OrderTrackComponent } from "./order-track/order-track.component";

const routes: Routes = [
    {
        path: ORDER_PATH.CHECK_OUT,
        component: CheckOutComponent,
        data: {
            url: APP_ROUTES.CHECK_OUT,
            name: 'Check Out',
            isActive: true
        }
    },
    {
        path: ORDER_PATH.ORDER_TRACK,
        component: OrderTrackComponent,
        data: {
            url: APP_ROUTES.ORDER_TRACK,
            name: 'Seguimiento de Orden',
            isActive: true
        }
    },
    {
        path: ORDER_PATH.ORDER_CART,
        component: OrderCartComponent,
        data: {
            url: APP_ROUTES.ORDERS_CART,
            name: 'Carrito de Compras',
            isActive: true
        }
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class OrdersRoutingModule { }