// // - Дана textarea.
// // В неё вводится текст.
// // Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let userInp = document.getElementById('userInp');

// function saveKey() {
//     localStorage.setItem('key', userInp.value)    
// }

// let savedInp = localStorage.getItem('key');
// userInp.value = savedInp;

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let textInp = document.getElementById('textInp');
// let textAr = document.getElementById('textAr');
// let rad = document.myForm.gender; 

// function setChanges(gender) {
//     localStorage.setItem('name' , textInp.value);
//     localStorage.setItem('info' , textAr.value);
//     localStorage.setItem('gender', gender.value) 
// }

// rad.value = localStorage.getItem('gender')
// textInp.value = localStorage.getItem('name');
// textAr.value = localStorage.getItem('info');

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).


// з горем пополам, але цей код працює

// let userText = document.getElementById('userText');

// let valArr = [];
// let arrStr = '';
// let lclArr;
// let j; 

// function checkpoint() {
//     valArr.push(userText.value);
//     arrStr = JSON.stringify(valArr)
//     localStorage.setItem('key', arrStr)

//     lclArr = JSON.parse(localStorage.getItem('key'));
//     j = lclArr.length-1;
// }

// function prev() {
//     userText.value = lclArr[j];
//     j--;
//     if (j<0) {
//         userText.value = ''
//     }
// }

// function next() {
//     userText.value = lclArr[j];
//     j++;
//     if (j > lclArr.length) {
//         userText.value = ''
//     }
// }

// console.log(lclArr);

// Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее
// появляется форма, в которой есть все необходимые инпуты для редактирования, 
// которые уже заполнены данными объект


let userName = document.getElementById('name');
let userPhone = document.getElementById('phone');
let userCity = document.getElementById('city');

class User {
    constructor(name, phone, city){
        this.name = name;
        this.phone = phone;
        this.city = city;
    }
}

let i = 0;
let usersArr = [];
function saveData() {
    
    const user = new User(userName.value, userPhone.value, userCity.value);
    usersArr.push(user);

    localStorage.setItem('users', JSON.stringify(usersArr))
    

    for (i; i<usersArr.length; i++) {

        let userDiv = document.createElement('div');
        userDiv.textContent = JSON.stringify(usersArr[i]);

        let userBtn = document.createElement('button');
        userBtn.textContent = 'delete user'

        userBtn.addEventListener('click', function() {
            usersArr.splice(usersArr[i], 1);
            localStorage.setItem('users', JSON.stringify(usersArr));
            userDiv.remove();
            }   
                         
        )

        document.body.appendChild(userDiv)
        userDiv.appendChild(userBtn)
    }
}

//дай Боже здоров'я тому ментору, який буде перевіряти цю брєдятіну