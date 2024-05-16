import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from "src/app/shared/routes/app.routes";
import { PRODUCT_PATH } from "src/app/shared/routes/path.routes";
import { CategoriesComponent } from "./categories/categories.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { StoreComponent } from "./store/store.component";
import { WishlistComponent } from "./wish-list/wish-list.component";

const routes: Routes = [
    {
        path: PRODUCT_PATH.STORE,
        component: StoreComponent,
        data: {
            url: APP_ROUTES.STORE,
            name: 'Store',
            isActive: true
        }
    },
    {
        path: `${PRODUCT_PATH.PRODUCT_DETAIL}/:id`,
        component: ProductDetailComponent,
        data: {
            url: APP_ROUTES.PRODUCT_DETAIL,
            name: 'Detalle del Producto',
            isActive: true
        }
    },
    {
        path: PRODUCT_PATH.CATEGORIES,
        component: CategoriesComponent,
        data: {
            url: APP_ROUTES.CATEGORIES,
            name: 'Categorias',
            isActive: true
        }
    },
    {
        path: PRODUCT_PATH.WISH_LIST,
        component: WishlistComponent,
        data: {
            url: APP_ROUTES.WISH_LIST,
            name: 'Wishlist',
            isActive: true
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class ProductsRoutingModule { }