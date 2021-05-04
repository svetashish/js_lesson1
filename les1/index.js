let message;
message='Hello';
let world= 'World';
message ='asdfgh'; // переобъявили переменную
message = world; // еще раз переобъявили переменную

let hello = 'Hello world';
hello ='Sveta Shish';
let name = hello;
alert(name);

name = 'Ilon';
message =`Hello, ${name}`;
alert(message);

name ='Sveta';
let surname ='Shish';
let fullName =`My name is ${name} ${surname}`;
alert(fullName);

// let obj = {name: 'Prince', age: '99'};
// alert(`my name is ${obj.name}; age: ${obj.age} country: ${obj.country.abc.a.b.c}`);


let age = 29;
alert (`My age is ${age} `);

let a=2;
let x=1 + (a*=2);//5
alert(x);


let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList);

let str='Hello';
alert(str.length);

//Длина окружности
let pi=3.14;
let radius=1/3.14;
let circleLength = 2*pi*radius;
alert(`Длина окружности равна: ${circleLength}`);

//Секунды в часе
let min=60;
let sec=60;

let secondsInHour = min*sec;
alert(`В одном часу ${secondsInHour} секунд`);


str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру

alert( str.indexOf("get") );

let inputString = 'Hello World!';

if(inputString.indexOf('ello') !== -1) {
    console.log('имеется в строке');
}

let string = "Привет Света, весна пришла!";
let target ='ве';
let pos = 0;
while (true) {
    let foundChar=string.indexOf(target, pos);
    if (foundChar ==-1) break;
    console.log(foundChar);
    pos=foundChar+1;
}

