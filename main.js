// 1) Получение ресурса
// function reqListener () {
//     console.log(this.responseText);//Возвращает строку, содержащую ответ на запрос в виде текста
//   }
  
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener); //при загрузці визивається метод reqListener
//   oReq.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
//   oReq.send();


// 2) Список всех ресурсов
// var oReq = new XMLHttpRequest();

// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://jsonplaceholder.typicode.com/posts");

// oReq.send();

// function reqListener () {
//     console.log(this.responseText);
//   }

// 3) Создание ресурса
// var xhr = new XMLHttpRequest();
// xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
// xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

// xhr.send('title=foo&body=bar&userId=1');

// xhr.onload = function () {
//   console.log(this.responseText);
// };

// 4) Обновление ресурса
// var xhr = new XMLHttpRequest();
// xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1', true);
// xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

// xhr.send(`id=1&title=foo&body=bar&userId=1`);

// xhr.onload = function () {
//   console.log(this.responseText);
// };

// 5) Исправление ресурса
// var xhr = new XMLHttpRequest();
// xhr.open('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', true);
// xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

// xhr.send(`body=&title=foo`);

// xhr.onload = function () {
//   console.log(this.responseText);
// };

// 6) Удаление ресурса
// var xhr = new XMLHttpRequest();
// xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', true);
// xhr.send();

// 7) Фильтрация ресурсов
// var oReq = new XMLHttpRequest();

// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=1");

// oReq.send();

// function reqListener () {
//     console.log(this.responseText);
//   }

// 8) Список вложенных ресурсов
// var oReq = new XMLHttpRequest();

// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://jsonplaceholder.typicode.com/posts/1/comments");

// oReq.send();

// function reqListener () {
//     console.log(this.responseText);
//   }
