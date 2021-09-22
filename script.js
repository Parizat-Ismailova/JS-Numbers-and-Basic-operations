/* Task #1
1. Создайте программу, запрашивающую у пользователя длину и 
ширину садового участка в футах. Выведите на экран площадь участка в акрах. 
**Подсказка**. В одном акре содержится 43 560 квадратных футов. */
let gardenLength = prompt("Please, enter your garden length? (feets)");
let gardenWidth = prompt("Please, enter your garden width? (feets)");
const gardenAcres = 43560;
let gardenArea = (gardenLength * gardenWidth) / gardenAcres;
document.write(`<h1>Your Garden Area is: ${gardenArea.toFixed(2)}</h1>`);


/* Task #2
2. Во многих странах в стоимость стеклотары закладывается определенный 
депозит, чтобы стимулировать покупателей напитков сдавать пустые бутылки.
Допустим, бутылки объемом 1 литр и меньше стоят $0,10,
а бутылки большего объема – $0,25. Напишите программу, 
запрашивающую у пользователя количество бутылок каждого размера.
На экране должна отобразиться сумма, которую можно выручить,
если сдать всю имеющуюся посуду. Отформатируйте вывод так, 
чтобы сумма включала два знака после запятой и дополнялась слева символом доллара */
const lessDeposit = 0.1;
const moreDeposit = 0.25;
let lessBottles = prompt("How many bottles do you have in 1 l and less?");
let moreBottles = prompt("how many bottles do you have more than 1l?");
let refund = lessBottles * lessDeposit + moreBottles * moreDeposit;
document.write(`<h1>Total is: $${refund.toFixed(2)}</h1>`);

/* Task #3
3. Программа, которую вы напишете, должна начинаться с запроса у 
пользователя суммы заказа в ресторане. После этого должен быть произведен 
расчет налога и чаевых официанту. Вы можете использовать принятую в вашем 
регионе налоговую ставку для подсчета суммы сборов. В качестве чаевых мы 
оставим 18 % от стоимости заказа без учета налога. На выходе программа 
должна отобразить отдельно налог, сумму чаевых и итог, включая обе 
составляющие. Форматируйте вывод таким образом, чтобы все числа отображались 
с двумя знаками после запятой. */
let bill = +prompt("Your Total Bill: ");
const tax = 7.25 / 100;
const tips = 18 / 100;
let totalTips = bill + tips + tax;
document.write(`<h2>Your region's tax is: $${tax.toFixed(2)}</h2>`);
document.write(`<h2>Your tips for service are: $${tips.toFixed(2)}</h2>`);
document.write(`<h1>Total bill: $${totalTips.toFixed(2)}</h1>`);



/* Home work #1
Напишите программу, запрашивающую у пользователя число и подсчитывающую сумму натуральных положительных чисел 
от 1 до введенного пользователем значения. Сумма первых n положительных чисел может быть рассчитана по формуле: sum = n * (n + 1) / 2. */
let n = prompt("Please, write the number:  ");
const numSum = n * (n + 1) / 2;
document.write(`<h1>Total is: ${numSum.toFixed(2)}</h1>`);



/*Home Work #2
Интернет-магазин занимается продажей различных сувениров и безделушек. 
Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, 
запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.*/
const souvenirGramme = 75;
const trinketGramme = 112;
let orderedSouvenir = prompt("How many souvenirs do you want to order?");
let orderedTrinket = prompt('How many trinkets do you want to order?');
let orderedList = souvenirGramme * orderedSouvenir + trinketGramme * orderedTrinket;
document.write(`<h1> Total is: ${orderedList.toFixed(2)} grammes</h1>`);

/* Home Work #3
Представьте, что вы открыли в банке сберегательный счет под 4 % годовых. 
Проценты банк рассчитывает в конце года и добавляет к сумме счета. Напишите программу, 
которая запрашивает у пользователя сумму первоначального депозита, 
после чего рассчитывает и выводит на экран сумму на счету в конце первого, второго и третьего годов. 
Все суммы должны быть округлены до двух знаков после запятой. */
let deposit = prompt("Please, write summary of your deposit: ");
let period1 = 1;
let period2 = 2;
let period3 = 3;
const percent = 0.04;
let result1 = Math.round(deposit * (1 + percent * period1));
let result2 = Math.round(deposit * (1 + percent * period2));
let result3 = Math.round(deposit * (1 + percent * period3));
document.write(`<h1>Total for 1 year: $${result1.toFixed(2)}</h1>`);
document.write(`<h1>Total for 2 years: $${result2.toFixed(2)}</h1>`);
document.write(`<h1>Total for 3 years: $${result3.toFixed(2)}</h1>`);

    /* Home Work #4
    Создайте программу, которая запрашивает у пользователя два целых числа a и b, после чего выводит на экран результаты следующих математических операций:
    - сумма a и b;
    - разница между a и b;
    - произведение a и b;
    - частное от деления a на b;
    - остаток от деления a на b;
    - результат возведения числа a в степень b.*/ 
    let a = 7.77;
    let b = 8.88;
    let total = a + b;
    console.log(total.toFixed(2));

    let c = 10.12;
    let d = 15;
    let result = c - d;
    console.log(result.toFixed(2));

    let e = 50;
    let f = 30;
    console.log(e * f);

    let h = 10;
    let i = 10;
    console.log(h / i);

    let j = 3;
    let k = 2;
    console.log(j % k);

    let l = 2;
    let m = 5;
    console.log(l ** m);
    