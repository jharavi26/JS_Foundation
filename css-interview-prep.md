# CSS Interview Prep — Basic to Advanced (5–6 LPA Frontend Role)

---

## 1. Fundamentals

### Syntax & Selectors
- **Selector types**: element (`div`), class (`.card`), ID (`#header`), attribute (`[type="text"]`), universal (`*`).
- **Combinators**:
  - `A B` — descendant
  - `A > B` — direct child
  - `A + B` — adjacent sibling
  - `A ~ B` — general sibling
- **Pseudo-classes**: `:hover`, `:focus`, `:nth-child(n)`, `:first-child`, `:last-child`, `:not()`, `:checked`, `:disabled`.
- **Pseudo-elements**: `::before`, `::after`, `::first-line`, `::first-letter`, `::placeholder`.

### Specificity (very common question)
Order of priority (low → high):
```
inline style (1000) > ID (100) > class/attribute/pseudo-class (10) > element/pseudo-element (1)
```
`!important` overrides all specificity — but avoid using it; know **why** it's bad (breaks cascade, hard to debug).

### The Box Model
```
content → padding → border → margin
```
- `box-sizing: content-box` (default) vs `border-box` (width includes padding+border — almost always preferred).
- Margin collapsing: adjacent vertical margins of block elements collapse to the larger one.

### Units
- **Absolute**: `px`
- **Relative**: `%`, `em` (relative to parent font-size), `rem` (relative to root font-size), `vh`/`vw` (viewport), `vmin`/`vmax`
- Know **why `rem` is preferred** for scalability/accessibility over `em`/`px`.

---

## 2. Layout Systems

### `display` property
`block`, `inline`, `inline-block`, `none`, `flex`, `grid`, `contents`.
Interview trap: difference between `display:none` vs `visibility:hidden` vs `opacity:0` (space retention, event handling, accessibility).

### Positioning
- `static` (default), `relative`, `absolute`, `fixed`, `sticky`.
- Key concept: `absolute` positions relative to the **nearest positioned ancestor** (non-static). `fixed` is relative to viewport. `sticky` toggles between relative/fixed based on scroll.

### Flexbox (must know cold)
- Container props: `display:flex`, `flex-direction`, `justify-content`, `align-items`, `align-content`, `flex-wrap`, `gap`.
- Item props: `flex-grow`, `flex-shrink`, `flex-basis` (shorthand: `flex: 1 1 0`), `align-self`, `order`.
- Common task: **center a div** → `display:flex; justify-content:center; align-items:center;`

### CSS Grid
- `grid-template-columns`/`rows`, `fr` unit, `repeat()`, `grid-gap`/`gap`.
- `grid-template-areas` for named layout regions.
- `auto-fit` vs `auto-fill` in `repeat()` — classic advanced question for responsive grids without media queries:
```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

### Float & Clearfix (legacy but still asked)
- `float: left/right`, and why you need a **clearfix** hack (`::after { content:""; display:table; clear:both; }`) to fix collapsed parent height.

---

## 3. Responsive Design

- **Media queries**: `@media (max-width: 768px) { ... }`
- **Mobile-first vs desktop-first** approach — know the tradeoffs.
- `min-width`/`max-width` on images (`max-width:100%; height:auto;`) for fluid images.
- Modern responsive functions (great to mention for extra points):
```css
width: clamp(200px, 50%, 600px);
font-size: min(5vw, 24px);
```
- **Container queries** (newer, shows you're current):
```css
@container (min-width: 400px) { .card { flex-direction: row; } }
```

---

## 4. Advanced Selectors & Modern Features

- `:has()` — the "parent selector" (huge recent addition):
```css
.card:has(img) { border: 1px solid red; }
```
- `:is()` and `:where()` — grouping selectors, `:where()` has zero specificity.
- **CSS Custom Properties (variables)**:
```css
:root { --primary-color: #3498db; }
.btn { background: var(--primary-color, blue); } /* fallback */
```
Know they cascade and can be overridden per-scope (unlike SASS variables which are compile-time).
- `aspect-ratio` property — replaces old padding-hack for maintaining ratios.

---

## 5. Animations & Transforms

### Transitions
```css
.box { transition: transform 0.3s ease-in-out; }
.box:hover { transform: scale(1.1); }
```
Know the difference between `transition` (state A → B, needs trigger) and `animation` (`@keyframes`, can run automatically/loop).

### Transform
`translate()`, `scale()`, `rotate()`, `skew()` — and why `transform`/`opacity` animations are **GPU-accelerated** and preferred over animating `top`/`left`/`width` (performance — avoids layout reflow).

### Keyframe animation
```css
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
.el { animation: slideIn 0.5s ease forwards; }
```

---

## 6. CSS Architecture & Best Practices

- **BEM naming**: `.block__element--modifier` — why it avoids specificity conflicts in large codebases.
- Avoid deep nesting / over-qualified selectors (`div.container ul li a` — bad practice, high specificity, hard to override).
- **Preprocessors (SASS/LESS)** — know basics even if not asked deeply:
  - Variables, nesting, mixins, `@extend`, partials/`@import`.
- **CSS-in-JS** (styled-components/Emotion) — be ready to briefly compare with plain CSS/CSS Modules (scoping, dynamic styling vs bundle size).

---

## 7. Performance & Rendering (this is what separates 5-6 LPA candidates from juniors)

- **Critical rendering path**: browser builds DOM + CSSOM → Render Tree → Layout (reflow) → Paint → Composite.
- **Reflow vs Repaint**:
  - Reflow (layout): triggered by changing size/position/DOM structure — expensive.
  - Repaint: triggered by color/visibility changes — cheaper.
  - Compositing only (transform/opacity): cheapest, GPU-handled.
- Minimize reflows: batch DOM reads/writes, avoid inline style changes in loops.
- `will-change` hint for animations (use sparingly).
- Avoid `@import` in CSS files (blocks parallel loading) — prefer `<link>` tags.

---

## 8. Rapid-Fire Common Interview Questions

1. Difference between `em` and `rem`?
2. How does `z-index` work, and why doesn't it work without `position`?
3. What creates a new **stacking context**?
4. Difference between `inline-block` and `block`?
5. How would you center a div (3 different ways)?
6. Explain CSS specificity with an example.
7. Difference between Grid and Flexbox — when to use which? (Flex = 1D, Grid = 2D)
8. What is the CSS cascade and how is conflicting CSS resolved?
9. How do you make a responsive layout without media queries?
10. What's the difference between `visibility:hidden`, `display:none`, and `opacity:0`?
11. How do CSS custom properties differ from SASS variables?
12. What causes layout shift (CLS) and how do you prevent it?

---

## Quick Prep Strategy
- **Day 1–2**: Box model, specificity, positioning, display — these get asked in almost every interview.
- **Day 3**: Flexbox + Grid — practice building 3-4 common layouts (navbar, card grid, holy grail layout).
- **Day 4**: Responsive design + modern features (`clamp`, `:has()`, container queries) — shows you're current.
- **Day 5**: Performance concepts (reflow/repaint, GPU animation) — this is what impresses interviewers at this level.
- Practice explaining concepts **out loud** with a quick code example — most interviewers want reasoning, not just definitions.
