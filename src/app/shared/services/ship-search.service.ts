import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Ship } from '.././models/ship';

@Injectable()
export class ShipSearchService {

    constructor(private http: Http) { }
    
    search(term: string): Observable<Ship[]> {
        return this.http
            .get(`app/ships/?name=${term}`)
            .map((r: Response) => r.json().data as Ship[]);
    }
}
