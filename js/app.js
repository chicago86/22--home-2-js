"use strict"

let answer = prompt('Введите имя пользователя');

if (answer === null){
    alert('Я Вас не знаю!');
}
    else if(answer.toLowerCase() === 'admin'){

let answer = prompt('Введите пароль');

if (answer === null){
    alert('Пока...');
}
    else if (answer.toLowerCase() === 'admin'){
        alert('Добро пожаловать!');
    }
    else{
        alert('Пароль не верен! Возможно все таки вы admin?');
    }

}
else{
    alert('Возможно все таки вы admin?');
}



