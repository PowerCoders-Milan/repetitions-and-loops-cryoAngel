// use this array
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// Access and output Oranges.
console.log(array[2]);
// Sort the array in alphabetical order.
console.log(array.sort())
// Put "Kiwi" at the end of the array.
console.log(array.push("Kiwi"));console.log(array);
// Remove "Apples" from the array.
//var applesIndex = array.indexOf("apples");
//if (applesIndex > -1){
//    array.splice(applesIndex, 0);
//};
//console.log(array);

console.log(array.splice([1]));
// Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
console.log(array.reverse());

console.log(array);
