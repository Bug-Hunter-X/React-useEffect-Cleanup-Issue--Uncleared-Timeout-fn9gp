# React useEffect Cleanup Issue: Uncleared Timeout

This repository demonstrates a common issue in React's `useEffect` hook where a timeout (or any other asynchronous operation) is not properly cleaned up, potentially leading to memory leaks and unexpected behavior after the component is unmounted.

## Problem
The `bug.js` file showcases a component using `useEffect` to set a timeout.  The problem is that if the component unmounts before the timeout resolves, the timeout will still execute, leading to unexpected behavior or memory leaks.

## Solution
The solution, present in `bugSolution.js`, addresses this by using a cleanup function within the `useEffect` hook. This cleanup function will clear the timeout before the component unmounts, ensuring that no unexpected side effects occur.