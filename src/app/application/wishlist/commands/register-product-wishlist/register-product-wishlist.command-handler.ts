import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Product } from "src/app/domain/entities/product.model";
import { Wishlist } from "src/app/domain/entities/wishlist.model";
import { ProductRepository } from "src/app/domain/repositories/product.repository";
import { WishlistRepository } from "src/app/domain/repositories/wishlist.repository";
import { v4 as uuidv4 } from 'uuid';
import { RegisterProductWishlistCommand } from "./register-product-wishlist.command";

@Injectable()
export class RegisterProductWishlistCommandHandler implements RegisterProductWishlistCommand {

    constructor(
        private _alertService: ToastrService,
        private _productRepository: ProductRepository,
        private _wishlistRepository: WishlistRepository
    ) { }

    async execute(idProduct: number): Promise<boolean> {

        if (this.isProductAlreadyInWishlist(idProduct)) {
            this._alertService.warning(`Ya se encuentra en el wishlist`)
            return false
        }

        const product = await this._productRepository.getProductById(idProduct)

        const productWishlist = this.createProductWishlistFromProduct(product)

        var idProductWishlist = await this._wishlistRepository.registerProductWishlist(productWishlist)

        if (idProductWishlist) {
            this._alertService.success(`Se añadio correctamente`)
        }

        return true
    }

    private isProductAlreadyInWishlist(idProduct: number): boolean {

        const result = this._wishlistRepository.getProductWishlistByProductId(idProduct) 
                       ? true 
                       : false

        return result
    }

    public createProductWishlistFromProduct(product: Product): Wishlist {

        const productWishlist: Wishlist = {
            id: uuidv4(),
            idProduct: product.id,
            image: product.images[0],
            name: product.name,
            price: product.price,
            quantity: 1,
            status: product.status
        };

        return productWishlist;
    }
}