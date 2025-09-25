---
title: "Micro-Interactions That Delight"
description: "Stand out with thoughtful motions and glows without sacrificing accessibility or speed."
publishDate: 2024-12-28
tags:
  - UX
  - Animation
---

Micro-interactions communicate state changes, reinforce hierarchy, and make a product unforgettable. Yet they can also add friction when they feel gratuitous. The key is to design animations that *explain* rather than merely decorate.

### Start with intent

Every interaction should answer a question: what just happened, and what can the user do next? Write that intent down before drawing keyframes. This keeps the motion narrative tight.

### Choose performant primitives

CSS transforms and opacity changes stay on the compositor thread, so they feel instant even on lower-powered devices. When an animation demands layout changes, use the FLIP (First, Last, Invert, Play) technique to make it feel effortless.

### Keep accessibility in mind

Respect the user's reduced motion settings and provide alternative cues such as color changes or haptic feedback. Add unit tests for the motion toggles so regressions never sneak into production.
