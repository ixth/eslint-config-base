# My ESLint Preferences

## Usage:

1. Install package:
```shell
#npm
npm install --save-dev git+ssh://git@github.com/ixth/eslint-config.git

# yarn
yarn add --dev git+ssh://git@github.com/ixth/eslint-config.git
```

2. Add config into `extends` section in `.eslintrc`:
```diff
     "extends": [
+         "@ixth/eslint-config",
          "some-other-config"
     ],
```
