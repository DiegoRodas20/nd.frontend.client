import { UseCasePromise } from "src/app/application/base/use-case-promise.base";

export abstract class IncrementQuantityProductCartCommand implements UseCasePromise<string, boolean> {

    abstract execute(idProductCart: string): Promise<boolean>

}