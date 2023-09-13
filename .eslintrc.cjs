module.exports = {
    'env' : {
      'mocha': true
    },
    'globals': {
      '$': true,
      '$$': true,
      'browser': true
    },
    'plugins': ['wdio'],
    'extends': [
    'semistandard',
    'eslint:recommended',
    'plugin:wdio/recommended'
  ]
};




