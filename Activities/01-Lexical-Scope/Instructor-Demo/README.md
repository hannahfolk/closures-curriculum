# Instructor Instructions

## Goal
The goal of this activity is to show students how lexical scope applies with functions they have already seen.

## What to Explain
* Lexical Scope
  * Lexical scope is the concept that functions have access to their outer environment's scope.
  * If a variable is defined in the outer function, the inner function can use it.
  * Lexical scope is also known as static scope.
  * All functions have access to global variables.

## In this activity
Explain that the function `joke` has access to variables defined in the surrounding environment, aka the global scope. Even though `friend` is defined outside, `joke` can still use `friend`. This is the concept of lexical scope.

On the contrary, `num1`, `num2`, and `sum` are defined inside the `add` function; they are local variables. Therefore, they cannot be used outside of the `add` function, but only inside. That is why the outside console log will error out.

In the third example, explain that the local variable `whosThatGirl` is available anywhere within the `outerFunction`, so `innerFunction` is welcome to use it, but `whosThatGirl` is not available outside of `outerFunction`.

## Timing Recommendation
* Instructor Demo - 10 minutes
* Student Activity - 10 minutes