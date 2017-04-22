import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Ship } from '../../shared/models/ship';

@Injectable()
export class ShipService {

    private shipsUrl = 'app/ships';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    create(name: string): Promise<Ship> {
        return this.http
            .post(this.shipsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(hero: Ship): Promise<Ship> {
        const url = `${this.shipsUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.shipsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    getShips(): Promise<Ship[]> {
        return this.http.get(this.shipsUrl)
            .toPromise()
            .then(response => response.json().data as Ship[])
            .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Ship[]> {
        return new Promise<Ship[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getShips());
    }

    getShip(id: number): Promise<Ship> {
        return this.getShips()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}