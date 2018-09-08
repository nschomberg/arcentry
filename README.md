# Arcentry

Javascript wrapper for Arcentry API.

![Travis](https://api.travis-ci.com/nschomberg/arcentry.svg?branch=master)

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

// Get a list of all documents (https://arcentry.com/api-docs/#list-all-documents)
arcentry.document
  .list()
  .then(documents => console.log(documents))
  .catch(err => console.error(err));

// Get a document by id (https://arcentry.com/api-docs/#get-details-for-a-document
arcentry.document
  .get('<document-id>')
  .then(documents => console.log(documents))
  .catch(err => console.error(err));

// Get a list of all objects in a document (https://arcentry.com/api-docs/#list-all-objects-for-a-document)
arcentry.object
  .list('<document-id>')
  .then(objects => console.log(objects))
  .catch(err => console.error(err));

// Get an object by id (https://arcentry.com/api-docs/#get-properties-for-an-object)
arcentry.object
  .get('<document-id>', '<object-id>')
  .then(objects => console.log(objects))
  .catch(err => console.error(err));

// Create an object (https://arcentry.com/api-docs/#create-a-new-object)
arcentry.object
  .create('<document-id>', { props: { text: 'My Object' } })
  .then(objects => console.log(objects))
  .catch(err => console.error(err));

// Update an object (https://arcentry.com/api-docs/#set-properties-for-an-object)
arcentry.object
  .update('<document-id>', '<object-id>', { props: { text: 'Updated text' } })
  .then(objects => console.log(objects))
  .catch(err => console.error(err));

// Delete an object (https://arcentry.com/api-docs/#delete-an-object)
arcentry.object
  .delete('<document-id>', '<object-id>')
  .then(objects => console.log(objects))
  .catch(err => console.error(err));

// Query objects by selector (https://arcentry.com/api-docs/meta-data/#how-to-search-for-metadata)
arcentry.object
  .getWhere('<document-id>', selector)
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

### `arcentry.document`

TBD

### `arcentry.object`

TBD

## Running Project Locally

### Installing Dependencies

Run `yarn install` or `npm install` to get the project's dependencies.

### Making a Production Build

Run `yarn build` or `npm run build` to produce minified version of library.

### Making a Development Build

Run `yarn dev` or `npm run dev` to generate an non-minified version of library and watch for file changes.

### Running Tests

Run `yarn test` or `npm run test`.
