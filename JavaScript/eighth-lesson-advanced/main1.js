"use strict"


        // вывести от 0 до 10

// let count=0;
// while (count<=10) {
//     alert (count);
//     count+=1;
// }

// let count=0;
// do {
//     alert (count);
//     count+=1
// }
// while (count<=10)

// for (let count=0; count<=10; count+=1) {
//     alert (count);
// }

    // вывести от 10 до 0

// let i = 10;
// do {
//     alert(i);
//     i-=1;
// } while (i>=0)

// let i = 10;
// while (i>=0) {
//     alert(i);
//     i-=1;
// }

// for (let i=10; i>=0; i-=1) {
//     alert (i);
// }

    //- вывести четные числа от 0 до 10

// for (let i=0; i<=10; i+=1) {
//     if (i%2==0) {
//         alert (i);
//     }
// }
        
// let i=0;
// do {
//     alert (i);
//     i+=1;
// } while (i<=10) {
//     if (i%2==0) {
//     }
// }

// let i=0;
// while (i<=10) {
//     if (i%2==0){
//         alert (i);
//     }
// i+=1;
// }
    // } - вывести четные числа от 0 до 10 --- это третий вариант, и он у меня не работает, странно, но именно while путает меня более всего
    // вернулся и переделал после нечетных 

        //- вывести не четные числа от 10 до 0

// let i=0;
// do {
//     if (i%2!==0)
//     alert (i);
//     i+=1;
// } while (i<=10) {
// }

// for (let i=0; i<=10; i+=1) {
//     if (i%2!==0) {
//         alert (i);
//     }
// }

// let i=0;
// while (i<10) { // почему то при i<=10   у меня выдавало и 11
//     ++i;
//     if (i%2!==0) {
//         alert (i)        
//     }
// }

    // - вывести числа от n до m (при условии что n < m)

    // const n =prompt ('give me the number for n');    
    // const m =prompt ('give me the number for m');
    
    // if (n<m) {
    //     for (let e=Number(n); e<=Number(m) ; e+=1) { 
    //         alert (e);
    //     }
    // }
    
    
    //- вывести числа от m до n (при условии что m > n)

    // const n =prompt ('give me the number for n');    
    // const m =prompt ('give me the number for m');
    
    // if (m>n) {
    //     for (let e=Number(m); e>=0 ; e-=1) { 
    //         alert (e);
    //     }
    // }

    //- вывести числа от n до m у которых остаток от деления на k равен 0
    
    // let n =prompt ('give me the number for n');    
    // let m =prompt ('give me the number for m');
    // let k =prompt ('give me the number for k');
    // //  for (let x=Number(n); x<m ; x+=1) { 
    //     if (x%k===0) {
    //         alert (x);
    //     }
    //  }

    // do {
    //     alert (x);
    // } while (x%k===0) {
    //     if (x=Number(n));
    // }

    
    // while (x%k===0) {
    //     alert (x);
    // }

// Задача №хз

//- запрашивать числа через prompt, пока пользователь не отправит пустое число или не нажмет "Отмена", затем вывести эти числа


const array = [];
let i;

do {
    i=prompt ('insert number');
    if (i!==''&&i!==null){
        array.push (i);
    }    
} while (i!=='' && i!==null); 

for (let i=0; i<=array.length-1 ; i+=1) {
    alert (array [i]);
}
    

