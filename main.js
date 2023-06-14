const users = {}

console.log(users);

for(let i = 1; i <= 10; ++i) {
    
    let userOneId = prompt('Введите Ваше имя')
    let userOneAge = +prompt('Введите Ваш возраст')

    console.log(`Пользователь ${i}`);
    console.log(`Ваше имя ${userOneId}`);
    console.log(`Ваш возраст ${userOneAge}`);

    users[`Пользователь ${i}`] = {}
    users[`Пользователь ${i}`].name = userOneId
    users[`Пользователь ${i}`].age = userOneAge
}

console.log(users);