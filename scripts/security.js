let angry = 0;
const tepa_gr = new Audio('./sounds/Tepa_Zloy_Volume.mp3');
const tepa_blen_zvyk = new Audio('./sounds/Tepa_Blen_Sound.mp3')


document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('contextmenu', (e) => e.preventDefault());



function checkNumber() {
    // 1. Берем значение и превращаем в число
    const val = (document.getElementById('myInput').value);

    // 2. Условие (например, проверяем, что число больше 10)
    if (val == "$&TepaKorol&$") {
        sessionStorage.setItem('PassTrue', 'true');
        window.location.assign("menu.html");
    } else {
        angry += 1;
        document.getElementsByClassName('imga')[0].src = "./images/Tépa-zloy_1.jpg";
        tepa_gr.volume = 1.0;
        tepa_gr.play();
        document.querySelector('button').onclick = checkpass;
        document.getElementsByClassName('message')[0].id = 'message_view';
        setTimeout(() => {
            document.getElementsByClassName('message')[0].id = '';
        }, 2000);
    }
}
function checkpass() {
    const val = (document.getElementById('myInput').value);

    if (val == "$&TepaKorol&$") {
        sessionStorage.setItem('PassTrue', 'true');
        window.location.assign('menu.html');
    }
    else {
        document.getElementsByClassName('imga')[0].src = "./images/Tépa-zloy_2.jpg"
        tepa_gr.volume = 1.0;
        tepa_gr.play();
        angry += 1;
        document.querySelector('button').onclick = checkangry;
        document.getElementsByClassName('message')[0].id = 'message_view';
        setTimeout(() => {
            document.getElementsByClassName('message')[0].id = '';
        }, 2000);
    }
}
function checkangry() {
    const val = (document.getElementById('myInput').value);

    if (val == "$&TepaKorol&$") {
        sessionStorage.setItem('PassTrue', 'true');
        window.location.assign('menu.html');
    }
    else {
        document.getElementsByClassName('imga')[0].src = "./images/Tépa-zloy_READY.jpg";
        tepa_gr.volume = 1.0;
        tepa_gr.play();
        angry += 1;
        document.querySelector('button').onclick = checkready;
        document.getElementsByClassName('message')[0].id = 'message_view';
        setTimeout(() => {
            document.getElementsByClassName('message')[0].id = '';
        }, 2000);
    }
}
function checkready() {
    const val = (document.getElementById('myInput').value);

    if (val == "$&TepaKorol&$") {
        sessionStorage.setItem('PassTrue', 'true');
        window.location.assign('menu.html');
    }
    else {
        if (angry == 3) {
        tepa_blen_zvyk.volume = 1.0;
        tepa_blen_zvyk.play();
        document.getElementsByClassName('ble')[0].id = "tepa_blen";
        document.getElementsByClassName('message')[0].id = 'message_view';
        setTimeout(() => {
            document.getElementsByClassName('message')[0].id = '';
        }, 2000);
        }
    }
}
