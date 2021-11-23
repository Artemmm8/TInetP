function handle_task_3_1_1 () {
    const showTwoAlerts = confirm('Вывести два алерта?');

    if (showTwoAlerts) {
        alert('Первый алерт');
        alert('Второй алерт');
    } else {
        alert('Только первый алерт');
    }
}
function handle_task_3_1_2 () {
    let x = 1;

    do {
        alert(x);
        x++;
    } while (x <= 5);
}
function handle_task_3_1_3 () {
    let x = 0;
    do
    {
        sometext = prompt("Введите текст", "Введите любой текст");
        x++;
    }
    while ((sometext == "Введите любой текст" || sometext == "" || sometext == null) && x < 3);
    if (sometext == "Введите любой текст" || sometext == "" || sometext == null) {
        alert("Вы не ввели текст")
    }
    else alert(sometext);
}
function handle_task_3_1_4 () {
    let x = 1;

    while(x <= 5) {
        alert(x);
        x++;
    }
}
function handle_task_3_1_5 () {
    let array = [];

    for (i = 9; i >= 0; i--) {
        array.push(i);
    }

    alert(array);
}
function handle_task_3_1_6 () {
    let myarray = ["","","","",""];
    let y=0, ys="", extent=".jpg";

    for (x in myarray) {
          y++;
          ys=y;
          myarray[x] = `<a src="../assets/img_${+x + 1}${extent}">рис.${ys}</a>`;
      }
    
    alert("Ссылки на мои картинки jpg-формата:"+myarray);
}
function handle_task_3_1_7 () {
    let x = 0;
    while (x < 10){
        x++;
        if (x % 2 == 1)
        {
            continue;
        }
        alert(x);
    }
}
function handle_task_3_1_8 () {
    let breakat = prompt("Введите число для прерывания цикла от 1 до 10-ти ", "");

    for (let x = 1; x <= 10; x++) {
        if (x == breakat) {
            break;
        }
        alert(x);
    }
}
function handle_task_3_1_9 () {
    let yourchoice = prompt("Загадайте букву a, b, c, d или e")
    switch (yourchoice) {
    case "a":
    alert("Вы ввели букву a");
    break;

    case "b":
    alert("Вы ввели букву b");
    break;

    case "c":
    alert("Вы ввели букву c");
    break;

    case "d":
    alert("Вы ввели букву d");
    break;

    case "e":
    alert("Вы ввели букву e");
    break;

    default:
    alert("Вы должны были ввести букву a, b, c, d или e");
    break;
    }  
}
function handle_task_3_1_10 () {
    let attempts = 3;

    while (attempts > 0) {
        let pass = prompt(`Введите пароль, пожалуйста (осталось ${attempts} попыток):`);


        if (pass=='123') { 
            alert('Поздравляем! Вы ввели верный пароль!');
            break;
        } else { 
            attempts--;

            if (attempts == 0) {
                alert('К сожалению, вы ввели неправильный пароль. Доступ Запрещён.'); 
                top.location.href="reviews.html" 
            } else {
                alert('Вы ввели неправильный пароль. Попробуйте ещё раз.'); 
            }
        }
    }
    
    if (attempts == 0) {
    }
}

function setup() {
    const [button_task_3_1_1] = document.getElementsByClassName("button_task_3_1_1");
    button_task_3_1_1.onclick = () => {
        handle_task_3_1_1();
    };

    const [button_task_3_1_2] = document.getElementsByClassName("button_task_3_1_2");
    button_task_3_1_2.onclick = () => {
        handle_task_3_1_2();
    };

    const [button_task_3_1_3] = document.getElementsByClassName("button_task_3_1_3");
    button_task_3_1_3.onclick = () => {
        handle_task_3_1_3();
    };

    const [button_task_3_1_4] = document.getElementsByClassName("button_task_3_1_4");
    button_task_3_1_4.onclick = () => {
        handle_task_3_1_4();
    };

    const [button_task_3_1_5] = document.getElementsByClassName("button_task_3_1_5");
    button_task_3_1_5.onclick = () => {
        handle_task_3_1_5();
    };

    const [button_task_3_1_6] = document.getElementsByClassName("button_task_3_1_6");
    button_task_3_1_6.onclick = () => {
        handle_task_3_1_6();
    };

    const [button_task_3_1_7] = document.getElementsByClassName("button_task_3_1_7");
    button_task_3_1_7.onclick = () => {
        handle_task_3_1_7();
    };

    const [button_task_3_1_8] = document.getElementsByClassName("button_task_3_1_8");
    button_task_3_1_8.onclick = () => {
        handle_task_3_1_8();
    };

    const [button_task_3_1_9] = document.getElementsByClassName("button_task_3_1_9");
    button_task_3_1_9.onclick = () => {
        handle_task_3_1_9();
    };

    const [button_task_3_1_10] = document.getElementsByClassName("button_task_3_1_10");
    button_task_3_1_10.onclick = () => {
        handle_task_3_1_10();
    };
};

setup();