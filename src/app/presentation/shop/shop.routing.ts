import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SHOP_PATH } from "src/app/shared/routes/path.routes";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: SHOP_PATH.HOME,
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: SHOP_PATH.ORDERS,
                loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
            },
            {
                path: SHOP_PATH.PRODUCTS,
                loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class ShopRoutingModule { }