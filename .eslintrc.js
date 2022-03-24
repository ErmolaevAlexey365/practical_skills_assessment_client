module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [

  ],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "react/prop-types": ["off"],
    "max-len": ["error", { "code": 140 }],
    "indent": ["error", 2]
  }
};
