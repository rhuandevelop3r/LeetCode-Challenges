### 2667. Create Hello World Function


![Easy](https://img.shields.io/badge/easy-brightgreen?style=flat)

Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.`

#### Example 1:

```text
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
```

#### Example 2:

```text
Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
```
#### Constraints:

```text
0 <= args.length <= 10
```

<hr>

#### Testcase

```text
1. []
2. [{},null,42]
```

<hr>