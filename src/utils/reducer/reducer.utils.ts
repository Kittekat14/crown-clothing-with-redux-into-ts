import { AnyAction } from 'redux';

// 2 different action types:
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// overloading the types of createAction func parameters (must always have same amout of these parameters)
// depending on if we have a payload or not it returns Action or ActionWithPayload
// T: we know that it's a string, so we already extend it
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  // payload is expected in the implementation but empty with no value
  payload: void
): Action<T>;

// above are only the return types; below is the actual implementation
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
