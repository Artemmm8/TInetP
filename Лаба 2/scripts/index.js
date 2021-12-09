let data = [
    {
        lang: "eng",
        words: ["star", "money", "morning", "friend", "breakfast", "well", "love", "thanks", "hello", "life"]
    },
    {
        lang: "bel",
        words: ["зорка", "грошы", "раніца", "сябар", "сняданак", "добра", "каханне", "дзякуй", "прывітанне", "жыццё"]
    },
    {
        lang: "fr",
        words: ["étoile", "argent", "matin", "ami", "petit déjeuner", "bien", "amour", "merci", "bonjour", "vie"]
    }
]

let div = document.getElementById("div");

let table1 = document.createElement("table");
let thead1 = document.createElement("thead");
let tbody1 = document.createElement("tbody");

let table2 = document.createElement("table");
table2.id = "tttable";


let row1 = document.createElement("tr");
let heading1 = document.createElement("th");
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
    for (let index = 0; index < words.length; index++) {
        let row = document.createElement("tr");
        let row_data1 = document.createElement("td");
        
        row_data1.innerHTML = words[index];
    
        row.appendChild(row_data1);
        tbody.appendChild(row);
    }
}

function drawTranslationTable() {
    let table12 = document.getElementById("tttable");
    document.getElementById("div").removeChild(table12);

    let table2 = document.createElement("table");
    table2.id = "tttable";
    let thead2 = document.createElement("thead");
    let tbody2 = document.createElement("tbody");

    let row2 = document.createElement("tr");
    let heading2 = document.createElement("th");
    heading2.innerHTML = "Перевод";

    row2.appendChild(heading2);
    thead2.appendChild(row2);
    table2.appendChild(thead2);

    let lang;
    let options = document.getElementsByName("dynamic");
    for (let index = 0; index < options.length; index++) {
        if (options[index].checked) {
            lang = options[index].value;
        }
    }

    let wordsLocal = [];

    for (const item of data) {
        if (item.lang == lang) {
            wordsLocal.push(...item.words)
        }
    }

    fillWords(wordsLocal, tbody2);
    
    table2.appendChild(tbody2);
    div.appendChild(table2);
}