'use strict';
(function(){
	var simpleNumbersBtn=document.querySelector('.simple-numbers');
	simpleNumbersBtn.onclick = getSimpleNumbers;
})()

function getSimpleNumbers(){
	var min = prompt('Minimal value'),
		max = prompt('Maximal value');
		if(min>1){
	Num:for (var i = 2; i <= max; i++) {

    for (var j = min; j < i; j++) {
      if ((i % j) == 0) continue Num;
    }

    alert(i); // простое
  }
}else alert('enter minimal value over then 2')
}
/*function primeNum(n){

}
*/

