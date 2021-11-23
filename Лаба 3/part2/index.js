
function handleCelsFahConvert() {
    let cels = prompt("Введите значение температуры в градусах по цельсию","Введите температуру");
    ansFah = doFahCelsCalc(cels);
    alert(cels + " градусов по Цельсию равно " + ansFah + " градусов по Фаренгейту");
}
function handleFahCelsConvert() {
    let fah = prompt("Введите значение температуры в градусах по Фаренгейту","Введите температуру");
    ansCel = doCelsFuhCalc(fah);
    alert(fah + " градусов по Фаренгейту равно " + ansCel + " градусов по Цельсию");
}
function handleCelsRumConvert() {
    let cels = prompt("Введите значение температуры в градусах по цельсию","Введите температуру");
    ansRum = doCelsRumCalc(cels);
    alert(cels + " градусов по Цельсию равно " + ansRum + " градусов по Реомюру");
}
function handleRumCelsConvert() {
    let rum = prompt("Введите значение температуры в градусах по Реомюру","Введите температуру");
    ansCel = doRumCelsCalc(rum);
    alert(rum + " градусов по Реомюру равно " + ansCel + " градусов по Цельсию");
}
function handleFahRumConvert() {
    let fah = prompt("Введите значение температуры в градусах по Фаренгейту","Введите температуру");
    ansRum = doFahRumCalc(fah);
    alert(fah + " градусов по Фаренгейту равно " + ansRum + " градусов по Реомюру");
}
function handleRumFahConvert() {
    let rum = prompt("Введите значение температуры в градусах по Реомюру","Введите температуру");
    ansFah = doRumFahCalc(rum);
    alert(rum + " градусов по Реомюру равно " + ansFah + " градусов по Фаренгейту");
}

function doCelsFuhCalc(fah) {
    let ans = ((Number(fah) - 32) / 1.8).toFixed(1);
    return (ans);
}
function doFahCelsCalc(cels) {
    let ans = ((1.8 * Number(cels)) + 32).toFixed(1);
    return (ans);
}
function doCelsRumCalc(cels) {
    let ans = (1.25 * Number(cels)).toFixed(1);
    return (ans);
}
function doRumCelsCalc(rum) {
    let ans = (0.8 * Number(rum)).toFixed(1);
    return (ans);
}
function doFahRumCalc(fah) {
    let ans = (4 / 9 * Number(fah)).toFixed(1);
    return ans;
}
function doRumFahCalc(rum) {
    let ans = (9 / 4 * Number(rum)).toFixed(1);
    return (ans);
}


function setup() {
    const [homePageLink] = document.getElementsByClassName("homePageLink");
    homePageLink.onmouseout = () => {
        alert('Открывем домашнюю страницу...');
        window.open('../../../index.html', '_blank');
    };

    function onBeforeUnload(e) {
        if(!e) e = window.event;
        //e.cancelBubble is supported by IE - this will kill the bubbling process.
        e.cancelBubble = true;
        e.returnValue = 'Пока-пока?'; //This is displayed on the dialog

        //e.stopPropagation works in Firefox.
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        if (e.preventDefault) {
            e.preventDefault();
        }

        return 'Пока-пока?';
    }
    
    window.onbeforeunload = onBeforeUnload;

    const [convertCelsFahButton] = document.getElementsByClassName("convertCelsFahButton");
    const [convertFahCelsButton] = document.getElementsByClassName("convertFahCelsButton");
    const [convertCelsRumButton] = document.getElementsByClassName("convertCelsRumButton");
    const [convertRumCelsButton] = document.getElementsByClassName("convertRumCelsButton");
    const [convertFahRumButton] = document.getElementsByClassName("convertFahRumButton");
    const [convertRumFahButton] = document.getElementsByClassName("convertRumFahButton");

    convertCelsFahButton.ondblclick = () => {
        handleCelsFahConvert();
    };
    convertFahCelsButton.ondblclick = () => {
        handleFahCelsConvert();
    };
    convertCelsRumButton.ondblclick = () => {
        handleCelsRumConvert();
    };
    convertRumCelsButton.ondblclick = () => {
        handleRumCelsConvert();
    };
    convertFahRumButton.ondblclick = () => {
        handleFahRumConvert();
    };
    convertRumFahButton.ondblclick = () => {
        handleRumFahConvert();
    };
}
setup();