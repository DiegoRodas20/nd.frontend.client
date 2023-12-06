import { UseCasePromise } from "src/app/application/base/use-case-promise.base";

export abstract class RegisterProductCartCommand implements UseCasePromise<number, boolean> {

    abstract execute(idProduct: number): Promise<boolean>

}