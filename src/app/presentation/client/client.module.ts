import { CommonModule } from "@angular/common";
import { NgModule, Type } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClientRoutingModule } from "./client.routing";

const COMPONENTS: any[] | Type<any> = []

@NgModule({
    declarations: [
        COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ClientRoutingModule
    ]
})

export class ClientModule { }