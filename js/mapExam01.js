const mapVal = new Map();
console.log(mapVal)
mapVal.set('test', 'value')
console.log(mapVal)

const mapSetVal = mapVal.get('test');
console.log(mapSetVal)


const setVal = new Set();
console.log(setVal)
setVal.add('test1');
console.log(setVal)

const setSetVal = setVal.has('test1');
console.log(setSetVal)
