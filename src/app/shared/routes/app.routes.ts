import { APP_PATH, ORDER_PATH, PRODUCT_PATH, SHOP_PATH } from "./path.routes"

// SHOP
export const HOME_ROUTE = `/${APP_PATH.SHOP}/${SHOP_PATH.HOME}`

export const STORE_ROUTE = `/${APP_PATH.SHOP}/${SHOP_PATH.PRODUCTS}/${PRODUCT_PATH.STORE}`
export const PRODUCT_DETAIL_ROUTE = `/${APP_PATH.SHOP}/${SHOP_PATH.PRODUCTS}/${PRODUCT_PATH.PRODUCT_DETAIL}`
export const CATEGORIES_ROUTE = `/${APP_PATH.SHOP}/${SHOP_PATH.PRODUCTS}/${PRODUCT_PATH.CATEGORIES}`
export const WISH_LIST_ROUTE = `/${APP_PATH.SHOP}/${SHOP_PATH.PRODUCTS}/${PRODUCT_PATH.WISH_LIST}`

export const CHECK_OUT_ROUTE = `/${APP_PATH.SHOP}/${SHOP_PATH.ORDERS}/${ORDER_PATH.CHECK_OUT}`
export const ORDER_TRACK_ROUTE = `/${APP_PATH.SHOP}/${SHOP_PATH.ORDERS}/${ORDER_PATH.ORDER_TRACK}`
export const ORDERS_CART_ROUTE = `/${APP_PATH.SHOP}/${SHOP_PATH.ORDERS}/${ORDER_PATH.ORDER_CART}`

// CLIENT