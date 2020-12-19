# Instructor Instructions

## Goal
The goal of this activity is to show students what a closure is.

## What to Explain
* Closures
  * Closures are functions that have access to the lexical scope, even if the outer function has already closed.
  * To simplify things, "closed" means that the function has already executed.
  * They usually involved nested functions.

## In this activity
For the first example, explain that the `outerFunction` runs first and finishes executing. We set the invocation of `outerFunction` to a new variable `newGirl`. Then on the next line, we call `newGirl`. By calling `newGirl`, the console log will show up. Demonstrate by commenting out the `newGirl` function call that the console log will disappear. Explain that this means that `whosThatGirl` is still available even after `outerFunction` has closed. This is why this combination of functions is called a closure, or more specifically `newGirl` is the closure. No matter where we call `newGirl` or how many times we call it, `whosThatGirl` is still accessible, long after `outerFunction` has finished executing.

In the second example, explain that the functions can still take in parameters, and the parameter for the `outerFunc`, `x`, is still accessible in closures below. Meanwhile, we can give the closures parameters as well, and they will be equal to `y`.

## Timing Recommendation
* Instructor Demo - 10 minutes
* Student Activity - 20 minutes