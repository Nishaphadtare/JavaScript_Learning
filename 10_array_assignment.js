var arrayOfNumbers = ['Kamat', 'Memon','Nashpati', 'Taimur', 'Menon', 'Kamat','Andy','Taimur'];
var  givenArray= arrayOfNumbers.length
console.log(arrayOfNumbers);
console.log("length of Given  Array Before removing duplicate elements :-",givenArray);

var  duplicateElement = [...new Set(arrayOfNumbers)]
var arrayNumbers = duplicateElement.length
console.log(`After Removing the duplicate elements  `,duplicateElement);
console.log(`length of Given  Array after removing the duplicate elements :-` ,arrayNumbers);

