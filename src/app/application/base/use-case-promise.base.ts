export interface UseCasePromise<S, T> {

    execute(params: S): Promise<T>
}