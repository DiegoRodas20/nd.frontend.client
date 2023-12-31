import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NiceSelectComponent } from './components/nice-select/nice-select.component';
import { ProductEmptyComponent } from './components/product-empty/product-empty.component';
import { RatingStarComponent } from './components/rating-star/rating-star.component';
import { FocusInputDirective } from './directives/focus-input.directive';
import { RouterModule } from '@angular/router';


const COMPONENTS = [
    RatingStarComponent,
    ProductEmptyComponent,
    NiceSelectComponent
]

const DIRECTIVES = [
    FocusInputDirective
]

@NgModule({
    declarations: [
        COMPONENTS,
        DIRECTIVES
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        COMPONENTS,
        DIRECTIVES
    ]
})

export class SharedModule { }
