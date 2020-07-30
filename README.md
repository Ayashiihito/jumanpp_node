# Juman++ node wrapper

This package aims to be a minimal wrapper around [juman++](https://github.com/ku-nlp/jumanpp) with no formatting provided.

### API

```js
new Jumanpp(command)
```  
Where command is an optional argument containing the path to juman++ binary, default is 'jumanpp'

```js
Jumanpp.query(sentence)
```  
Expects a string, throws an error on empty argument.
Returns a promise.

```js
Jumanpp.close()
```  
Signifies an end of input and terminates the juman++ process

### Usage example

```js
  const jumanpp = new Jumanpp();

  const one = await jumanpp.query('玄関で愛を待ち惚け');

  jumanpp.close();

```
