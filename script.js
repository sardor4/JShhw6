let num;
do {
    num = +prompt("Какое задание вывести?", 1)
} while (num > 4);
switch (num) {
    case 1: {
        console.log('1 задание (чётные числа от 0 до 100)\n', ' ');
        for (let i = 2; i <= 100; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
        console.log(' ');
        break;
    }
    case 2: {
        console.log('2 задание (целые числа делящиеся на 3 и на 5)\n', ' ');

        for (let i = 3; i <= 50; i++) {
            if (i % 3 == 0) {
                console.log(i + ' делится на 3');
            }
            if (i % 5 == 0) {
                console.log(i + ' делится на 5');
            }
        }
        break;
    }
    case 3: {
        do {
            var x = +prompt("Введите число больше 100 (3 задание)");
        } while (x <= 100)
        break;
    }
    case 4: {
        console.log('4 задание (таблица умножения на 56 ) \n', ' ');
        let a = 56;
        for (let i = 1; i <= 10; i++) {
            let result = (a * i);
            console.log(result);
        }
        break;
    }
    default:
        break;

}
