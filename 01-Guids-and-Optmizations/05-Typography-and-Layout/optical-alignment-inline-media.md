# Optical Alignment for Inline Media in Text

## Problem
Inline media (video, SVG, icons) appears vertically misaligned
when placed inside large typography.

## Cause
Fonts are aligned to a baseline, not their visual center.
Ascenders and descenders skew perceived alignment.

## Solution
Apply optical alignment using negative margin-top in `em` units.

## Code
```css
.inline-media {
  display: inline-block;
  margin-top: -0.125em;
}
```

## Tailwind Example
```html
<div className="small_video h-[0.73em] w-[1.66em] rounded-full overflow-hidden relative -mt-[0.2em] inline-block  ">
  <Video />
</div>
```
