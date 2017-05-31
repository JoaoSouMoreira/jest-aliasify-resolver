# jest-aliasify-resolver

This extension allows you to use aliasify transform with the `Jest` testing framework.

# Installation
Install with `npm install --save-dev jest-aliasify-resolver`

# Usage
After adding your aliases to either your package.json or to an `aliasify` config file, change the following field on your `jest` config file to
```json
{
    ...
    "resolver": "jest-aliasify-resolver",
    ...
}
```

And _voilá_! Now your custom imports should resolve according to the aliases you have set up.