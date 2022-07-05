function makealerofcontactus(obj) { //Функция обратгой связи
    var email = String(obj.email.value);
    var com = String(obj.message.value);
    if (email == "" | com == "") {
        alert("Вы не заполнили все поля!");
    } else {
        alert("Сообщение было отправлено!");
    }
}

function mo(obj) { //функция заказа курьера
    var name = String(obj.nickname.value);
    var email = String(obj.email.value);
    var phone = String(obj.phone.value);
    var message = String(obj.message.value);
    if (name == "" | email == "" | phone == "" | message == "") {
        alert("Вы не заполнили все поля!");
    } else {
        alert(name + ", с вами скоро свяжется курьер для разбора подробностей заказа!");
    }
}

function avtorization(obj) { //функция авторизации
    var phone = String(obj.phone.value);
    var pass = String(obj.pass.value);
    if (phone == "" | pass == "") {
        alert("Не все поля введены!");
    } else {
        alert("Вы успешно вошли!");
        window.open('index.html', '_self', false);
    }
}

function registration(obj) { //функция регистрации
    var name = String(obj.nickname.value);
    var surname = String(obj.surname.value);
    var phone = String(obj.phone.value);
    var email = String(obj.email.value);
    var pass = String(obj.pass.value);
    var repeatpass = String(obj.repeatpass.value);
    if (name == "" | surname == "" | email == "" | phone == "" | pass == "" | repeatpass == "") {
        alert("Вы не заполнили все поля!");
    } else {
        if (pass == repeatpass) {
            alert("Вы успешно зарегестрировались!");
            window.open('index.html', '_self', false);
        } else {
            alert("Пароли не совпадают!");
        }
    }
}

function openForm() { //функция открытия окна
    document.getElementById("myForm").style.display = "block";
}

function closeForm() { //функция закрытия окна
    document.getElementById("myForm").style.display = "none";
}