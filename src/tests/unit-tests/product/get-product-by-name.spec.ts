import { GetProductsByNameQuery } from "src/app/application/product/queries/get-product-by-name/get-products-by-name.query";
import { GetProductsByNameQueryHandler } from "src/app/application/product/queries/get-product-by-name/get-products-by-name.query-handler";
import { Product } from "src/app/domain/product/product.model";
import { IProductRepository } from "src/app/domain/product/product.repository";

// describe('Get Product By Name Use Case', () => {

//     let getProductById: GetProductsByNameQuery;
//     let productRepository: jasmine.SpyObj<IProductRepository>;

//     // Arrange
//     beforeEach(() => { })

//     // Act
//     it('Get the correct type of product', () => { 


//     })


// })

describe('GetProductsByNameQueryHandler', () => {
    let queryHandler: GetProductsByNameQueryHandler;
    let productRepositorySpy: jasmine.SpyObj<IProductRepository>;
  
    beforeEach(() => {
      productRepositorySpy = jasmine.createSpyObj('IProductRepository', ['getProducts']);
      queryHandler = new GetProductsByNameQueryHandler(productRepositorySpy);
    });
  
    it('should return filtered products when a search term matches product names', async () => {
      const searchTerm = 'apple';
      const products = [
        { id: 1, name: 'Apple iPhone', price: 1000 },
        { id: 2, name: 'Samsung Galaxy', price: 800 }
      ] as Product[];
  
      productRepositorySpy.getProducts.and.returnValue(await Promise.resolve(products));
  
      const filteredProducts = await queryHandler.execute(searchTerm);
  
      expect(filteredProducts.length).toBe(1);
      expect(filteredProducts[0].name).toBe('Apple iPhone');
    });
  
    it('should return an empty array when no products match the search term', async () => {
      const searchTerm = 'banana';
      const products = [
        { id: 1, name: 'Apple iPhone', price: 1000 },
        { id: 2, name: 'Samsung Galaxy', price: 800 }
      ] as Product[];
  
      productRepositorySpy.getProducts.and.returnValue(await Promise.resolve(products));
  
      const filteredProducts = await queryHandler.execute(searchTerm);
  
      expect(filteredProducts.length).toBe(0);
    });
  });