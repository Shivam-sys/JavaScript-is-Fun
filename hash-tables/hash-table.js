const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.data = new Array(numBuckets).fill(null);
    this.capacity = numBuckets;
    this.count = 0;
  }

  hash(key) {
    let str = sha256(key);
    let hex = str.slice(0, 8);
    let hashValue = parseInt(hex, 16);
    return hashValue;
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    const keyValuePair = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    console.log(this.data);
    if (!this.data[index]) {
      this.data[index] = keyValuePair;
      this.count++;
    } else
      throw new Error("hash collision or same key/value pair already exists!");
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }
}

module.exports = HashTable;
