import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { LAYOUT_COMPONENTS } from "./layout/layout.barrel";
import { ShopRoutingModule } from "./shop.routing";

@NgModule({
    declarations: [
        LAYOUT_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ShopRoutingModule
    ]
})

export class ShopModule { }