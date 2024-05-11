import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ApplicationModule } from '../application/application.module';
import { PresentationComponent } from './presentation.component';
import { PresentationRoutingModule } from './presentation.routing';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';


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
        InfrastructureModule,
        ToastrModule.forRoot({
            positionClass: 'toast-top-center',
            progressBar: true,
        }),
    ],
    providers: [],
    bootstrap: [PresentationComponent]
})

export class PresentationModule { }
