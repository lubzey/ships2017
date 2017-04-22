import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ShipSearchService } from '../services/ship-search.service';
import { Ship } from '../models/ship';

@Component({
    moduleId: module.id,
    selector: 'ship-search',
    templateUrl: 'ship-search.component.html',
    styleUrls: ['ship-search.component.css'],
    providers: [ShipSearchService]
})
export class ShipSearchComponent implements OnInit {
    ships: Observable<Ship[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private shipSearchService: ShipSearchService,
        private router: Router) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.ships = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.shipSearchService.search(term)
                // or the observable of empty ships if no search term
                : Observable.of<Ship[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Ship[]>([]);
            });
    }
    
    gotoDetail(ship: Ship): void {
        let link = ['/detail', ship.id];
        this.router.navigate(link);
    }
}
