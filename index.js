function QuickTip(){
let bill = Number(document.getElementById('yourBill').value);
let tipPercent = document.getElementById('tipInput').value;
let split = document.getElementById('splitInput').value;
console.log(bill, tipPercent, split);

let tipValue = bill * (tipPercent / 100);
 let totalBill = bill + tipValue;
 let billEach = totalBill / split;


 document.getElementById('tipPercent').innerHTML = tipPercent + ' %';
 document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
 document.getElementById('splitValue').innerHTML = formatSplit(split);
 document.getElementById('totalWithTip').innerHTML = formatMoney(totalBill);
 document.getElementById('billEach').innerHTML = formatMoney(billEach);

}
function formatSplit(value) {
    if(value == 1) return value + ' person'
     return value + ' people'  

}
function formatMoney(value) {
    value = Math.ceil(value * 100) / 100;
     value = value.toFixed(2);
     return '$ ' + value;

}