## JavaScript Getter Setter
- [ ] Write a factory function. The function named factory MUST return a function that behaves in the following way:
- [ ] When called with no arguments before a value has been stored, the default 'HI IM THE DEFAULT :D!' is returned.
- [ ] When called with one argument, the value is stored AND returned.
- [ ] When called with no arguments after a value has been stored, the stored value is returend.

```javascript
Example:

var getSet = factory(); 

getSet() // returns 'HI IM THE DEFAULT! :D'
getSet('Something else') // returns 'Something else'
getSet() // returns 'Something else'
getSet(42) // returns 42
getSet() // returns 42
```

### Available Resources for this Prompt
  * MDN
