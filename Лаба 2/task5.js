let data = [
  {
    lang: "bel",
    months: [
      "студзень\n",
      "люты\n",
      "сакавік\n",
      "красавік\n",
      "травень\n",
      "жнівень\n",
      "верасень\n",
      "кастрычнік\n",
      "лістапад\n",
      "снежань\n"
    ]
  },
  {
    lang: "eng",
    months: [
      "january\n",
      "february\n",
      "march\n",
      "april\n",
      "may\n",
      "august\n",
      "september\n",
      "october\n",
      "november\n",
      "december\n"
    ]
  },
  {
    lang: "fr",
    months: [
      "janvier\n",
      "février\n",
      "Mars\n",
      "avril\n",
      "Peut\n",
      "août\n",
      "septembre\n",
      "octobre\n",
      "novembre\n",
      "décembre\n"
    ]
  }
]

function out() {
  let lang;
  let options = document.getElementsByName("dynamic");
  for (var index = 0; index < options.length; index++) {
    if (options[index].checked) {
      lang = options[index].value;
    }
  }

  let monthsLocal = [];

  for (const item of data) {
    if (item.lang == lang) {
      monthsLocal.push(...item.months)
      break;
    }
  }

  display(monthsLocal);
}

function display(monthsLocal) {
  alert(monthsLocal);
}