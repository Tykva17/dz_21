//N1
let arr = [1,'2',3,4,5,65,8,7,'name'];

function mapping(arrParam, callback){
    let arrNew = [];
        for (let x of arrParam) {
//             if (callback(x)) {
              arrNew.push(callback(x));
//             }
          }
    return  arrNew;
}

let arr1 = mapping(arr, x => x % 2 === 0)

console.log('N1 --> ' , arr1);

//N2

const array1 = [1, 2, 3, 4];
let initialValue = 1;
// 0 + 1 + 2 + 3 + 4
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

function myReducer(arrP, callback, initialValue){
    if(typeof initialValue === 'number'){
        arrP.unshift(initialValue);
    }
    let result = arrP[0];
        for(let i = 1; i < arrP.length; i++){
            result = callback(result,arrP[i])
            console.log(result, arrP[i])
        }
    return result
}

let sumOfElem = myReducer(array1, (a,b) => a + b,initialValue)


console.log('reduce', sumWithInitial);
console.log('myreduce',sumOfElem);
// Expected output: 10

//N3

let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]

// FILTER - не мутабельний
let maleArr = users.filter(male => male.gender == 'male')
let activeUsers = users.filter(user => user.isActive == true)
let usersNames = users.filter(user => user.name.indexOf('Suzette') !== -1)
console.log(maleArr)
console.log(activeUsers)
console.log(usersNames)
// FIND - не мутабельний
let firstMale = users.find(male => male.gender == 'male')
console.log(firstMale)
// ForEach - мутабельний
users.forEach(element => element.isActive = !element.isActive);
console.log(users)
// GROUP - поки недоступний в браузерах, але дуже цікавий метод
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group
//let usersGroup = users.group(({gender}) => gender)
//console.log(usersGroup)
// KEYS - не мутабельний
let keysArr = users.keys();
for (const key of keysArr) {
  console.log(key);
}
// MAP - не мутабельний
let doubleBalanceArr = users.map(user => user.balance.replace('$','').replace(',','')*2);
console.log(doubleBalanceArr)
//REDUCE - не мутабельний
let sumDoubleBalance = doubleBalanceArr.reduce((a,b) => a+b);
console.log(sumDoubleBalance)
//REVERSE - мутабельний
users.reverse();
console.log('users reversed' , users)
// SOME - не мутабельний
console.log(users.some(user => user.gender === 'male'))
// SORT - мутабельний
doubleBalanceArr.sort((a,b) => a < b)
console.log(doubleBalanceArr)
users.sort(user => user.isActive == !false)
console.log(users)
// SPLICE - мутабельний
let newUser = {
                      "index": users.length,
                      "isActive": false,
                      "balance": "$122,790.56",
                      "name": "Cristiano Ronaldo",
                      "gender": "male",
                      "phone": "+1 (837) 586-3283",
                      "address": "314 Dunne Place, Bawcomville, Guam, 9053"
                  }
users.splice(newUser.index,0,newUser)
console.log(users)
