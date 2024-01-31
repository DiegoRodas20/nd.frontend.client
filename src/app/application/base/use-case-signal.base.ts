import { Signal } from "@angular/core";

export interface UseCaseSignal<S, T> {

    execute(params: S): Signal<T>
}