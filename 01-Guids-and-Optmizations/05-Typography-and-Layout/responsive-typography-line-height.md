# Responsive Hero Text with Fixed Line Height

## Problem
Line-height scales when using vw-based font sizes.

## Cause
Unitless line-height scales with font-size.

## Solution
Decouple font-size and line-height using clamp + fixed px or containers.

## Code
```jsx
<h1 className="text-[clamp(6rem,9.5vw,11rem)] leading-[0.85em]">
```
