export interface Action<T = any> {
  type: T
}

export interface AnyAction extends Action {
  [extraProps: string]: any
}

export type Reduce<S = any, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S

export interface Dispatch<A extends Action = AnyAction> {
  (action: A): A
}