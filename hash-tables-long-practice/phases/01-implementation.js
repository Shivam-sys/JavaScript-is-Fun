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
    let prev = null;
    while (current) {
      if (current.key === key) {
        return { prevNode: prev, currentNode: current };
      }
      prev = current;
      current = current.next;
    }
    return { prevNode: null, currentNode: null };
  }

  insert(key, value) {
    const kvpair = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    let { currentNode } = this._getNodeWithMatchingKey(
      this.data[index],
      kvpair.key
    );
    if (this.data[index]) {
      if (currentNode) {
        currentNode.value = kvpair.value;
      } else {
        kvpair.next = this.data[index];
        this.data[index] = kvpair;
        this.count++;
      }
    } else {
      this.data[index] = kvpair;
      this.count++;
    }
    let loadFactor = (0.7 * this.count) / this.capacity;
    if (loadFactor > 0.7) this.resize();
  }

  read(key) {
    const index = this.hashMod(key);
    let { currentNode } = this._getNodeWithMatchingKey(this.data[index], key);
    if (currentNode) return currentNode.value;
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
    const index = this.hashMod(key);
    let { prevNode, currentNode } = this._getNodeWithMatchingKey(
      this.data[index],
      key
    );
    // If key located at 1st pos and having nothing on next.
    if (this.data[index]?.key == key && !this.data[index].next) {
      this.data[index] = null;
      this.count--;
    }
    // If key located at first but also have next element
    else if (this.data[index]?.key == key && this.data[index].next) {
      this.data[index] = this.data[index].next;
      this.count--;
    }
    // If key located in middle of list or at end.
    else if (currentNode) {
      prevNode.next = currentNode.next;
      this.count--;
    } else {
      return "Key not found";
    }
  }
}

module.exports = HashTable;
