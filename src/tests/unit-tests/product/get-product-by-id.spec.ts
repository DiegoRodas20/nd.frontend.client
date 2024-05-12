import { GetProductByIdQueryHandler } from "src/app/application/product/queries/get-product-by-id/get-product-by-id.query-handler";
import { Product } from "src/app/domain/product/product.model";
import { IProductRepository } from "src/app/domain/product/product.repository";

describe('Get Product By Id Use Case', () => {
    let productRepository: jasmine.SpyObj<IProductRepository>;
    let getProductByIdQueryHandler: GetProductByIdQueryHandler;
  
    beforeEach(() => {
      productRepository = jasmine.createSpyObj('IProductRepository', ['getProductById']);
      getProductByIdQueryHandler = new GetProductByIdQueryHandler(productRepository);
    });
  
    it('should return the correct product', async () => {
      const expectedProduct: Product = {
        id: 1,
        name: 'Test Product',
        price: 10.99,
        category: '',
        description: '',
        images : [],
        rating: 4,
        status: ''
      };
  
      // Configure the mock to return the expected product
      productRepository.getProductById.and.resolveTo(expectedProduct);
  
      // Call the execute method with a test product ID
      const result = await getProductByIdQueryHandler.execute(1);
  
      // Expect the result to be the expected product
      expect(result).toEqual(expectedProduct);
    });
  });