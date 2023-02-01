"use strict" ;

// 1)
const animal = "Dog";
alert (animal);
const name = " Keks";
alert(name);
const propos = animal + name + " Вышел на прогулку"; 
alert (propos);

// 2)
const number = 20;
alert(number);
const newNamber = number + 9;
alert (newNamber);

// 3)

const product = " Телевизор";
const price =" 500$";
const sale = product + price + " -20%" ;
alert (sale) ;
const newProduct="Пылесос";
const newSale = newProduct + price + "-20%";
alert (newSale);

// 4)

let student = "Петя ";
const age = 25 ;
const charac1 = student + age + " лет";
alert (charac1);

student = "Вася ";
const newAge = age + 4;
const charac2 = student + newAge + " лет";
alert (charac2);

student = " Гриша ";
const newAge2 = age + 7;
const charac3 = student + newAge2 + " лет";
alert (charac3);

let student1 = "Петя";
let student2 = "Гриша";
let student3 = "Вася";

let charac4 = student1 + " - " + age + " лет, " + student2 + " - " +newAge + " лет, " + student3 + " - " +newAge2 + " года " 
+ "- учатся на программистов !!!";

alert (charac4);

student3 = "Олег";

charac4 = student1 + " - " + age + " лет, " + student2 + " - " +newAge + " лет, "  + student3 + " - " +newAge2 + " года " 
+ "- учатся на программистов !!! Место Васи занял Олег.";
alert (charac4);

// 5

const ingr1 = " мука, ";
const ingr2 = " молоко, ";
const ingr3 = " масло, ";

const rec = ingr1 + ingr2 + ingr3 + "- получится блин";

alert (rec);

// ОПИСАНИЕ let:

//  let - дирректива, с помощью которой мы можем обьявлять переменную.
//  let number = 22 ;

//  Значение переменной можно менять несчетное количество раз, при этом ее не объявляя:
//  let number = 22 ;
//  number = 30; - в этом случае в number уже лежит переменная 30. И т.д.

// let используется в тех случаях, когда значение переменной меняется, в остальных случаях используется CONST.

// ОПИСАНИЕ var:

// С помощью var тоже  объявлять переменную, которую так же можно переопределять, но это устарело ...

//  ОПИСАНИЕ const:

// const - дирректива, с помощью которой объявляется неизменяемая переменная.
// Попытка уу изменить, приведет к ошибке:

// const name = "Den";
// name = "Ivan" - ошибка;
// const newName = "Ivan".

// ОПИСАНИЕ JS:

//  JS - язык программирования, является безальтернативным для вебразработки,
//  не нуждается в компиляции, не строготипизирован, имеется в любом браузере.
//  JS - регистрозависимый

let nameNew = "Djon";
let admin = nameNew;
alert (admin);
admin = "Lera";
alert (admin);

const ourPlanetName = "Zemlya";
// ourPlanetName = "Luna"; !!! - нельзя 
alert (ourPlanetName);

let currentUserName = "Alex";
currentUserName = "Olga";
alert (currentUserName);




