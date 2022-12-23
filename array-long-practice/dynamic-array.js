class DynamicArray {
  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    this.data[this.length++] = val;
    if (this.length > this.capacity) this.resize();
  }

  pop() {
    if (this.length) {
      return this.data[--this.length];
    }
    return;
  }

  shift() {
    if (!this.length) {
      return;
    }
    let ret = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    return ret;
  }

  unshift(val) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
    if (this.length > this.capacity) this.resize();
  }

  indexOf(val) {
    if (!this.length) {
      return -1;
    }
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    let tempArr = new Array((this.capacity *= 2));
    for (let i = 0; i < this.length; i++) {
      tempArr[i] = this.data[i];
    }
    this.data = tempArr;
  }
}

module.exports = DynamicArray;
