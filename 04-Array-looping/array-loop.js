var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
/*var arrString = arr1.filter(function(item1, item2) {return typeof item1 == 'string';});
var arrNumber = arr1.filter(function(item1, item2) {return typeof item1 == 'number';});
console.log(arrString , arrNumber);*/
var number = 0;
var string = 0;


for (var x of arr1) {
  if (Number.isInteger(x)) {
      number++;
  } else {
      string++
  }
}
console.log(number +" "+ "numbers," +" "+ string +" "+ "letters")
//var resultat =arr1.filter(word => arr1[i] = word)