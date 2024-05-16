import { Injectable } from '@angular/core';
import { APP_ROUTES } from '../routes/app.routes';

@Injectable({
    providedIn: 'root',
})
export class RouteService {

    constructor() { }

    public get homeRoute(): string {
        return APP_ROUTES.HOME
    }

    public get storeRoute(): string {
        return APP_ROUTES.STORE;
    }

    public productDetailRoute(idProduct: number): string {
        return `${APP_ROUTES.PRODUCT_DETAIL}/${idProduct}`
    }

    public get orderCartRoute(): string {
        return APP_ROUTES.ORDERS_CART;
    }

    public get checkOutRoute(): string {
        return APP_ROUTES.CHECK_OUT;
    }

    public get orderTrackRoute(): string {
        return APP_ROUTES.ORDER_TRACK;
    }

    public get wishListRoute(): string {
        return APP_ROUTES.WISH_LIST;
    }

}