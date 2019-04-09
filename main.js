'use strict';
(function(){
	var simpleNumbersBtn=document.querySelector('.simple-numbers');
	simpleNumbersBtn.onclick = getSimpleNumbers;
})()

function getSimpleNumbers(){
	var min = parseInt(prompt('Minimal value')),
		max = parseInt(prompt('Maximal value'));
	if(min>1){
	Num:for (var i=min; i<=max; i++) {
			for (var j = min; j < i; j++) {
      if ((i % j) == 0) continue Num;
    }
    alert(i)
		}
	}
else{
	alert('false');
}
}

