//Задание 1

// if ("0") {
//     alert( 'Привет' );
//   } //да


//Задание 2
// let lang = prompt('Какое офицальное название JavaScript?', '');

// if (lang == 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript.');
// }

//Задание 3

// let condition = prompt ('Введите число');

// if (condition >0) {
//     alert (1);
// } else if (condition <0) {
//     alert (-1);
// } else  {
//     alert (0)
// }

//Задание 4
// let result = (a + b < 4) ? "Мало": "Много";

//Задание 5
let login = prompt ("Введите должность",'');
let message = (login == "Сотрудник") ? alert("Привет"):
    (login == 'Директор') ? alert('Здравствуйте'):
    (login == '') ? alert('Нет логина'):
    ''
   