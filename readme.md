# data-uri-type [![Build Status](https://travis-ci.org/hemanth/data-uri-type.svg?branch=master)](https://travis-ci.org/hemanth/data-uri-type)

> Get the mediatype of a data-uri.


## Install

```
$ npm install --save data-uri-type
```


## Usage

```js
const dataUriType = require('data-uri-type');

dataUriType('data:image/png;base64,iVBORw0KGgo').then(console.log).catch(console.error);
```


## API

### dataUriType(input)

#### input

Type: `string`

A `data-URI`


## License

MIT © [Hemanth.HM](https://h3manth.com)
