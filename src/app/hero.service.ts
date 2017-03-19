import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Ship } from './shared/models/ship';

@Injectable()
export class HeroService {

    private heroesUrl = 'app/heroes';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    create(name: string): Promise<Ship> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(hero: Ship): Promise<Ship> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    getHeroes(): Promise<Ship[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Ship[])
            .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Ship[]> {
        return new Promise<Ship[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }

    getHero(id: number): Promise<Ship> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}