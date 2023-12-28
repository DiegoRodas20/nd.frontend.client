import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-rating-star',
    templateUrl: 'rating-star.component.html',
    styleUrls: ['./rating-star.component.scss']
})

export class RatingStarComponent implements OnInit {

    @Input() rating: number = 0
    stars: number[] = new Array(5)

    constructor() { }

    ngOnInit() { }

}