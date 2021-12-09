function handleTask_3_3_1() {
    const rndNum = Math.round(Math.random() * 100);
  
    alert(`Площадь круга с радиусом ${rndNum} = ${Math.PI * ((rndNum * rndNum))}`);
  }
  
  function handleTask_3_3_2() {
    const dateVar = new Date();
    const day_per_ms = 1000 * 60 * 60 * 24;
    const seven_day_per_ms = 7 * day_per_ms;
    let today_ms = dateVar.getTime();
    today_ms += seven_day_per_ms;
    dateVar.setTime(today_ms);
    const seven_day = dateVar.toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric' });
    alert(`Дата через неделю от текущей даты: ${seven_day}`);
  }
  
  function income(ob_frm) {
    const inc_m1 = 1.00 * ob_frm.m1.value;
    const inc_m2 = 1.00 * ob_frm.m2.value;
    const inc_m3 = 1.00 * ob_frm.m3.value;
    const inc_m4 = 1.00 * ob_frm.m4.value;
    const inc_m5 = 1.00 * ob_frm.m5.value;
    const inc_m6 = 1.00 * ob_frm.m6.value;
    const inc_m7 = 1.00 * ob_frm.m7.value;
    const inc_m8 = 1.00 * ob_frm.m8.value;
    const inc_m9 = 1.00 * ob_frm.m9.value;
    const inc_m10 = 1.00 * ob_frm.m10.value;
    const inc_m11 = 1.00 * ob_frm.m11.value;
    const inc_m12 = 1.00 * ob_frm.m12.value;
    const inc_mean = (inc_m1 + inc_m2 + inc_m3 + inc_m4 + inc_m5 + inc_m6 + inc_m7 + inc_m8 + inc_m9 + inc_m10 + inc_m11 + inc_m12) / 12;
    ob_frm.result.value = inc_mean;
  }
  
  function testsel() {
    const d = document;
    const a = d.forms.form2.num.value;
    let s;
    let r = '  ';
    if (((d.forms.form2.elements.list1)[0]).selected) {
      r += ((d.forms.form2.elements[0])[0]).text;
      s = a * a * 3.14;
    }
    if (((d.forms.form2.elements.list1)[1]).selected) {
      r += ((d.forms.form2.elements[0])[1]).text;
      s = a * a;
    }
    if (((d.forms.form2.elements.list1)[2]).selected) {
      r += ((d.forms.form2.elements[0])[2]).text;
      s = a * a / 2;
    }
  
    if (((d.forms.form2.elements.list1)[3]).selected) {
      r += ((d.forms.form2.elements[0])[3]).text;
      s = a * a / 4 * Math.sqrt(3);
    }
  
    d.forms.form2.res.value = `${s} ${d.forms.form2.elements.list2.value}` + "^2";
    d.forms.form2.fig.value = r;
  }
  
  function getAllIndexes(arr, val) {
    const indexes = [];
    let i = -1;
  
    while ((i = arr.indexOf(val, i + 1)) != -1) {
      indexes.push(i);
    }
    return indexes;
  }
  
  function minAndMaxIncome(formElements) {
    const monthsNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август',
      'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const monthsIncomes = [];
  
    for (let i = 1; i <= 12; i++) {
      monthsIncomes.push(+formElements[`m${i}`].value);
    }
  
    const minIncome = Math.min(...monthsIncomes);
    const maxIncome = Math.max(...monthsIncomes);
  
    const minIncomeMonths = getAllIndexes(monthsIncomes, minIncome).map(
      (index) => monthsNames[index],
    );
  
    const maxIncomeMonths = getAllIndexes(monthsIncomes, maxIncome).map(
      (index) => monthsNames[index],
    );
  
    formElements['min-result'].value = `${minIncome} (${minIncomeMonths.join(', ')})`;
    formElements['max-result'].value = `${maxIncome} (${maxIncomeMonths.join(', ')})`;
  }
  
  function setup() {
    const [button_task_3_3_1] = document.getElementsByClassName('button_task_3_3_1');
    button_task_3_3_1.onclick = () => {
      handleTask_3_3_1();
    };
  
    const [button_task_3_3_2] = document.getElementsByClassName('button_task_3_3_2');
    button_task_3_3_2.onclick = () => {
      handleTask_3_3_2();
    };
  
    const [calculateIncomeButton] = document.getElementsByClassName('calculateIncomeButton');
    calculateIncomeButton.onclick = () => {
      const form = document.forms.form1;
      income(form.elements);
    };
  
    const [calculateSquareButton] = document.getElementsByClassName('calculateSquareButton');
    calculateSquareButton.onclick = () => {
      testsel();
    };
  
    const [calculateMinAndMaxIncomeButton] = document.getElementsByClassName('calculateMinAndMaxIncomeButton');
    calculateMinAndMaxIncomeButton.onclick = () => {
      const form = document.forms.form3;
      minAndMaxIncome(form.elements);
    };
  }
  setup();
  