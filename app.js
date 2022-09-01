// https://www.omnicalculator.com/finance/graham-number

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const grahamnumberRadio = document.getElementById('grahamnumberRadio');
const bookvaluepershareRadio = document.getElementById('bookvaluepershareRadio');
const earningspershareRadio = document.getElementById('earningspershareRadio');

let grahamnumber;
let bookvaluepershare = v1;
let earningspershare = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

grahamnumberRadio.addEventListener('click', function() {
  variable1.textContent = 'Book value per share';
  variable2.textContent = 'Earnings per share';
  bookvaluepershare = v1;
  earningspershare = v2;
  result.textContent = '';
});

bookvaluepershareRadio.addEventListener('click', function() {
  variable1.textContent = 'Graham number';
  variable2.textContent = 'Earnings per share';
  grahamnumber = v1;
  earningspershare = v2;
  result.textContent = '';
});

earningspershareRadio.addEventListener('click', function() {
  variable1.textContent = 'Graham number';
  variable2.textContent = 'Book value per share';
  grahamnumber = v1;
  bookvaluepershare = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(grahamnumberRadio.checked)
    result.textContent = `Graham number = ${computegrahamnumber().toFixed(2)}`;

  else if(bookvaluepershareRadio.checked)
    result.textContent = `Book value per share = ${computebookvaluepershare().toFixed(2)}`;

  else if(earningspershareRadio.checked)
    result.textContent = `Earnings per share = ${computeearningspershare().toFixed(2)}`;
})

// calculation

function computegrahamnumber() {
  return Math.sqrt(22.5 * Number(earningspershare.value) * Number(bookvaluepershare.value));
}

function computebookvaluepershare() {
  return Math.pow(Number(grahamnumber.value), 2) / (22.5 * Number(earningspershare.value));
}

function computeearningspershare() {
  return Math.pow(Number(grahamnumber.value), 2) / (22.5 * Number(earningspershare.value));
}