# Maybe Monad In Typescript

maybe monad implementation in typescript with great types and some utils

# Examples

## .map()
```ts
maybe(42).map(num => num * 2).map(console.log) // Output: 84
```

## .asyncMap()
```ts
const sleep = (ms: number): Promise<number> =>
  new Promise((res) => setTimeout(() => res(ms), ms));

maybe(1000)
  .asyncMap((ms) => sleep(ms))
  .then((maybeTime) => {
    maybeTime.map(console.log); // 1000 after 1 second
  });
```

## .flatMap()
```ts
maybe(42).flatMap((num) => maybe(num + 5)).map(console.log) // 47

const getNumber = () => Math.random() > 0.5 ? 1 : undefined

maybe(42)
  .flatMap((num) =>
    undefinedToMaybe(getNumber()).map((secondNum) => secondNum + num),
  )
  .map(console.log) // 43 or nothing
```

## .equals()
```ts
const a = maybe(24)
const b = maybe(24)
const c = maybe('Hello!')

console.log(a.equals(b)) // true
console.log(a.equals(c)) // false
```


## .getOrElse()
```ts
const value = maybe<string>(null).getOrElse('default string') // value is 'default string'
const value1 = maybe<string>('some string').getOrElse('default string') // value is 'some string'
```

## .flatGetOrElse()
```ts
const value = maybe<number>(null).flatGetOrElse(maybe(42)) // value is 42
const value = maybe(53).flatGetOrElse(maybe(42)) // value is 42
```

## .merge()
```ts
const a = maybe('something')
const b = maybe('something again')

const merged = a.merge(b).map(console.log) // { left: "something", right: "somethibg again" }
```
if something doesn't have value
```ts
const a = maybe<string>(null)
const b = maybe('something again')

const merged = a.merge(b).map(console.log) // nothing happens
```
