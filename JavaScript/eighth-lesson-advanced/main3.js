"use strict"
const array = [];
let i;

do {
    i=prompt ('insert number');
    if (i!==''&&i!==null){
        array.push (i);
    }    
} while (i!=='' && i!==null); //- запрашивать числа через prompt, пока пользователь не отправит пустое число или не нажмет "Отмена"

for (let i=0; i<=array.length-1 ; i+=1) {
   // Затем выводить сколько разрядов в числе 
//( 0 < n < 10 - один разряд , 
//9 < n < 100 - два разряда,  
//99 < n < 1000 - три разряда, и т.д)

if ((array [i]>0) && (array [i]<9)) {
    alert (1);
} else if ((array [i]>9) && (array [i]<99)) {
    alert (2);
} else if ((array [i]>99) && (array [i]<999)) {
    alert (3);
} else {
        alert (4);
    }
}
