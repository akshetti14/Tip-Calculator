document.getElementById('container').onchange=function(){
  var bill = Number(document.getElementById('billTotal').value);
var tipPercent=document.getElementById('tipInput').value;
var split=document.getElementById('splitInput').value;
var tipValue=bill*(tipPercent/100);
var newBillPerPerson=(bill + tipValue) / split;
document.getElementById('tipOutput').innerHTML=tipPercent +"%";
document.getElementById('splitOutput').innerHTML=split;
document.getElementById('tipPerPerson').innerHTML="$"+(tipValue/split).toFixed(2);
document.getElementById('perPerson').innerHTML="$"+newBillPerPerson.toFixed(2);
}
