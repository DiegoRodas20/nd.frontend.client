import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CATEGORIES_ROUTE, PRODUCT_DETAIL_ROUTE, STORE_ROUTE, WISH_LIST_ROUTE } from "src/app/shared/routes/app.routes";
import { PRODUCT_PATH } from "src/app/shared/routes/path.routes";
import { CategoriesComponent } from "./categories/categories.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { WishlistComponent } from "./wish-list/wish-list.component";
import { StoreComponent } from "./store/store.component";

const routes: Routes = [

    {
        path: PRODUCT_PATH.STORE,
        component: StoreComponent,
        data: {
            url: STORE_ROUTE,
            name: 'Store',
            isActive: true
        }
    },
    {
        path: `${PRODUCT_PATH.PRODUCT_DETAIL}/:id`,
        component: ProductDetailComponent,
        data: {
            url: PRODUCT_DETAIL_ROUTE,
            name: 'Detalle del Producto',
            isActive: true
        }
    },
    {
        path: PRODUCT_PATH.CATEGORIES,
        component: CategoriesComponent,
        data: {
            url: CATEGORIES_ROUTE,
            name: 'Categorias',
            isActive: true
        }
    },
    {
        path: PRODUCT_PATH.WISH_LIST,
        component: WishlistComponent,
        data: {
            url: WISH_LIST_ROUTE,
            name: 'Wishlist',
            isActive: true
        }
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class ProductsRoutingModule { }