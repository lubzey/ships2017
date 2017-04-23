import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from "./+about/about.component";
import { ShipsComponent } from "./+ships/ships.component";
import { ShipDetailComponent } from './+detail/ship-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/ships', pathMatch: 'full' },
    { path: 'detail/:id', component: ShipDetailComponent },
    { path: 'ships', component: ShipsComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
