import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { CART_COMPONENTS } from "./components/cart/cart.index";
import { HEADER_COMPONENTS } from "./components/header/header.index";
import { MobileMenuComponent } from "./components/mobile-menu/mobile-menu.component";
import { OptionsComponent } from "./components/options/options.component";
import { OverlayComponent } from "./components/overlay/overlay.component";
import { SearchModalComponent } from "./components/search-modal/search-modal.component";
import { SidebarMenuComponent } from "./components/sidebar-menu/sidebar-menu.component";
import { LayoutComponent } from "./layout.component";


export const LAYOUT_COMPONENTS = [
    LayoutComponent,
    BreadcrumbComponent,
    SidebarMenuComponent,
    OverlayComponent,
    SearchModalComponent,
    MobileMenuComponent,
    OptionsComponent,
    HEADER_COMPONENTS,
    CART_COMPONENTS
]