console.log ('TASK-1.1');

let arrString = [],
    maxLength = 0;

arrString.push(' Домашняя работа: "Функции" ');
arrString.push(' Выполнил: студент гр. ' + prompt('Номер группы') + ' ');
arrString.push(' ' + prompt('ФИО') + ' ');

for (let i = 0; i < arrString.length; i++) {
    let strLength = arrString[i].length;
    if (maxLength < strLength) maxLength = strLength;
}

arrString.unshift ('*'.repeat(maxLength));
arrString.push ('*'.repeat(maxLength));

for (let i=0; i < arrString.length; i++) {
    arrString[i] = '*' + arrString[i] + (' '.repeat(maxLength - arrString[i].length)) + '*';

    console.log(arrString[i])
}


console.log ('TASK-1.2');

let max = +prompt('TASK-1.2. Введите число', '13');
for (let i = 0; i < max; i++) {
    space = "";
    star = "";
for (j = 0; j < max - i; j++) space += " ";
for (j = 0; j < 2 * i + 1; j++) star += "*";
    console.log(space + star);
}


console.log ('TASK-1.3');

// let mail = +prompt ('TASK-1.3. Введите Mail', 'mail@mail.mail');