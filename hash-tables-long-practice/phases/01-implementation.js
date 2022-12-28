class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    this.data = new Array(numBuckets).fill(null);
    this.capacity = numBuckets;
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
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

  insert(key, value) {
    const kvpair = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    let node = this._getNodeWithMatchingKey(this.data[index], kvpair.key);
    if (this.data[index]) {
      if (node) {
        node.value = kvpair.value;
      } else {
        kvpair.next = this.data[index];
        this.data[index] = kvpair;
        this.count++;
      }
    } else {
      this.data[index] = kvpair;
      this.count++;
    }
    // if (this.count >= this.capacity) this.resize();
  }

  read(key) {
    const index = this.hashMod(key);
    let node = this._getNodeWithMatchingKey(this.data[index], key);
    if (node) return node.value;
    return;
  }

  resize() {
    let newHashTable = new HashTable(this.capacity * 2);
    for (let i = 0; i < this.capacity; i++) {
      let curr = this.data[i];
      while (curr) {
        newHashTable.insert(curr.key, curr.value);
        curr = curr.next;
      }
    }
    this.capacity = newHashTable.capacity;
    this.count = newHashTable.count;
    this.data = newHashTable.data;
  }

  delete(key) {
    // TODO
    const index = this.hashMod(key);
    if (this.data[index].key == key && this.data[index].next == null) {
      this.data[index] = null;
      this.count--;
      return;
    }
    let head = this.data[index];
    let curr = this.data[index];
    let prev = null;
    while (curr) {
      if (curr.key === key) {
        if (curr === head) {
          curr = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.count--;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
    return "Key not found";
  }
}

module.exports = HashTable;
