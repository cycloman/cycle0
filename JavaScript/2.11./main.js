
//Задача_1
//alert( null || 2 || undefined ); //2

//Задача_2
//alert( null || 2 && 3 || 4 ); //3

//Задача_3
// alert( 1 && null && 2 ); //2 - null

//Задача_4
//alert( alert(1) && alert(2) );//2 - underfined

//Задача_5
//alert( null || 2 && 3 || 4 ); /3

//Задача_6

// let age = prompt ('Your age');

// if (age>=14 && age <=90) {
//     alert ('ok') 
// }


// //Задача_7
// let age = prompt ('Your age');

// if (!(age>=14 && age <=90)) {
//     alert ('ok') 
// }


// let age = prompt ('Your age');

// if (age<14 || age >90) {
//     alert ('ok') 
// }

// //Задача_8
// if (-1 || 0) alert( 'first' ); // выведет
// if (-1 && 0) alert( 'second' ); //не выведет
// if (null || -1 && 1) alert( 'third' ); // не выведет - ошибся, выведет так как "-1" это true

//Задача_9

let login = prompt ('Кто там?');

if (login === 'Админ') {
        let password = prompt ('Введите пароль');
            if (password === 'Я главный') {
                alert ('Здраствуйте');
            } else if (password===null||password==='') {
                alert ('Отменено');
            } else {
                alert ('Неверный пароль');
            }        
    } else if (login===null||login==='') {
        alert ('Отменено');
    } else {
        alert ('Я вас не знаю')
    }
