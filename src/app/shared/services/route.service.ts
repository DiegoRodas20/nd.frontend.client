import { Injectable } from '@angular/core';
import {
    CATALOG_ROUTE,
    CHECK_OUT_ROUTE,
    HOME_ROUTE,
    ORDERS_CART_ROUTE,
    ORDER_TRACK_ROUTE,
    PRODUCT_DETAIL_ROUTE,
    WISH_LIST_ROUTE,
} from '../routes/app.routes';

@Injectable({
    providedIn: 'root',
})

export class RouteService {
    public homeRoute: string = HOME_ROUTE;
    public catalogRoute: string = CATALOG_ROUTE;
    public productDetailRoute: string = PRODUCT_DETAIL_ROUTE;
    public orderCartRoute: string = ORDERS_CART_ROUTE;
    public checkOutRoute: string = CHECK_OUT_ROUTE;
    public orderTrackRoute: string = ORDER_TRACK_ROUTE;
    public wishListRoute: string = WISH_LIST_ROUTE;
}
