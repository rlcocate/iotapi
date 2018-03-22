# prompt-radio [![NPM version](https://img.shields.io/npm/v/prompt-radio.svg?style=flat)](https://www.npmjs.com/package/prompt-radio) [![NPM monthly downloads](https://img.shields.io/npm/dm/prompt-radio.svg?style=flat)](https://npmjs.org/package/prompt-radio) [![NPM total downloads](https://img.shields.io/npm/dt/prompt-radio.svg?style=flat)](https://npmjs.org/package/prompt-radio) [![Linux Build Status](https://img.shields.io/travis/enquirer/prompt-radio.svg?style=flat&label=Travis)](https://travis-ci.org/enquirer/prompt-radio)

> Radio prompt. Can be used as a standalone prompt, or as a plugin for [Enquirer](http://enquirer.io).

![prompt-radio example](https://raw.githubusercontent.com/enquirer/prompt-radio/master/docs/example.gif)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save prompt-radio
```

## Usage

```js
var Radio = require('prompt-radio');
var prompt = new Radio({
  name: 'colors',
  message: 'Favorite flavor?',
  choices: [
    'chocolate',
    'strawberry',
    'vanilla'
  ]
});

// async
prompt.ask(function(answer) {
  console.log(answer);
  // chocolate
});

// promise
prompt.run()
  .then(function(answer) {
    console.log(answer);
    // chocolate
  });
```

## Enquirer plugin

Register as a plugin with [enquirer](http://enquirer.io):

```js
var Enquirer = require('enquirer');
var enquirer = new Enquirer();

enquirer.register('radio', require('prompt-radio'));
```

### Enquirer examples

[Enquirer](http://enquirer.io) supports both the declarative inquirer-style question format and a functional format using the `.question` method:

**Declarative format**

Questions can be defined as an array of objects, or a single question object:

```js
var questions = [
  {
    name: 'color',
    message: 'What is your favorite color?',
    type: 'radio',
    default: 'blue',
    choices: ['red', 'yellow', 'blue']
  }
];

enquirer.ask(questions)
  .then(function(answers) {
    console.log(answers)
  });
```

**Expressive format**

Functional style questions.

```js
enquirer.question('color', 'Favorite color?', {
  type: 'radio',
  choices: ['red', 'yellow', 'blue']
});

enquirer.question('flavor', 'Favorite flavor?', {
  type: 'radio',
  default: 'chocolate',
  choices: ['chocolate'] //<= no need for other choices ;)
});

enquirer.ask(['color', 'flavor'])
  .then(function(answers) {
    console.log(answers)
  });
```

## Options

### options.pointer

Customize the pointer to use.

TODO

### options.checkbox

**Type**: `Object`

**Default**: (TODO)

Customize the checkbox symbols to use.

## About

### Related projects

* [prompt-base](https://www.npmjs.com/package/prompt-base): Base prompt module used for creating custom prompts. | [homepage](https://github.com/enquirer/prompt-base "Base prompt module used for creating custom prompts.")
* [prompt-checkbox](https://www.npmjs.com/package/prompt-checkbox): Multiple-choice/checkbox prompt. Can be used standalone or with a prompt system like [Enquirer](http://enquirer.io). | [homepage](https://github.com/enquirer/prompt-checkbox "Multiple-choice/checkbox prompt. Can be used standalone or with a prompt system like [Enquirer].")
* [prompt-confirm](https://www.npmjs.com/package/prompt-confirm): Confirm (yes/no) prompt. Can be used standalone or with a prompt system like [Enquirer](http://enquirer.io). | [homepage](https://github.com/enquirer/prompt-confirm "Confirm (yes/no) prompt. Can be used standalone or with a prompt system like [Enquirer].")
* [prompt-question](https://www.npmjs.com/package/prompt-question): Question object, used by Enquirer and prompt plugins. | [homepage](https://github.com/enquirer/prompt-question "Question object, used by Enquirer and prompt plugins.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on July 08, 2017._