const hashTable = require('./01.HashTable_Map');
const ht = new hashTable();
ht.setItem("name", "John Doe");
console.log(ht.getItem("name"));
ht.removeItem("name");
console.log(ht.getItem("name"));