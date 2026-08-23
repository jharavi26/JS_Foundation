# TypeScript Interview Prep — Basic to Advanced (5–6 LPA Frontend Role)

---

## 1. Fundamentals

### Why TypeScript?
- Superset of JavaScript — adds **static typing**, compiled (transpiled) to plain JS.
- Catches errors at **compile time** instead of runtime.
- Better IDE support (autocomplete, refactoring, inline docs).

### Basic Types
```ts
let age: number = 25;
let name: string = "Sam";
let isActive: boolean = true;
let tags: string[] = ["a", "b"];
let tuple: [string, number] = ["id", 1];
let anything: any = "avoid this";
let notSure: unknown = "safer than any";
let nothing: void = undefined;   // used for functions with no return
let neverHappens: never;         // function that always throws / infinite loop
```

### `any` vs `unknown` (common question)
- `any` — disables type checking entirely (escape hatch, avoid overusing).
- `unknown` — safer alternative; you **must narrow/check the type** before using it.
```ts
let val: unknown = "hello";
if (typeof val === "string") { val.toUpperCase(); } // OK after narrowing
```

### Type Inference
TS infers types automatically when possible:
```ts
let x = 10; // inferred as number, no need to annotate
```

---

## 2. Interfaces & Types

### Interface
```ts
interface User {
  id: number;
  name: string;
  email?: string;       // optional property
  readonly createdAt: Date; // can't be reassigned
}
```

### Type Alias
```ts
type User = {
  id: number;
  name: string;
};
```

### `interface` vs `type` (very common question)
| Feature | interface | type |
|---|---|---|
| Extending | `extends` | `&` (intersection) |
| Declaration merging | Yes (can reopen and add) | No |
| Union types | No | Yes (`type A = string \| number`) |
| Use for objects/classes | Preferred | Also works |

Rule of thumb: use `interface` for object shapes/class contracts, `type` for unions, tuples, and utility compositions.

### Extending
```ts
interface Admin extends User {
  role: string;
}
type Admin = User & { role: string };
```

---

## 3. Functions

```ts
function add(a: number, b: number): number {
  return a + b;
}

// optional & default params
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

// rest params
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

// function type
let multiply: (a: number, b: number) => number;
```

---

## 4. Union, Intersection & Literal Types

```ts
// Union — value can be one of several types
let id: string | number;

// Intersection — combines multiple types into one
type Combined = TypeA & TypeB;

// Literal types — restrict to exact values
type Direction = "up" | "down" | "left" | "right";

// Discriminated unions (very commonly asked — used for type-safe state handling)
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
  }
}
```

---

## 5. Enums

```ts
enum Role { Admin, User, Guest }       // numeric enum (0,1,2)
enum Status { Active = "ACTIVE", Inactive = "INACTIVE" } // string enum

const r: Role = Role.Admin;
```
Know the tradeoff: enums generate extra JS code; many teams prefer **union of string literals** or `as const` objects instead for lighter output.

```ts
const Role = { Admin: "ADMIN", User: "USER" } as const;
type Role = typeof Role[keyof typeof Role];
```

---

## 6. Generics (this is where interviews separate levels)

```ts
function identity<T>(arg: T): T {
  return arg;
}
identity<string>("hello");
identity(42); // inferred as number

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
}

// Generic constraints
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// Generic with default
interface Box<T = string> {
  value: T;
}
```
Be ready to explain: **generics let you write reusable, type-safe code without losing type information** — e.g., a `useFetch<T>()` hook returning `T` instead of `any`.

---

## 7. Type Narrowing & Guards

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// custom type guard
function isString(val: unknown): val is string {
  return typeof val === "string";
}

// 'in' operator narrowing
if ("radius" in shape) { /* shape is circle */ }

// instanceof narrowing
if (error instanceof Error) { console.log(error.message); }
```

---

## 8. Utility Types (frequently asked, memorize these)

```ts
Partial<T>       // all properties optional
Required<T>      // all properties required
Readonly<T>      // all properties readonly
Pick<T, K>       // pick subset of keys
Omit<T, K>       // remove subset of keys
Record<K, T>     // map of keys K to type T
Exclude<T, U>    // remove types from union
Extract<T, U>    // keep only matching types from union
ReturnType<F>    // extract return type of a function
Parameters<F>    // extract param types as tuple
```
Example:
```ts
interface User { id: number; name: string; email: string; }

type UserPreview = Pick<User, "id" | "name">;
type UserUpdate = Partial<User>;
type PublicUser = Omit<User, "email">;
```

---

## 9. Classes & OOP in TypeScript

```ts
class Person {
  private age: number;
  protected id: string;
  public name: string;
  readonly country: string = "IN";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}

// access modifiers: public (default), private (class only), protected (class + subclasses)

// shorthand constructor
class Point {
  constructor(public x: number, public y: number) {}
}

// abstract classes
abstract class Shape {
  abstract area(): number; // must be implemented by subclass
}

// implementing interfaces
interface Animal { makeSound(): void; }
class Dog implements Animal {
  makeSound() { console.log("Woof"); }
}
```

---

## 10. Advanced Types

### Mapped Types
```ts
type Readonly<T> = { readonly [K in keyof T]: T[K] };
type Optional<T> = { [K in keyof T]?: T[K] };
```

### Conditional Types
```ts
type IsString<T> = T extends string ? true : false;
type A = IsString<"hi">;  // true
type B = IsString<42>;    // false
```

### `keyof`, `typeof`, indexed access
```ts
interface User { id: number; name: string; }
type UserKeys = keyof User;         // "id" | "name"
type IdType = User["id"];           // number

const user = { id: 1, name: "Sam" };
type UserType = typeof user;        // infers { id: number; name: string }
```

### Template Literal Types
```ts
type EventName = `on${"Click" | "Hover"}`; // "onClick" | "onHover"
```

---

## 11. TypeScript with React (common in frontend interviews)

```tsx
interface Props {
  title: string;
  count?: number;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ title, count = 0, onClick }) => {
  return <button onClick={onClick}>{title} ({count})</button>;
};

// typing useState
const [user, setUser] = useState<User | null>(null);

// typing useRef
const inputRef = useRef<HTMLInputElement>(null);

// typing event handlers
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
```

---

## 12. Config & Tooling Basics

- `tsconfig.json` key options to know:
  - `strict: true` — enables all strict type-checking (mention you always enable this).
  - `target` — JS version output (e.g., `ES2020`).
  - `noImplicitAny` — errors if type can't be inferred and defaults to `any`.
  - `esModuleInterop` — smooths CommonJS/ESM imports.
- Type declaration files: `.d.ts` for adding types to plain JS libraries (`@types/package-name`).

---

## 13. Rapid-Fire Common Interview Questions

1. What's the difference between `interface` and `type`?
2. Difference between `any` and `unknown`?
3. What are generics, and why use them over `any`?
4. Explain discriminated unions with an example.
5. What is a type guard? Give an example.
6. Difference between `Pick`, `Omit`, and `Partial`?
7. What does `readonly` do, and where is it enforced (compile-time only)?
8. What is structural typing ("duck typing") in TS vs nominal typing?
9. Explain `keyof` and how it's used with generics.
10. What happens to types at runtime? (Answer: erased — TS types don't exist in compiled JS.)
11. How do you type a React component's props and state?
12. What's the difference between `enum` and a union of string literals?

---

## Quick Prep Strategy
- **Day 1**: Basic types, `interface` vs `type`, union/intersection — these are asked almost everywhere.
- **Day 2**: Generics + utility types (`Pick`, `Omit`, `Partial`, `Record`) — practice writing them from scratch.
- **Day 3**: Type narrowing, discriminated unions, type guards — shows real-world TS usage, not just syntax.
- **Day 4**: Classes/OOP + advanced types (mapped, conditional, `keyof`/`typeof`).
- **Day 5**: TypeScript + React patterns (typing props, state, refs, events) since this is a frontend role — expect at least one question here.
- Practice writing a small typed component or utility function live — interviewers often ask you to type an untyped JS snippet on the spot.
