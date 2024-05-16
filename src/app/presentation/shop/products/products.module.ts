import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsRoutingModule } from "./products.routing";
import { WishlistComponent } from "./wish-list/wish-list.component";
import { StoreComponent } from "./store/store.component";
import { BodyStoreComponent } from "./store/components/body-store/body-store.component";
import { FilterStoreComponent } from "./store/components/body-store/components/filter-store/filter-store.component";
import { ProductStoreComponent } from "./store/components/body-store/components/product-store/product-store.component";
import { HeaderStoreComponent } from "./store/components/header-store/header-store.component";

const COMPONENTS = [
    StoreComponent,
    HeaderStoreComponent,
    BodyStoreComponent,
    FilterStoreComponent,
    ProductStoreComponent,
    WishlistComponent,
    ProductDetailComponent
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
        ProductsRoutingModule
    ]
})

export class ProductsModule { }