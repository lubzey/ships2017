import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CarouselModule } from 'ng2-bootstrap';
import './rxjs-extensions';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/services/in-memory-data.service';
import { ShipService } from './shared/services/ship.service';

import { AppComponent } from './shared/app/app.component';

import { AboutComponent } from "./+about/about.component";
import { ShipsComponent } from "./+ships/ships.component";
import { ShipDetailComponent } from './+detail/ship-detail.component';

import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CarouselComponent } from './shared/carousel/carousel.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        CarouselModule
    ],
    declarations: [
        AppComponent,
        ShipDetailComponent,
        FooterComponent,
        NavbarComponent,
        AboutComponent,
        ShipsComponent,
        CarouselComponent
    ],
    providers: [ShipService],
    bootstrap: [AppComponent]
})
export class AppModule { }
