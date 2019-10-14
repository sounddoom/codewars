let table = document.createElement('table');
table.style.padding = '8px';
document.body.appendChild(table);
const tableFragment = document.createDocumentFragment();
for (let i = 0; i <= 9; i++) {
   let td = document.createElement('td');
   td.style.border = '1px solid black';
   td.style.padding = '20px';
   tableFragment.appendChild(td);
   td.innerText = i;
}
for (let i = 1; i <= 9; i++) {
   let tr = document.createElement('tr');
   tableFragment.appendChild(tr);
   for (let j = 1, k = 0; j <= 9; j++) {
      let td = document.createElement('td');
      td.style.border = '1px solid black';
      td.style.padding = '20px';
      td.innerText = j * i;
      tableFragment.appendChild(td);
      if (j === 1) {
         let td = document.createElement('td');
         td.style.border = '1px solid black';
         td.style.padding = '20px';
         td.innerText = j * i;
         tableFragment.appendChild(td);
      }
   }
}
table.appendChild(tableFragment);

// first

let table = document.createElement('table');
table.style.padding = '8px';
document.body.appendChild(table);
for (let i = 0; i <= 9; i++) {
   let td = document.createElement('td');
   td.style.border = '1px solid black';
   td.style.padding = '20px';
   table.appendChild(td);
   td.innerText = i;
}
for (let i = 1; i <= 9; i++) {
   let tr = document.createElement('tr');
   table.appendChild(tr);
   for (let j = 1, k = 0; j <= 9; j++) {
      let td = document.createElement('td');
      td.style.border = '1px solid black';
      td.style.padding = '20px';
      td.innerText = j * i;
      tr.appendChild(td);
      if (j === 1) {
         let td = document.createElement('td');
         td.style.border = '1px solid black';
         td.style.padding = '20px';
         td.innerText = j * i;
         tr.appendChild(td);
      }
   }
}

//second
let table = document.createElement('table');
table.style.padding = '8px';
document.body.appendChild(table);
const tableFragment = document.createDocumentFragment();

for (let i = 1, k = 0; i <= 9; i++) {
   let tr = document.createElement('tr');
   tableFragment.appendChild(tr);
   for (let j = 1; j <= 9; j++) {
      if (j === 1) {
         let td = document.createElement('td');
         td.style.border = '1px solid black';
         td.style.padding = '20px';
         if (k === 0) {
            td.innerText = j * k;
         } else {
            td.innerText = j * i;
         }
         td.className = 'td';
         tableFragment.appendChild(td);
      }
      let td = document.createElement('td');
      td.style.border = '1px solid black';
      td.style.padding = '20px';
      td.innerText = j * i;
      td.className = 'td';
      tableFragment.appendChild(td);
   }
   if (i === 1 && k === 0) {
      --i;
      ++k;
   }
}
table.appendChild(tableFragment);
var td = document.getElementsByClassName('td')

function changeColor() {
   this.style.backgroundColor = 'red';
}
function returnColor(el) {
   this.style.backgroundColor = 'white';
}
for (i = 0; i < td.length; i++) {
   td[i].onmouseover = changeColor;
   td[i].onmouseout = returnColor;
}
// third
let table = document.createElement('table');
table.style.padding = '8px';
document.body.appendChild(table);
const tableFragment = document.createDocumentFragment();

for (let i = 1, k = 0; i <= 9; i++) {
   let tr = document.createElement('tr');
   tr.className = 'tr';
   tableFragment.appendChild(tr);
   // callEvent(tr);
   for (let j = 1; j <= 9; j++) {
      if (j === 1) {
         let td = document.createElement('td');
         td.style.border = '1px solid black';
         td.style.padding = '20px';
         if (k === 0) {
            td.innerText = j * k;
         } else {
            td.innerText = j * i;
         }
         td.className = 'td';
         tr.appendChild(td);
         callEvent(td);
      }
      let td = document.createElement('td');
      td.style.border = '1px solid black';
      td.style.padding = '20px';
      td.innerText = j * i;
      td.className = 'td';
      tr.appendChild(td);
      callEvent(td);
   }
   if (i === 1 && k === 0) {
      --i;
      ++k;
   }
}
table.appendChild(tableFragment);
var td = document.getElementsByClassName('td')
var tr = document.getElementsByClassName('tr')

function changeColor() {
   this.style.backgroundColor = 'red';
}
function returnColor() {
   this.style.backgroundColor = 'white';
}
function rowColor() {
   this.style.backgroundColor = 'green';
}
function callEvent(el) {
   el.onmouseover = changeColor;
   el.onmouseout = returnColor;
}

