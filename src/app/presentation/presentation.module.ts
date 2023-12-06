import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ApplicationModule } from '../application/application.module';
import { DomainModule } from '../domain/domain.module';
import { PresentationComponent } from './presentation.component';
import { PresentationRoutingModule } from './presentation.routing';


@NgModule({
    declarations: [
        PresentationComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        PresentationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ApplicationModule,
        DomainModule,
        ToastrModule.forRoot({}),
    ],
    providers: [],
    bootstrap: [PresentationComponent]
})

export class PresentationModule { }
