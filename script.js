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
       
    },
    actors: {

    },
    genres: [

    ],
    privat: false
};

personalMowieDB.movies[a] = ratingFilm1;
personalMowieDB.movies[b] = ratingFilm2;


    
console.log(personalMowieDB);


console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log(5 === 5 && 3 > 1 || 5);



for (let i = 5; i <= 10; i++) {
    console.log(i);
};

first: for (let j = 20; j >= 10; j--) {
    if ( j === 13) break first;
    console.log(j);
};

 second: for (let k = 2; k <= 10; k + 2) {
    if (k === 12) break second;
    console.log(k);
};

