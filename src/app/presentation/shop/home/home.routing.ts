import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from "src/app/shared/routes/app.routes";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            url: APP_ROUTES.HOME,
            name: 'Inicio',
            isActive: false
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class HomeRoutingModule { }