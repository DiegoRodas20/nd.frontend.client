import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { RegisterProductCartCommand } from "src/app/application/cart/commands/register-product-cart/register-product-cart.command";
import { RegisterProductWishlistCommand } from "src/app/application/wishlist/commands/register-product-wishlist/register-product-wishlist.command";
import { Product } from "src/app/domain/entities/product.model";
import { RouteService } from "src/app/shared/services/route.service";

@Component({
    selector: 'app-product-catalog',
    templateUrl: 'product-catalog.component.html',
    styleUrls: ['./product-catalog.component.scss']
})

export class ProductCatalogComponent implements OnInit {

    private _isAdding: boolean = false
    @Input() product!: Product
    @ViewChild('addToCartLayer') addToCartLayer!: ElementRef;
    @ViewChild('displayCard') displayCard!: ElementRef;

    constructor(
        public routeService: RouteService,
        private _registerProductCart: RegisterProductCartCommand,
        private _registerProductWishlist: RegisterProductWishlistCommand
    ) { }

    ngOnInit() { }

    public async registerProductCart(product: Product) {

        var result = await this._registerProductCart.execute(product.id)

        if (result && !this._isAdding) {
            this.animateCard()
        }
    }

    public async registerProductWishlist(product: Product) {

        await this._registerProductWishlist.execute(product.id)
    }

    private animateCard() {

        this.addToCartLayer.nativeElement.style.visibility = 'visible';
        this.addToCartLayer.nativeElement.style.opacity = 1;
        this._isAdding = true

        const DOMrect = this.displayCard.nativeElement.getBoundingClientRect();
        const offsetX = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - DOMrect.x - 50;
        const offsetY = -DOMrect.y + 50;
        const offsetPath = `path("m 150 140 Q ${offsetX / 2} ${offsetY - 100} ${offsetX} ${offsetY}")`;

        this.addToCartLayer.nativeElement.style.offsetPath = offsetPath;

        const addToCartAnimation = this.addToCartLayer.nativeElement.animate(
            [
                {
                    offsetDistance: 0,
                    offsetRotate: '0deg',
                },
                {
                    offsetDistance: '100%',
                    transform: 'scale(0,0)',
                    offsetRotate: '0deg',
                    opacity: 0,
                },
            ],
            {
                duration: 800,
                easing: 'ease-in-out',
                fill: 'none',
            }
        );

        addToCartAnimation.onfinish = () => {
            this.addToCartLayer.nativeElement.style.visibility = 'hidden';
            this.addToCartLayer.nativeElement.style.opacity = 0;
            this._isAdding = false
        };
    }

}
