const Arcentry = require('./lib/arcentry');

const client = new Arcentry({
  apiKey: 'c6b6ab0b9f26c3595d8e5d6abf4044385477bc228df0142b3d8e6bb1c7ce787c'
});

// client.document.list().then(res => console.dir(res));

// client.document.get('9003e5b6-2c5b-4709-8cd3-1bd20d569dc3').then(res => console.dir(res));

// client.object.list('9003e5b6-2c5b-4709-8cd3-1bd20d569dc3').then(res => console.dir(res));

// client.object
//   .get('9003e5b6-2c5b-4709-8cd3-1bd20d569dc3', '1ckeo7qrj-14gu6546ta')
//   .then(res => console.dir(res));

client.object
  .update('9003e5b6-2c5b-4709-8cd3-1bd20d569dc3', '1cmdqmgh4-o2rn3k7v8', {
    props: { text: 'New text' }
  })
  .then(res => console.dir(res))
  .catch(res => {
    debugger;
    console.dir(res);
  });
