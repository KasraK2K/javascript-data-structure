class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length++] = item;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const deletedItem = this.data[index];
    this.shiftItems(index);
    return deletedItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  join(joinString = ",") {
    let finalText = "";
    for (let i = 0; i < this.length; i++) {
      finalText += this.data[i];
      if (i !== this.length - 1) finalText += joinString;
    }
    return finalText;
  }
}

const newArray = new MyArray();
newArray.push("Kasra");
newArray.push("Karami");
newArray.push("!");
newArray.delete(2);
newArray.push("done");
console.log(newArray);
console.log(newArray.join());
