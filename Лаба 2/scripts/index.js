var engWords =
    ["star", "money", "morning", "friend", "breakfast", "well", "love", "thanks", "hello", "life"];

var rusWords =
    ["звезда", "деньги", "утро", "друг", "завтрак", "хорошо", "любовь", "спасибо", "привет", "жизнь"];

var belWords =
    ["зорка", "грошы", "раніца", "сябар", "сняданак", "добра", "каханне", "дзякуй", "прывітанне", "жыццё"];

var frWords =
    ["étoile", "argent", "matin", "ami", "petit déjeuner", "bien", "amour", "merci", "bonjour", "vie"];

var div = document.getElementById("div");

var table1 = document.createElement("table");
var thead1 = document.createElement("thead");
var tbody1 = document.createElement("tbody");

var table2 = document.createElement("table");
table2.id = "tttable";


var row1 = document.createElement("tr");
var heading1 = document.createElement("th");
heading1.innerHTML = "Русское слово";

row1.appendChild(heading1);
thead1.appendChild(row1);
table1.appendChild(thead1);

fillWords(rusWords, tbody1);

table1.appendChild(tbody1);

div.appendChild(table1);
div.appendChild(table2);

document.getElementById("body").appendChild(div);

function fillWords(words, tbody) {
    for (var index = 0; index < words.length; index++) {
        var row = document.createElement("tr");
        var row_data1 = document.createElement("td");
        
        row_data1.innerHTML = words[index];
    
        row.appendChild(row_data1);
        tbody.appendChild(row);
    }
}

function drawTranslationTable() {
    let table12 = document.getElementById("tttable");
    document.getElementById("div").removeChild(table12);

    var table2 = document.createElement("table");
    table2.id = "tttable";
    var thead2 = document.createElement("thead");
    var tbody2 = document.createElement("tbody");

    var row2 = document.createElement("tr");
    var heading2 = document.createElement("th");
    heading2.innerHTML = "Перевод";

    row2.appendChild(heading2);
    thead2.appendChild(row2);
    table2.appendChild(thead2);

    var lang;
    var options = document.getElementsByName("dynamic");
    for (var index = 0; index < options.length; index++) {
        if (options[index].checked) {
            lang = options[index].value;
        }
    }

    switch (lang) {
        case "bel":
            fillWords(belWords, tbody2);
            break;
        case "eng":
            fillWords(engWords, tbody2);
            break;
        case "fr":
            fillWords(frWords, tbody2);
            break;
        case "rus":
            fillWords(rusWords, tbody2);
            break;
    }
    
    table2.appendChild(tbody2);
    div.appendChild(table2);
}