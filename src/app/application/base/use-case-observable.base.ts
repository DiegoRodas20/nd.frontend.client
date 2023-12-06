import { Observable } from "rxjs";

export interface UseCaseObservable<S, T> {

    execute(params: S): Observable<T>
}