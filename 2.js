console.log ('!! TASK-2.1');

function sum (a, b, c) {
    console.log ((a - b) / c);
};
sum (10, 5, 2);


console.log ('!! TASK-2.2');

let korkub = function (a) {
    console.log ('2 = ' + a ** 2);
    console.log ('3 = ' + a ** 3);
};
korkub (5);


console.log ('!! TASK-2.3');

let minmax = [3, 7, 1, 99, 6];
minmax.sort(function (a, b) {
    return a - b;
});

console.log ('min = ' + minmax.shift());
console.log ('max = ' + minmax.pop());

// ещё один вариант
// console.log ('max = ' + (minmax[minmax.length-1]));
// minmax.reverse ();
// console.log ('min = ' + (minmax[minmax.length-1]));


console.log ('!! TASK-2.4 (write)');

function input () {
    i = +prompt ('TASK-4. Введите число A', '8');
    b = +prompt ('TASK-4. Введите число B', '36'); 
}
input ();

function result () {
    let array = [];

    if (i <= b) {
        for (; i <= b; i++) {
        array.push(i);
    }
    } else { 
        for (; i >= b; i--) {
        array.push(i);
    } 
    };
    document.write ('TASK-4. Массив: ' + array)
    document.write ('</br>', '</br>');
};
result ();


console.log ('!! TASK-2.5 (write)');

let isEven = +prompt ('TASK-5 & 6. Введите число', '8');
function f(n) {
	let a
	if (n % 2 == 0) {
		a = true;
	} else {
		a = false;
	}
	return a;
}
document.write ('TASK-5. Число ' + isEven + ' = ' + f(isEven));
document.write ('</br>', '</br>');


console.log ('!! TASK-2.6 (write)');

function f2() {
    document.write ('TASK-6. Чётные числа, согласно числу TASK-5: ');

    let i = 2
for (; i <= isEven; i++) {
    if (i % 2 == 0) {
        document.write (i + ' ');
    }
  };
};
f2()


console.log ('!! TASK-2.7 (write)');

let symbol = '*';
function pyramid(n){
document.write ('TASK-7.  Пирамида');
document.write ('</br>');
  for(let i = 1; i <= n; i++){
    let m = '';
    for(let j = 0; j < i; j++){
      m+= symbol == ' ' ? i : symbol;
    };
    document.write (m+'\n')
    document.write ('</br>');
  }
};
pyramid(+prompt('TASK-7. Введите число для высоты пирамиды', '9'))


console.log ('!! TASK-2.8');

let number =[0,1]
function fibonachi () {
    for (let i = 2; i< 1000; i++) {
        number[i] = number[i-1] + number[i-2];
    }
    console.log(number);
}
fibonachi ()


console.log ('!! TASK-2.9');

function nom(nn){
    let summ = 0,
        num = String(nn),
        i = 0;

    for (; i < num.length; i++){
        summ += +num[i];
    };
    num = String(summ);
    if (summ > 9) {
        nom(summ);
    } else {
        console.log (num)
    }
}
nom(56);


console.log ('!! TASK-2.10');

function num(n) {
    console.log (n[i1]);
    i1++;
    if (i1 < n.length) num(n);
}
let i1 = 0;
num([2,49,5,17,8,9]);