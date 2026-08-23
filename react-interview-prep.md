# React Interview Prep — Basic to Advanced (5–6 LPA Frontend Role)

---

## 1. Fundamentals

### What is React?
- A **library** (not framework) for building UI using a **component-based** architecture.
- Uses a **Virtual DOM** to minimize direct DOM manipulation for performance.
- Declarative — you describe *what* the UI should look like for a given state, React handles the *how*.

### JSX
- Syntax extension that lets you write HTML-like code in JS.
- Compiles to `React.createElement(type, props, children)` calls under the hood.
- Rules: one root element (or Fragment `<>...</>`), `className` instead of `class`, `htmlFor` instead of `for`, camelCase attributes (`onClick`, `tabIndex`).

### Components
```jsx
// Functional component (standard today)
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

// Class component (legacy, but still asked conceptually)
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Props vs State (classic question)
| | Props | State |
|---|---|---|
| Mutability | Read-only (immutable) | Mutable (via setter) |
| Owner | Passed from parent | Owned by the component itself |
| Purpose | Configure a component | Track data that changes over time |

---

## 2. Rendering & the Virtual DOM

- React builds a **Virtual DOM** tree, diffs it against the previous tree (**reconciliation**), and only patches the real DOM where needed.
- **Keys** in lists help React identify which items changed/added/removed — never use array index as key if list order can change.
```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```
- **Reconciliation algorithm**: compares elements by type first — different type = whole subtree rebuilt; same type = props/attributes diffed and updated in place.

---

## 3. Hooks (core of modern React — expect deep questions here)

### `useState`
```jsx
const [count, setCount] = useState(0);
setCount(prev => prev + 1); // functional update — safer for async/batched updates
```

### `useEffect`
```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(timer); // cleanup function
}, [dependency]); // dependency array controls when effect re-runs
```
- Empty `[]` → runs once on mount.
- No array → runs on every render.
- Cleanup function → runs before next effect execution and on unmount (prevents memory leaks).

### `useRef`
```jsx
const inputRef = useRef(null);
inputRef.current.focus();
```
- Persists a mutable value across renders **without causing re-render** when changed.
- Common uses: DOM references, storing previous values, timers/intervals.

### `useContext`
```jsx
const ThemeContext = createContext("light");
const theme = useContext(ThemeContext);
```
- Avoids **prop drilling** (passing props through many intermediate components).

### `useMemo` vs `useCallback` (very common question)
```jsx
const expensiveValue = useMemo(() => computeHeavy(data), [data]); // memoizes a VALUE
const memoizedFn = useCallback(() => doSomething(id), [id]);       // memoizes a FUNCTION
```
Both prevent unnecessary recalculation/re-creation on every render — useful when passing callbacks/values to memoized child components (`React.memo`).

### `useReducer`
```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    default: return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });
```
Preferred over `useState` when state logic is complex or the next state depends on multiple sub-values.

### Custom Hooks
```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);
  return data;
}
```
Key rule to know: **Rules of Hooks** — only call hooks at top level (not in loops/conditions), only call from React functions.

---

## 4. Component Communication & Composition

- **Parent → Child**: via props.
- **Child → Parent**: pass a callback function as a prop.
- **Sibling → Sibling**: lift state up to common parent.
- **Deeply nested**: Context API or state management library (Redux, Zustand).

### Children & Composition
```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
// <Card><h1>Title</h1></Card>
```

### Higher-Order Components (HOC) — legacy pattern, still asked
```jsx
function withLogger(Component) {
  return function Wrapped(props) {
    console.log("rendered", props);
    return <Component {...props} />;
  };
}
```

### Render Props (older pattern, know conceptually)
```jsx
<DataProvider render={data => <Display data={data} />} />
```
Both HOCs and render props have largely been replaced by **custom hooks** in modern React.

---

## 5. Lifecycle (map class methods to hooks — commonly asked)

| Class Lifecycle | Hook Equivalent |
|---|---|
| `componentDidMount` | `useEffect(() => {...}, [])` |
| `componentDidUpdate` | `useEffect(() => {...}, [dep])` |
| `componentWillUnmount` | `useEffect(() => { return () => {...} }, [])` |
| `shouldComponentUpdate` | `React.memo` / `useMemo` |

---

## 6. Performance Optimization

- **`React.memo`** — memoizes a component, skips re-render if props haven't changed:
```jsx
const Child = React.memo(function Child({ value }) { ... });
```
- **`useMemo`/`useCallback`** — avoid recreating values/functions passed to memoized children.
- **Code splitting** with `React.lazy` + `Suspense`:
```jsx
const Profile = React.lazy(() => import("./Profile"));
<Suspense fallback={<Spinner />}><Profile /></Suspense>
```
- **Virtualization** for long lists (e.g., `react-window`) — render only visible items.
- Avoid inline object/function props where possible (`onClick={() => fn()}` creates a new function every render).
- **Key prop stability** — wrong keys cause unnecessary unmount/remount.

---

## 7. State Management

- Local state → `useState`/`useReducer`.
- Shared/global state → Context API (small apps) or **Redux/Zustand/Recoil** (larger apps).
- **Redux core concepts** (often asked at this level):
  - Single store, actions, reducers (pure functions), dispatch.
  - `useSelector` / `useDispatch` with Redux Toolkit (`createSlice`, `configureStore`).
- Know **when Context is not enough**: Context re-renders all consumers on value change — not optimized for frequent updates like Redux with selectors.

---

## 8. Forms & Events

```jsx
function Form() {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={e => setValue(e.target.value)} />
    </form>
  );
}
```
- **Controlled** (value driven by React state) vs **uncontrolled** components (use `ref` to read DOM value directly, `defaultValue`).
- React's **SyntheticEvent** — a cross-browser wrapper around native events.

---

## 9. Error Handling

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.log(error, info); }
  render() {
    return this.state.hasError ? <h1>Something went wrong</h1> : this.props.children;
  }
}
```
Note: Error Boundaries **must** be class components (no hook equivalent yet), and they don't catch errors in event handlers, async code, or SSR.

---

## 10. Advanced / Modern Concepts

### Fiber Architecture
- React's internal reconciliation engine (since React 16) — enables **incremental rendering**, splitting work into units and pausing/resuming, prioritizing urgent updates (e.g., typing) over less urgent ones (e.g., list re-render).

### Concurrent Features (React 18+)
- `useTransition` — mark updates as non-urgent so UI stays responsive:
```jsx
const [isPending, startTransition] = useTransition();
startTransition(() => setSearchQuery(input));
```
- `useDeferredValue` — defer re-rendering an expensive value until urgent updates finish.
- **Automatic batching** — multiple state updates in the same event (even inside promises/timeouts) are batched into a single re-render.

### Server Components (Next.js context, good to mention)
- React Server Components render on the server, ship no JS to the client, reduce bundle size — distinct from SSR (which still hydrates on client).

### Portals
```jsx
ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"));
```
Renders children into a DOM node outside the parent hierarchy — used for modals, tooltips.

### Strict Mode
- Dev-only tool that intentionally double-invokes some functions (like component bodies) to help surface side-effect bugs.

---

## 11. Rapid-Fire Common Interview Questions

1. What is the Virtual DOM and how does reconciliation work?
2. Difference between controlled and uncontrolled components?
3. Why shouldn't you use array index as a key?
4. Difference between `useMemo` and `useCallback`?
5. What are the Rules of Hooks?
6. How does `useEffect` cleanup work, and when does it run?
7. What causes unnecessary re-renders, and how do you prevent them?
8. Difference between Context API and Redux — when would you choose one over the other?
9. What is prop drilling and how do you avoid it?
10. Explain the difference between SSR, CSR, and Server Components.
11. What is an Error Boundary, and what can't it catch?
12. What is React Fiber, and why was it introduced?
13. How does React 18's automatic batching differ from React 17?

---

## Quick Prep Strategy
- **Day 1**: Component basics, props vs state, JSX rules, keys/lists — asked in every interview.
- **Day 2**: Hooks deep-dive — `useState`, `useEffect`, `useRef`, `useMemo`/`useCallback` — practice explaining *why*, not just syntax.
- **Day 3**: Component communication patterns (lifting state, Context, HOC/render props conceptually) + forms (controlled/uncontrolled).
- **Day 4**: Performance (`React.memo`, code splitting, virtualization) + state management (Redux/Context tradeoffs).
- **Day 5**: Advanced topics — Fiber, concurrent features (`useTransition`), Server Components, Error Boundaries — this is what shows senior-leaning depth at this level.
- Be ready to **build something live** — a counter, a todo list, or a fetch-and-display component — most interviews at this level include a coding round, not just theory.
