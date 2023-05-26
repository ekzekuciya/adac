let tg = window.Telegram.WebApp;
let buy = document.getElementById("buy");
let order = document.getElementById("order");
tg.expand();

buy.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("user_name").value = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
});

order.addEventListener("click", () => {
    document.getElementById("error").innerText = '';
    let name = document.getElementById("user_name").value;
    let phone = document.getElementById("user_phone").value;
    let telegram = document.getElementById("user_tg").value;
    if(name.length < 5){
        document.getElementById("error").innerText = "Ошибка в имени";
        return;
    }
    if(phone.length < 5){
        document.getElementById("error").innerText = "Ошибка в номере телефоне";
        return;
    }
    // if(telegram.length < 5){
     //   document.getElementById("error").innerText = "Ошибка в Telegram аккаунте";
     //  return;
    // }
    
    let data = {
        name: name,
        phone: phone,
        telegram: telegram
    }
    tg.sendData(JSON.stringify(data));

    tg.close();

});
