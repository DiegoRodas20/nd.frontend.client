import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { CatalogComponent } from "./catalog/catalog.component";
import { BodyCatalogComponent } from "./catalog/components/body-catalog/body-catalog.component";
import { FilterCatalogComponent } from "./catalog/components/body-catalog/components/filter-catalog/filter-catalog.component";
import { ProductCatalogComponent } from "./catalog/components/body-catalog/components/product-catalog/product-catalog.component";
import { FooterCatalogComponent } from "./catalog/components/footer-catalog/footer-catalog.component";
import { HeaderCatalogComponent } from "./catalog/components/header-catalog/header-catalog.component";
import { ProductsRoutingModule } from "./products.routing";
import { WishlistComponent } from "./wish-list/wish-list.component";

const COMPONENTS = [
    CatalogComponent,
    HeaderCatalogComponent,
    BodyCatalogComponent,
    FooterCatalogComponent,
    FilterCatalogComponent,
    ProductCatalogComponent,
    WishlistComponent
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