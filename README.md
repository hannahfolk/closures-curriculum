# Closures
## Overview
Previously, we learned about function declarations, invocations, returns, and scope of variables. In this section, we'll be using all four of these concepts to learn about closures. Closures allow inner functions to access variables that have been defined in an outer function even if that outer function has already been called. This is the reason for the naming of closures; the outer function has "closed," making its scope typically inaccessible. But in a closure, we can still access any variables defined in the outer function through the inner function.

In short, **closures are functions that have access to the scope of their parent function, even if their parent function has already been called.**

This concept may seem foreign to you, but if you have written a function in any way, shape, or form, you've already written a closure!

We use closures in order to create private variables and functions and still be able to use them later in the application. This is mainly because Javascript is not fully an OOP language, so closures are sometimes necessary to obtain private variables and functions.
## Prerequisites

Make sure you have a solid understanding of the following concepts before diving into this lesson.
* Function Declarations
  * Parameters
* Function Invocation (Function Calls)
* Function Returns
* Global Variables
* Global and Local Scope
* DOM Manipulation
* Math Object
* Arrays
* Objects
* How to open the `index.html` in the browser
* How to open the console when in the browser

## Key Concepts

* Lexical Scope
* Nested Functions

## Resources

* [MDN Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [W3 Schools Closures](https://www.w3schools.com/js/js_function_closures.asp)
* [Learn Closures in 7 Minutes](https://www.youtube.com/watch?v=3a0I8ICR1Vg)
* [Why Closures are Important](https://blog.bitsrc.io/closures-in-javascript-why-do-we-need-them-2097f5317daf)
* [Use Cases for Closures](https://medium.com/swlh/3-use-cases-for-closures-in-javascript-f49bf7bd281e)