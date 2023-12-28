import { UseCasePromise } from 'src/app/application/base/use-case-promise.base';

export abstract class UpdateProductCartCommand
    implements
    UseCasePromise<{ idProductCart: string; increment: boolean }, boolean>
{
    abstract execute(params: {
        idProductCart: string;
        increment: boolean;
    }): Promise<boolean>;
}
