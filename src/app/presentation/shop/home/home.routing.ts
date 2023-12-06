import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HOME_ROUTE } from "src/app/shared/routes/app.routes";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            url: HOME_ROUTE,
            name: 'Inicio',
            isActive: false
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class HomeRoutingModule { }