let table = document.createElement('table');
table.style.padding = '8px';
document.body.appendChild(table);
const tableFragment = document.createDocumentFragment();

for (let i = 1, k = 0; i <= 9; i++) {
   let tr = document.createElement('tr');
   tableFragment.appendChild(tr);
   setEvent(tr);
   for (let j = 1; j <= 9; j++) {
      if (j === 1) {
         let td = document.createElement('td');
         setStyle(td);
         if (k === 0) {
            td.innerText = j * k;
         } else {
            td.innerText = j * i;
         }
         tr.appendChild(td);
         setEvent(td);
      }
      let td = document.createElement('td');
      setStyle(td);
      td.innerText = j * i;
      tr.appendChild(td);
      setEvent(td);
   }
   if (i === 1 && k === 0) {
      --i;
      ++k;
   }
}
table.appendChild(tableFragment);

function changeColor() {
   this.style.backgroundColor = 'red';
}
function returnColor() {
   this.style.backgroundColor = 'white';
}
function setEvent(el) {
   el.onmouseover = changeColor;
   // if(el.style.backgroundColor = )
   el.onmouseout = returnColor;
}
function setStyle(el){
   el.style.border = '1px solid black';
   el.style.padding = '20px';
}





