import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Wishlist } from "src/app/domain/wishlist/wishlist.model";
import { v4 as uuidv4 } from 'uuid';
import { RegisterProductWishlistCommand } from "./register-product-wishlist.command";
import { IProductRepository } from "src/app/domain/product/product.repository";
import { IWishlistRepository } from "src/app/domain/wishlist/wishlist.repository";

@Injectable()
export class RegisterProductWishlistCommandHandler implements RegisterProductWishlistCommand {

    constructor(
        private _alertService: ToastrService,
        private _productRepository: IProductRepository,
        private _wishlistRepository: IWishlistRepository
    ) { }

    async execute(idProduct: number): Promise<boolean> {

        const productWishlistExist = await this._wishlistRepository.getProductWishlistByProductId(idProduct)

        if (productWishlistExist) {

            this._alertService.warning(`Ya se encuentra en el wishlist`)
            return Promise.resolve(false)
        }

        const productWishlist = await this.createProductWishlistFromProduct(idProduct)

        const result = await this._wishlistRepository.registerProductWishlist(productWishlist)

        if (result) {
            this._alertService.success(`Se añadio correctamente`)
        }

        return Promise.resolve(true)
    }

    private async createProductWishlistFromProduct(idProduct: number): Promise<Wishlist> {

        const product = await this._productRepository.getProductById(idProduct)

        const productWishlist: Wishlist = {
            id: uuidv4(),
            idProduct: product.id,
            image: product.images[0],
            name: product.name,
            price: product.price,
            status: product.status,
            rating: product.rating
        };

        return productWishlist;
    }
}