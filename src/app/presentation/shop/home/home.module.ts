import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { BannerHomeComponent } from "./components/banner-home/banner-home.component";
import { CategoryHomeComponent } from "./components/category-home/category-home.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing";
import { FeatureHomeComponent } from "./components/feature-home/feature-home.component";

const COMPONENTS = [
    HomeComponent,
    BannerHomeComponent,
    CategoryHomeComponent,
    FeatureHomeComponent
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
        HomeRoutingModule
    ]
})

export class HomeModule { }