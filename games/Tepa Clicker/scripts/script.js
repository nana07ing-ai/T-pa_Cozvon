let money = 0;
const message = document.querySelector('.message');
let money_show = 0;
let tepa_muy = new Audio('./sounds/mc_cat-meow.mp3');
const Tepa_Click = document.getElementById('img_clicker')

let inventory = ['Tepa_Head'];



function money_message() {
    tepa_muy.volume = 1.0;
    tepa_muy.play()
    money += 1;
    money_show += 1;
    document.querySelector('h2').textContent = money_show;
    document.querySelector('.h3_score').textContent = money;
    message.id = 'message_id';
}
function close_message() {
    message.id = '';
    money = 0;
}
function volume_on() {
    tepa_muy.muted = true;
    document.querySelector('.volume_button').textContent = '🔇';
    document.getElementById('volume').onclick = volume_off;
}
function volume_off() {
    document.getElementById('volume').textContent = '🔊';
    document.getElementById('volume').onclick = volume_on;
    tepa_muy.muted = false;
}
const shopitems = [
    {name: 'Tepa_Head', price: 0, img: './images/Tépa.ico'},
    {name: 'Tepa_Pelmen', price: 100, img: './images/Tepa_N_Pelmeni.png'},
    {name: 'Tepa_Sok', price: 250, img: './images/Tepa_Sok.png'},
    {name: 'Tepa_Car', price: 500, img: './images/Tepa_Car.png'},
    {name: 'Tepa_Zloy', price: 750, img: './images/Tepa_zloy.png'},
    {name: 'abdullah_epik', price: 1000, img: './images/Abdullah_Epik.jpg'},
    {name: 'Pachan', price: 2500, img: './images/Pachan.jpg'},
    {name: 'slepa', price: 5000, img: './images/5urodniu_brat_tepi.jpg'},
    {name: 'Tepa_My_House', price: 10000, img: './images/Tepa_My_House.jpg'}
];
function buyItems(name, price, img) {
    const btn_live = document.getElementById('btn_' + name);

    if (inventory.includes(name)) {
        Tepa_Click.src = img;
        document.querySelector('.select_tepa').id = 'select_tepa_id';
        setTimeout(() => {
            document.querySelector('.select_tepa').id = '';
        }, 5000);
        return;
    }

    if (money_show >= price) {
        money_show -= price;
        document.querySelector("h2").textContent = money_show;
        inventory.push(name);
        Tepa_Click.src = img;
        btn_live.textContent = 'Выбрать';
        document.querySelector('.buy_mess').id = 'buy_mess_id';
        setTimeout(() => {
            document.querySelector('.buy_mess').id = '';
        }, 5000);
    }
    else {
        document.querySelector('.buy_fail').id = 'buy_fail_id';
        setTimeout(() => {
            document.querySelector('.buy_fail').id = '';
        }, 5000);
    }
}
function close_buy_mess() {
    document.querySelector('.buy_mess').id = '';
}
function close_fail_mess() {
    document.querySelector('.buy_fail').id = '';
}
function close_select_tepa() {
    document.querySelector('.select_tepa').id = '';
}

// Промокоды
const PromoBaza = {
    'Тёпа' : 250,
    'Новичок' : 10,
    'Тёпа Крутой' : 500,
    'Тёпа Король' : 5000,
    'Тёпа Крутой Король' : 25000
};

let UsedPromocod = [];

function checkpromocod() {
    const promocod = (document.getElementById('input_promocod').value);

    if (PromoBaza.hasOwnProperty(promocod)) {
        if (!UsedPromocod.includes(promocod)) {
            const promo_money = PromoBaza[promocod];
            money_show += promo_money;
            document.querySelector('h2').textContent = money_show;
            UsedPromocod.push(promocod);
            alert(`Промокод Активирован Вы Получили: ${promo_money} Монет`);
        }
        else {
            alert('Вы Уже Активировали Этот Промокод');
        }
    }
    else {
        alert('Вы Ошиблись Адресом');
    }
}