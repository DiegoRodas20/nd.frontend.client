import { NgModule } from "@angular/core";
import { GetProductByIdQuery } from "./queries/get-product-by-id/get-product-by-id.query";
import { GetProductByIdQueryHandler } from "./queries/get-product-by-id/get-product-by-id.query-handler";
import { GetProductsByNameQuery } from "./queries/get-product-by-name/get-products-by-name.query";
import { GetProductsByNameQueryHandler } from "./queries/get-product-by-name/get-products-by-name.query-handler";
import { GetProductsQuery } from "./queries/get-products/get-products.query";
import { GetProductsQueryHandler } from "./queries/get-products/get-products.query-handler";

@NgModule({
    providers: [
        { provide: GetProductsQuery, useClass: GetProductsQueryHandler },
        { provide: GetProductByIdQuery, useClass: GetProductByIdQueryHandler },
        { provide: GetProductsByNameQuery, useClass: GetProductsByNameQueryHandler }
    ]
})

export class ProductModule { }