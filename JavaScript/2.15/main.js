
// let a=prompt ('insert number');
// let b=prompt ('insert number');
// min (a,b)

// function min (a,b) {
//     if (a<b) {
//         alert (a);
//     } else {
//         alert (b)
//     }
// }


    
let x=prompt ('введите число');
let n=prompt ('введите степень');

pow (x,n)

function pow (x,n) {
    if (n>1) {
        alert (x**n);
    } else {
        alert (`Степень ${n} не поддерживается, используйте натуральное число`)

    }        
}