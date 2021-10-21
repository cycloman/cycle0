"use strict"
const array = [1,2,3];
let x, y;

do {
        x=prompt ('insert');
        if ((x!=='' && x!==null)) {
        for (let i=0; i<array.length; i++) {
                y = x/array[i];
                alert (y);
        }
}
} while (x!=='' && x!==null) 




//- запрашивать числа через prompt, 
//и сразу же показывать результат их деления на числа в массиве [1, 2, 3] 
//до тех пор пока пользователь не нажмет "Отмена" или не отправит пустую строку


// for (let x=0; x<array.length ; i+=1) {
//     if (i>0) {
//         let result = x/array[i];
//         alert (result);