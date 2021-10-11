"use strict"
//- запрашивать числа через prompt, пока пользователь не отправит пустое число или не нажмет "Отмена", 
//затем вывести true для четных чисел и false для нечетных чисел

const array = [];
let i;

do {
    i=prompt ('insert number');
    if (i!==''&&i!==null){
        array.push (i);
    }    
} while (i!=='' && i!==null); 

for (let i=0; i<=array.length-1 ; i+=1) {
    //alert (array [i]);
    if (i%2==0) {
        alert ('true')
    } else {
        alert ('false')
    }
}