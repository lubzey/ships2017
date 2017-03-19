import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroService } from './hero.service';

import { AppComponent } from './app.component';
import { HeroSearchComponent } from './hero-search.component';

import { DashboardComponent } from './+home/dashboard.component';
import { AboutComponent } from "./+about/about.component";
import { ShipsComponent } from "./+ships/ships.component";
import { HeroDetailComponent } from './+detail/hero-detail.component';

import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent} from './shared/navbar/navbar.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        FooterComponent,
        NavbarComponent,
        AboutComponent,
        ShipsComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
