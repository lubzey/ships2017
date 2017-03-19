import { Component, Input, OnInit } from '@angular/core';

import { Ship } from '../models/ship';


@Component({
    selector: 'carousel-basic',
    templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
    @Input() hero: Ship;

    constructor() { }

    ngOnInit(): void {
    }
}