import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import Swiper from 'swiper';
import { EffectFade, Pagination } from 'swiper/modules';

@Component({
    selector: 'app-banner-home',
    templateUrl: 'banner-home.component.html',
    styleUrls: ['./banner-home.component.scss'],
})

export class BannerHomeComponent implements OnInit {

    @ViewChild('swiperContainer') swiperContainer!: ElementRef;
    public swiperInstance: Swiper | undefined;
    public swiperIndex: number = 0;

    public HomeSliderData = [
        {
            id: 1,
            pre_title: { text: "Starting at", price: 274 },
            title: "The best tablet Collection 2023",
            subtitle: {
                text_1: "Exclusive offer ",
                percent: 35,
                text_2: "off this week",
            },
            img: "/assets/img/slider/slider-img-1.png",
            green_bg: true,
        },
        {
            id: 2,
            pre_title: { text: "Starting at", price: 999 },
            title: "The best note book collection 2023",
            subtitle: {
                text_1: "Exclusive offer ",
                percent: 10,
                text_2: "off this week",
            },
            img: "/assets/img/slider/slider-img-2.png",
            green_bg: true,
        },
        {
            id: 3,
            pre_title: { text: "Starting at", price: 999 },
            title: "The best note book collection 2023",
            subtitle: {
                text_1: "Exclusive offer ",
                percent: 10,
                text_2: "off this week",
            },
            img: "/assets/img/slider/slider-img-3.png",
            is_light: true,
        },
    ];

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        if (this.swiperContainer) {
            this.swiperInstance = new Swiper('.slider-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: false,
                effect: 'fade',
                modules: [EffectFade, Pagination],
                pagination: {
                    el: ".slider-dot",
                    clickable: true
                },
                on: {
                    slideChange: () => {
                        this.swiperIndex = this.swiperInstance?.realIndex || 0;
                    }
                }
            })
        }
    }
}
