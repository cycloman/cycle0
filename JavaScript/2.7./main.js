let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string

let str="123";
Number (str);
alert (str);

let age = Number("Любая строка вместо числа");
alert(age); // NaN, преобразование не удалось

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0