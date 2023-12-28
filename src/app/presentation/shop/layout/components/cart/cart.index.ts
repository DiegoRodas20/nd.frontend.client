import { CartComponent } from "./cart.component";
import { BodyCartComponent } from "./components/body-cart/body-cart.component";
import { ProductCartComponent } from "./components/body-cart/components/product-cart/product-cart.component";
import { FooterCartComponent } from "./components/footer-cart/footer-cart.component";
import { HeaderCartComponent } from "./components/header-cart/header-cart.component";

export const CART_COMPONENTS = [
  CartComponent,
  HeaderCartComponent,
  BodyCartComponent,
  FooterCartComponent,
  ProductCartComponent
];