# slothswaps/blast-sdk

Forked from the [Uniswap SDK](https://github.com/Uniswap/uniswap-v2-sdk).

You can refer to the Uniswap SDK documentation [uniswap.org](https://uniswap.org/docs/v2/SDK/getting-started/).

## Running tests

To run the tests, follow these steps. You must have at least node v10 and [yarn](https://yarnpkg.com/) installed.

First clone the repository:

```sh
git clone https://github.com/slothswaps/blast-sdk.git
```

Move into the blast-sdk working directory

```sh
cd blast-sdk/
```

Install dependencies

```sh
yarn
```

Run tests

```sh
yarn test
```

You should see output like the following:

```sh
$ tsdx test
 PASS  test/fraction.test.ts
 PASS  test/pair.test.ts
 PASS  test/miscellaneous.test.ts
 PASS  test/entities.test.ts
 PASS  test/router.test.ts
 PASS  test/constants.test.ts
 PASS  test/trade.test.ts
 PASS  test/token.test.ts
 PASS  test/route.test.ts

Test Suites: 1 skipped, 9 passed, 9 of 10 total
Tests:       2 skipped, 124 passed, 126 total
Snapshots:   0 total
Time:        2.107s
Ran all test suites.
✨  Done in 5.90s.
```
