declare module "maybe.ts" {
  export interface Maybe<T> {
    map: <R>(fn: (_: T) => R) => Maybe<R>;
    equals: (m: Maybe<unknown>) => boolean;
    flatMap: <R>(f: (v: T) => Maybe<R>) => Maybe<R>;
    getOrElse: (dv: T) => T;
    flatGetOrElse: <R>(dv: R) => R | Maybe<T>;
    asyncMap: <R>(fn: (v: T) => Promise<R>) => Promise<Maybe<R>>;
    merge: <R>(om: Maybe<R>) => Maybe<{ left: T; right: R }>;
    value: T | null;
  }

  export function maybe<T>(value: T | null): Maybe<T>;
}
