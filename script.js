"use strict";

//const storeName = 'ATB';
//const storeDescription = {
 //   budget: 10000,
 //   employees: [
 //       'John', 'Nazar', 'Lena'
 //   ],
 //   products: {
 //       cucumber: 10,
 //       water: 15
 //   },
 //   open: true,
// };

// console.log (storeDescription.employees[2]);


//let number = 10,
//    number2 = '10';


//console.log (2 + 2 * 2 == '6');


//const arr = confirm ('Ви тут?');

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

let   a = prompt("Один из последних просмотренных фильмов", ""),
      ratingFilm1 = +prompt("На сколько оцените его?", ""),
      b = prompt("Один из последних просмотренных фильмов", ""),
      ratingFilm2 = +prompt("На сколько оцените его?", "");

const personalMowieDB = {
    count: numberOfFilms,
    movies: {
        a: ratingFilm1,
        b: ratingFilm2,
    },
    actors: {

    },
    genres: [

    ],
    privat: false
};



    
console.log(personalMowieDB);
