# Arcentry

Javascript wrapper for Arcentry API.

![Travis](https://travis-ci.org/nschomberg/arcentry.svg?branch=master)

## Installation

```shell
$ npm install --save arcentry
```

## Sample Usage

```js
const Arcentry = require('arcentry');

const arcentry = new Arcentry({
  apiKey: 'your-api-key'
});

arcentry.document
  .list()
  .then(documents => console.log(documents))
  .catch(err => console.error(err));

arcentry.document
  .get('<document-id>')
  .then(documents => console.log(documents))
  .catch(err => console.error(err));

arcentry.object
  .list('<document-id>')
  .then(objects => console.log(objects))
  .catch(err => console.error(err));

arcentry.object
  .get('<document-id>', '<object-id>')
  .then(objects => console.log(objects))
  .catch(err => console.error(err));

arcentry.object
  .update('<document-id>', '<object-id>', { props: { text: 'Updated text' } })
  .then(objects => console.log(objects))
  .catch(err => console.error(err));

arcentry.object
  .delete('<document-id>', '<object-id>')
  .then(objects => console.log(objects))
  .catch(err => console.error(err));
```

## API

This module exports a constructor function which takes an options object.

### `Arcentry(options)`

Creates a new `Arcentry` instance.

#### Arguments

- `options` - Required - A plain JavaScript object that contains the configuration options.

#### Options

- `apiKey` - Required - A string that specifies the Arcentry app's API key.

#### Return value

An `Arcentry` instance.

#### Exceptions

Throws an `Error` exception if the required options are missing.

#### Example

```js
const Arcentry = require('arcentry');

const arcentry = new Arcentry({
  apiKey: 'your-api-key'
});
```

## Running Project Locally

### Installing Dependencies

Run `yarn install` or `npm install` to get the project's dependencies.

### Making a Production Build

Run `yarn build` or `npm run build` to produce minified version of library.

### Making a Development Build

Run `yarn dev` or `npm run dev` to generate an non-minified version of library and watch for file changes.

### Running Tests

Run `yarn test` or `npm run test`.
