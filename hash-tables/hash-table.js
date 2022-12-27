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
    if (!this.data[index]) {
      this.data[index] = keyValuePair;
      this.count++;
    } else
      throw new Error("hash collision or same key/value pair already exists!");
  }

  insertWithHashCollisions(key, value) {
    const keyValuePair = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    if (this.data[index]) keyValuePair.next = this.data[index];
    this.data[index] = keyValuePair;
    this.count++;
  }

  insert(key, value) {
    const keyValuePair = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    if (this.data[index]) {
      let tempNode = this._getNodeWithMatchingKey(
        this.data[index],
        keyValuePair.key
      );
      if (tempNode) {
        tempNode.value = keyValuePair.value;
      } else {
        keyValuePair.next = this.data[index];
        this.data[index] = keyValuePair;
        this.count++;
      }
    } else {
      this.data[index] = keyValuePair;
      this.count++;
    }
  }

  _getNodeWithMatchingKey(head, key) {
    let current = head;
    while (current) {
      if (current.key === key) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}

module.exports = HashTable;
