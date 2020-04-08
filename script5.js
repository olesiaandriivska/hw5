//
//
// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//
// let tags=[
//
//         new Tag('a', `Тег <a> предназначен для создания ссылок.`,[
//             {nameAttributes: 'accesskey', actionAttributes: 'Активация ссылки с помощью комбинации клавиш.'},
//             {nameAttributes: 'coords', actionAttributes: 'Устанавливает координаты активной области.'},
//             {nameAttributes: 'download', actionAttributes: 'Предлагает скачать указанный по ссылке файл.'},]),
//         new Tag('div',`Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`,[
//             {nameAttributes:'align',actionAttributes:'Задает выравнивание содержимого тега <div>.'},
//             {nameAttributes:'title',actionAttributes:'Добавляет всплывающую подсказку к содержимому.'},]),
//         new Tag('h1',`Тег <h1> представляет собой наиболее важный заголовок первого уровня.`,[
//             {nameAttributes:'align',actionAttributes:'Определяет выравнивание заголовка.'},
//             {nameAttributes:'accesskey',actionAttributes:'Активация ссылки с помощью комбинации клавиш.'},]),
//         new Tag('span',`Тег <span> предназначен для определения строчных элементов документа.`,[
//             {nameAttributes:'class',actionAttributes:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//             {nameAttributes:'id',actionAttributes:'Указывает имя стилевого идентификатора.'},]),
//         new Tag('input',`Тег <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.`,[
//             {nameAttributes:'alt',actionAttributes:'Альтернативный текст для кнопки с изображением.'},
//             {nameAttributes:'autofocus',actionAttributes:'Устанавливает фокус в поле формы.'},
//             {nameAttributes:'border',actionAttributes:'Толщина рамки вокруг изображения.'},]),
//         new Tag('form','Тег <form> устанавливает форму на веб-странице.',[
//             {nameAttributes:'enctype',actionAttributes:'Способ кодирования данных формы.'},
//             {nameAttributes:'method',actionAttributes:'Метод протокола HTTP.'},
//             {nameAttributes:'name',actionAttributes:'Имя формы.'},]),
//         new Tag('option',`Тег <option> определяет отдельные пункты списка.`,[
//             {nameAttributes:'disabled',actionAttributes:'Заблокировать для доступа элемент списка.'},
//             {nameAttributes:'label',actionAttributes:'Указание метки пункта списка.'},
//             {nameAttributes:'selected',actionAttributes:'Заранее устанавливает определенный пункт списка выделенным.'},]),
//         new Tag('select',`Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка.`,[
//             {nameAttributes:'disabled',actionAttributes:'Блокирует доступ и изменение элемента.'},
//             {nameAttributes:'autofocus',actionAttributes:'Устанавливает, что список получает фокус после загрузки страницы.'},
//             {nameAttributes:'accesskey',actionAttributes:'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},]),
// ]
// function Tag(name,action,attributes) {
//     this.name=name;
//     this.action=action;
//    this.attributes=attributes;
//
// }
// console.log(tags);

// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//
// class Tag{
//     constructor(name,action,attributes){
//         this.name=name;
//         this.action=action;
//         this.attributes=attributes;
//
//     }
// }
// let tags=[
//
//     new Tag('a', `Тег <a> предназначен для создания ссылок.`,[
//         {nameAttributes: 'accesskey', actionAttributes: 'Активация ссылки с помощью комбинации клавиш.'},
//         {nameAttributes: 'coords', actionAttributes: 'Устанавливает координаты активной области.'},
//         {nameAttributes: 'download', actionAttributes: 'Предлагает скачать указанный по ссылке файл.'},]),
//     new Tag('div',`Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`,[
//         {nameAttributes:'align',actionAttributes:'Задает выравнивание содержимого тега <div>.'},
//         {nameAttributes:'title',actionAttributes:'Добавляет всплывающую подсказку к содержимому.'},]),
//     new Tag('h1',`Тег <h1> представляет собой наиболее важный заголовок первого уровня.`,[
//         {nameAttributes:'align',actionAttributes:'Определяет выравнивание заголовка.'},
//         {nameAttributes:'accesskey',actionAttributes:'Активация ссылки с помощью комбинации клавиш.'},]),
//     new Tag('span',`Тег <span> предназначен для определения строчных элементов документа.`,[
//         {nameAttributes:'class',actionAttributes:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//         {nameAttributes:'id',actionAttributes:'Указывает имя стилевого идентификатора.'},]),
//     new Tag('input',`Тег <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.`,[
//         {nameAttributes:'alt',actionAttributes:'Альтернативный текст для кнопки с изображением.'},
//         {nameAttributes:'autofocus',actionAttributes:'Устанавливает фокус в поле формы.'},
//         {nameAttributes:'border',actionAttributes:'Толщина рамки вокруг изображения.'},]),
//     new Tag('form','Тег <form> устанавливает форму на веб-странице.',[
//         {nameAttributes:'enctype',actionAttributes:'Способ кодирования данных формы.'},
//         {nameAttributes:'method',actionAttributes:'Метод протокола HTTP.'},
//         {nameAttributes:'name',actionAttributes:'Имя формы.'},]),
//     new Tag('option',`Тег <option> определяет отдельные пункты списка.`,[
//         {nameAttributes:'disabled',actionAttributes:'Заблокировать для доступа элемент списка.'},
//         {nameAttributes:'label',actionAttributes:'Указание метки пункта списка.'},
//         {nameAttributes:'selected',actionAttributes:'Заранее устанавливает определенный пункт списка выделенным.'},]),
//     new Tag('select',`Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка.`,[
//         {nameAttributes:'disabled',actionAttributes:'Блокирует доступ и изменение элемента.'},
//         {nameAttributes:'autofocus',actionAttributes:'Устанавливает, что список получает фокус после загрузки страницы.'},
//         {nameAttributes:'accesskey',actionAttributes:'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},]),
// ]
// console.log(tags);
//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// let car={
//     model:'Volkswagen Passat',
//     manufacturer:'Volkswagen',
//     year:2018,
//     maxSpeed:280,
//     engineСapacity:3.6,
//     drive: function() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину.`)
//     },
//     info: function () {
//         console.log(`model:${this.model},`);
//         console.log(`manufacturer:${this.manufacturer},`);
//         console.log(`year:${this.year},`);
//         console.log(`maxSpeed:${this.yemaxSpeedar},`);
//         console.log(`engineСapacity:${this.engineСapacity}`);
//     },
//     increaseMaxSpeed:function (speed) {
//         let newSpeed=speed;
//         car.maxSpeed=car.maxSpeed+newSpeed;
//         console.log(car.maxSpeed);
//     },
//     changeYear:function (value) {
//         let newValue=value;
//         car.year=newValue;
//         console.log(car.year);
//     },
//     addDriver:function (driver) {
//         console.log(driver);
//     }
// }

// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2015);
// let driver ={
//     name:'Oleg',
//     age:32,
//     language:['english','germany','spanish']
// }
// car.addDriver(driver);
//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// function Car(model, manufacturer,year,maxSpeed,engineСapacity,propertyFromFunction) {
//     this.model = model;
//     this.manufacturer=manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineСapacity = engineСapacity;
//     this.drivers = propertyFromFunction;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину.`)
//     },
//         this.info = function () {
//             console.log(`model:${this.model},`);
//             console.log(`manufacturer:${this.manufacturer},`);
//             console.log(`year:${this.year},`);
//             console.log(`maxSpeed:${this.yemaxSpeedar},`);
//             console.log(`engineСapacity:${this.engineСapacity}`);
//         },
//         this.increaseMaxSpeed = function (speed) {
//             let newSpeed = speed;
//             car.maxSpeed = car.maxSpeed + newSpeed;
//             console.log(car.maxSpeed);
//         }
//         this.changeYear = function (value) {
//             let newValue = value;
//             car.year = newValue;
//             console.log(car.year);
//         }
//         propertyFromFunction=this.addDriver=function (driver) {
//             car.drivers=driver;
//         }
// }
// let car = new Car('Volkswagen Passat','Volkswagen',2018,280,3.6);
// console.log(car);
// car.drive();
// car.increaseMaxSpeed(79);
// car.changeYear(1234);
// let driver ={
//     name:'Oleg',
//     age:32,
//     language:['english','germany','spanish']
// }
// car.addDriver(driver);
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineСapacity, propertyFromFunction) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineСapacity = engineСapacity;
//         this.drivers = propertyFromFunction;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину.`)
//     }
//
//     info() {
//         console.log(`model:${this.model},`);
//         console.log(`manufacturer:${this.manufacturer},`);
//         console.log(`year:${this.year},`);
//         console.log(`maxSpeed:${this.yemaxSpeedar},`);
//         console.log(`engineСapacity:${this.engineСapacity}`);
//     }
//
//     increaseMaxSpeed(speed) {
//         let newSpeed = speed;
//         car.maxSpeed = car.maxSpeed + newSpeed;
//         console.log(car.maxSpeed);
//     }
//
//     changeYear(value) {
//         let newValue = value;
//         car.year = newValue;
//         console.log(car.year);
//     }
//
//     propertyFromFunction=this.addDriver;
//     addDriver(driver) {
//         car.drivers=driver;
//         //console.log(car);
//     }
//
// }
// let driver = {
//     name: 'Oleg',
//     age: 32,
//     language: ['english', 'germany', 'spanish']
// }
// let car = new Car('Volkswagen Passat', 'Volkswagen', 2018, 280, 3.6);
// console.log(car);
// car.drive();
// car.increaseMaxSpeed(79);
// car.changeYear(1234);
// car.addDriver(driver);
//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Popelyshka {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// class Prince {
//     constructor(name, age, sizeOfSlipper) {
//         this.name = name;
//         this.age = age;
//         this.sizeOfSlipper = sizeOfSlipper;
//     }
//
//     searchPopelyshka(arr1, arr2) {
//         let popelyshkaPrince = arr1[0];
//         for (let i = 0; i < arr1.length; i++) {
//             for (let j = 0; j < arr1.length; j++) {
//
//                 const arr1Element = arr1[i];
//                 if (arr1Element.size === arr2.sizeOfSlipper) {
//                     popelyshkaPrince = arr1Element;
//                     console.log(popelyshkaPrince);
//                     return arr1;
//                 }
//             }
//         }
//     }
// }
//
// let popelyshka = [
//     new Popelyshka('Vika', 21, 37),
//     new Popelyshka('Dasha', 23, 39),
//     new Popelyshka('Inna', 19, 38),
//     new Popelyshka('Tina', 16, 35),
//     new Popelyshka('Olya', 28, 37),
//     new Popelyshka('Ira', 25, 39),
//     new Popelyshka('Sofia', 21, 36),
//     new Popelyshka('Katya', 29, 35),
//     new Popelyshka('Nadya', 31, 40),
//     new Popelyshka('Toma', 11, 30),
//
// ]
// let prince = new Prince('Victor', 26, 36);
// console.log(prince);
// console.log(popelyshka);
// prince.searchPopelyshka(popelyshka,prince);


// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
function Popelyshka(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}

function Prince(name, age, sizeOfSlipper) {
    this.name = name;
    this.age = age;
    this.sizeOfSlipper = sizeOfSlipper;

    this.searchPopelyshka = function (arr1, arr2) {
        let popelyshkaPrince = arr1[0];
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr1.length; j++) {

                const arr1Element = arr1[i];
                if (arr1Element.size === arr2.sizeOfSlipper) {
                    popelyshkaPrince = arr1Element;
                    console.log(popelyshkaPrince);
                    return arr1;
                }

            }
        }
    }
}

let popelyshka = [
    new Popelyshka('Vika', 21, 37),
    new Popelyshka('Dasha', 23, 39),
    new Popelyshka('Inna', 19, 38),
    new Popelyshka('Tina', 16, 35),
    new Popelyshka('Olya', 28, 37),
    new Popelyshka('Ira', 25, 39),
    new Popelyshka('Sofia', 21, 36),
    new Popelyshka('Katya', 29, 35),
    new Popelyshka('Nadya', 31, 40),
    new Popelyshka('Toma', 11, 30),

]
let prince = new Prince('Victor', 26, 36);
console.log(prince);
console.log(popelyshka);
prince.searchPopelyshka(popelyshka,prince);
