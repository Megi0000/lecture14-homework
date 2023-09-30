// 1) შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს
// მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

 function sum(...numbersArray) {
   let numberSum = 0;
   for (let item of numbersArray) {
      if (item > 0) {
          numberSum += item; 
       }
     }
 return numberSum;
}
let resultSum = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(resultSum);


// 2) ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

let secondFunction = (...numbersArray2) => {
    let sum = 0;
    for(let i of numbersArray2) {
        sum += i
    }
    return sum
}
let secondesult = secondFunction(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(secondesult);


// 3)ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze')
//  თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;
 
let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}
	let userName = (firstname, lastname, age, isloggedin) => {
    let nameResult = isloggedin = true ? `${firstname} ${lastname}` :'false';
     return nameResult;
    }
    let userNameResult = userName('giorgi','saakadze', 32, true);
    console.log(userNameResult);


// 4) შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ
//  უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

let maxNumber = (...number) => {
    let max = number[0]
    for(let i of number) {
        if(i > max) {
            max = i
        }
    } return max
}

let maxResult = maxNumber(1, 3, 34, 27, 100, 96)
console.log(maxResult);

// 5)დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული
//  მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს
//   - this number is odd;

 function checkOddEven(number) { 
     if (number % 2 === 0) {
       return 'This number is even';
     } else {
       return 'This number is odd';
     }
   }
  
   let inputNumber = 5;
   let result = checkOddEven(inputNumber);
   console.log(result);


// 6) ოცემულია მასივი:
let array = [1,2,3,4,5];
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1
let reversedArray = [];

for (let i = array.length -1; i >= 0; i--) {
    reversedArray.push(array[i])
}
console.log(reversedArray);

// 7) ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი 
// მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

   const calculateAgeCategory = (age) => {
    if (age > 18) {
      return "სრულწლოვანი";
     } else {
       return "არასრულწლოვანი";
    }
   }
  
   const userAge = 36;
   const ageCategory = calculateAgeCategory(userAge);
   console.log(ageCategory);


// 8) მოცემულია მასივი
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი
for(let i of array2) {
    if (i == 5) {
        console.log('არის');
        break
    }
}



// 9) მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
 let array5 = [1, 2, 3, 7, 6, 9];

 for (let i = 0; i < array5.length; i++) {
   if (array5[i] === 7) {
     continue; 
   }
   console.log(array5[i]);
 }