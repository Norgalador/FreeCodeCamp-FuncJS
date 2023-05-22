// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((element, index, originalArr) =>
      newArray.push(callback(element, index, originalArr)));
    // Only change code above this line
    return newArray;
  };