//задание_1
// let i = 3;

// while (i) {
//   alert( i-- );
// } // 1, потому что -- это оператор декремент  и выводит он значение которое предшестует итоговому. если прописать (--i) то выведет 0, но начнет с 2

//задача_2
// let i = 0;
// while (++i < 5) alert( i );
//1,2,3,4

// let i = 0;
// while (i++ < 5) alert( i );
//1,2,3,4,5 так как выводит то что возращает постфиксный инкримент

//задача_3
//for (let i = 0; i < 5; i++) alert( i ); //0,1,2.3.4

//for (let i = 0; i < 5; ++i) alert( i ); //0,1,2,3,4 мне не понятно почему показывает "0"

//задача_4 мое решение оригинально) ахахах- но работает
// for (let i=0; i<=10; ++i) {
// if (i%2==0)continue; {
//     alert (++i)
// }
// }

//задача_5 заменить на while
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0
// while (i<3) {
//     alert (`number${i}!`)
//     i++
// }

//задача_6
// let i= prompt ("insert over 100",0);
// while (i<=100) {
//     if (i>100||i===null) {
//         break
//     } else {
//         i=prompt ("insert over 100",0)
//     } 
// }
 
// //задача_7 вывести натуральное число
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.
let n = 10

outer: for(let i=2; i<=n ; i++) { //возращаются все i от 2 до 10 
    for (let j=2; j<i; j++) //задаем делитьель 
        if (i%j==0) continue outer; {
            alert (i)
        }
}
