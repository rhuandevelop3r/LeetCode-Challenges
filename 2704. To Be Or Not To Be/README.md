### 2704. To Be Or Not To Be

![Easy](https://img.shields.io/badge/easy-brightgreen?style=flat)

Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions.

  - `toBe(val)` accepts another value and returns `true` if the two values `===` each other. If they are not equal, it should throw an error `"Not Equal"`.
  - `notToBe(val)` accepts another value and returns `true` if the two values `!==` each other. If they are equal, it should throw an error `"Equal"`.

#### Example 1:

```text
Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
```

#### Example 2:

```text
Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
```
#### Example 3:

```text
Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this 
expression returns true.
```

<hr>

#### Testcase

```text
1. () => expect(5).toBe(5)
2. () => expect(5).toBe(null)
3. () => expect(5).notToBe(null)
```

<hr>