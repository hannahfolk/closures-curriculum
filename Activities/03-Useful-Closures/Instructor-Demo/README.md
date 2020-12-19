# Instructor Instructions

## Goal

The goal of this activity is to show why closures are important.

## What to Explain

- Private vs. Public Functions
  - Explain that Javascript does not have the ability to create private functions directly, with a keyword like `private`. That's why closures come into play. We can make inner functions private and inaccessible outside of the outer function.

## In this activity

Explain that this activity creates private variables `amtOfAtkStrikes` and `amtOfTimesBeenHit`. They are not accessible outside of the `fight` function unless through the closure. Also explain that with each `attack` or `getHit` function call, it will increase the private variables by one point.

Point out that `game1` and `game2` are both set to `fight()`. However, this will create two separate sets of private variables for `amtOfAtkStrikes` and `amtOfTimesBeenHit`. Therefore, we can make as many different games as we would like, but they'll all have different `amtOfAtkStrikes` and `amtOfTimesBeenHit` states, which means that `game1.attack()` will only affect `game1`'s private variables, and likewise for `game2.attack()`.

Also mention that all the methods inside the `setOfClosures` are closures. Another way you can explain that these closures are private is that you cannot just call `attack()` on its own; you must write `game1.attack()` or `game2.attack()`.

## Timing Recommendation

- Instructor Demo - 20 minutes
- Student Activity - 30 minutes
