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



//console.log(NaN || 2 || undefined);
//console.log(NaN && 2 && undefined);
//console.log(1 && 2 && 3);
//console.log(!1 && 2 || !3);
//console.log(25 || null && !3);
//console.log(NaN || null || !3 || undefined || 5);
//console.log(NaN || null && !3 && undefined || 5);
//console.log(5 === 5 && 3 > 1 || 5);



//for (let i = 5; i <= 10; i++) {
//    console.log(i);
//};

//first: for (let j = 20; j >= 10; j--) {
//    if ( j === 13) break first;
//    console.log(j);
//};

// second: for (let k = 2; k <= 10; k + 2) {
//    if (k === 12) break second;
//    console.log(k);
//};

//function sayHello(name) {
//    return `Привет,${name}! `;
//}

//console.log(sayHello('Nazar'));

//function returnNeighboringNumbers(number) {
//    let mass = [
//        number - 1, number, ++number,
//    ];
//    console.log(mass);
//}
// returnNeighboringNumbers(3);

 //function getMathResult(num, times) {
 //   if (typeof(times) !== 'number' || times <= 0) {
 //       return num;
 //   }

 //    let str = '';

 //    for (let i = 1; i <= times; i++) {
 //       if (i === times) {
 //           str += `${num * i}`;
            // Тут без черточек в конце
 //       } else {
 //           str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
 //       }
 //   }

 //  return str;
 //}

//console.log(getMathResult(10, 6));

//const a = 'Mеня зовут назар)';

//console.log(a.slice(11,16));
//console.log(a.toUpperCase())


let numberOfFilms;  

function start(){
    

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", ""); 
    }
}

start();

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





function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        const   a = prompt('Какой последний фильм вы посмотрели?', ''),
                b = prompt('Как вы его оцените?', '');

        if ( a != null && b != null && a != '' && b != '' && a.length < 50 ){
            personalMowieDB.movies[a] = b;
            console.log('done');
        }   else {
            console.log('error');
            i--;
            }

    
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
        if(numberOfFilms <= 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if ( numberOfFilms > 10 && numberOfFilms < 30) {
        alert('Ви классический зритель');
    } else if ( numberOfFilms >= 30) {
        alert('Ви киноман');
    } else {
        alert('Произошла ошибка');
    }

}

//detectPersonalLevel();

function writeYourGenres () {
    for(let i = 1; i < 4; i++) {
        const k = prompt(`Ваш любимый жанр под номером ${i}`, ``);
        personalMowieDB.genres[i-1] = k;
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMowieDB.privat === false){
        console.log(personalMowieDB);
    }
}

showMyDB();

