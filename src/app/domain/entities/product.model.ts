export interface Product {
    id: number,
    name: string,
    category: string,
    images: string[],
    description: string,
    status: string,
    price: number,
    priceAfter?: number,
    rating: number
}