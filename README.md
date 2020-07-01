# is-null-or-undefined

Is a simple npm package to check if sent arguments are null or undefined.

Features:

- You can send as many arguments as you want to check in one run
- If one of the arguments is null or undefined it will return: `true`

# Install

To install this package just run:

```npm i @nempet/is-null-or-undefined```

# Usage examples


```
const isNullOrUndefined = require('is-null-or-undefined');
```


**The following examples will always return: `false` as sent arguments are not NULL neither are Undefined**

```
  isNullOrUndefined('1'); // will return false

  isNullOrUndefined(2); // will return false

  isNullOrUndefined({someInt: 123}); // will return false

  isNullOrUndefined('1'); // will return false

  isNullOrUndefined('1', 2, '3', {}, 4, 5); // will return false

  isNullOrUndefined({ some: null }); // will return false

  isNullOrUndefined({ some: undefined }); // will return false
```

**The following examples will always return: `true` as sent arguments are either NULL or Undefined**

```
  isNullOrUndefined('1', 2, '3', {}, null, 5); // will return true

  isNullOrUndefined('1', 2, undefined, {}, 4, 5); // will return true
```

# [Contribution](CONTRIBUTING)

Feel free to contribute by forking this repository, making some changes, and submitting pull requests. For any questions or advice place an issue on this repository.

# License

  [MIT](LICENSE)
