import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/domain/entities/cart.model';
import { CartRepository } from 'src/app/domain/repositories/cart.repository';

export class CartLocalStorage implements CartRepository {
    
    private localStorageKey: string = 'cart_products';
    private items = new BehaviorSubject<Cart[]>([]);
    private items$ = this.items.asObservable();

    constructor() {
        this.setProductsCart();
    }

    private setProductsCart() {
        const storedData = localStorage.getItem(this.localStorageKey);

        if (storedData) this.items.next(JSON.parse(storedData));
    }

    public getProductsCart(): Observable<Cart[]> {
        return this.items$;
    }

    public getProductCartByProductId(idProduct: number): Cart | any {
        
        const productCart = this.items.value.find(
            (productCart: Cart) => productCart.idProduct === idProduct
        );

        return productCart;
    }

    public updateProductsCart(productsCart: Cart[]): Promise<boolean> {
        
        this.items.next(productsCart);

        localStorage.setItem(this.localStorageKey, JSON.stringify(productsCart));

        return new Promise((resolve) => resolve(true));
    }
}
