import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { APP_PATH } from "../shared/routes/path.routes"

const routes: Routes = [
    {
        path: APP_PATH.SHOP,
        loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
    },
    {
        path: APP_PATH.CLIENT,
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
    },
    {
        path: '**',
        redirectTo: APP_PATH.SHOP,
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
    exports: [RouterModule]
})

export class PresentationRoutingModule { }