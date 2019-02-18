// Constanten //
const ROWS = 5;

// Variabelen //
let randomWords = words[Math.floor((Math.random() *words.length) + 0)];
let currentRow = 1;


// Array's //
let randomWordsSplit = randomWords.split("");
console.log(randomWordsSplit);


// Code for Lay Out //
	let container = document.createElement('div');
	document.body.appendChild(container);
	container.id = 'container';
	container.style.margin = '0 auto';
	container.style.width = '270px';

	let header = document.createElement('h2');
	header.innerHTML = 'Play Lingo!';
	header.id = 'header';
	container.appendChild(header);
	header.style.textAlign = 'center';
	header.style.backgroundColor = '#33e0d7';
	header.style.color = 'white';
	header.style.height = '50px';
	header.style.borderRadius = '25px';
	header.style.boxShadow =  '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)';



	for (i=1; i<=ROWS; i++){
		for (p=1; p<=ROWS; p++){
			let lttrBox = document.createElement('input');
			container.appendChild(lttrBox);
			lttrBox.setAttribute('maxlength', '1');
			lttrBox.setAttribute('type', 'text');
			lttrBox.setAttribute('id', 'c'+i+'_'+p);
			lttrBox.style.width = '50px';
			lttrBox.style.height = '50px';
			lttrBox.style.backgroundColor = '#33e0d7';
			lttrBox.style.textTransform = 'uppercase';
			lttrBox.style.color = 'white';
			lttrBox.style.fontSize = '34px';
			lttrBox.style.marginTop = '10px';
			lttrBox.style.textAlign = 'center';
			lttrBox.style.borderRadius = '15px';
			lttrBox.style.boxShadow =  '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)';
			lttrBox.setAttribute("onkeyup", "moveCursor(this, 'c"+i+"_"+(p+1)+"')");
			document.getElementById('c'+i+'_1').value = randomWordsSplit[0];

		}
	}

	let checkbtn = document.createElement('button');
	let newbtn = document.createElement('button');
	newbtn.id = 'newbtn';
	checkbtn.id = 'checkbtn';
	container.appendChild(checkbtn);
	container.appendChild(newbtn);
	checkbtn.style.backgroundColor = '#33e0d7';
	checkbtn.style.color = 'white';
	checkbtn.style.fontSize = '25px';
	checkbtn.style.marginTop = '10px';
	checkbtn.style.borderRadius = '15px';
	checkbtn.style.boxShadow =  '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)';


	newbtn.style.backgroundColor = '#33e0d7';
	newbtn.style.color = 'white';
	newbtn.style.fontSize = '25px';
	newbtn.style.marginTop = '10px';
	newbtn.style.marginLeft = '10px';
	newbtn.style.borderRadius = '15px';
	newbtn.style.boxShadow =  '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)';
	
	checkbtn.innerHTML = 'Check';
	newbtn.innerHTML = 'Nieuw woord';



// Code for moving focus/moving cursor //
function moveCursor(fromTextBox, toTextBox) {
	var length = fromTextBox.value.length;
	var maxLength = fromTextBox.getAttribute("maxlength");
	if (toTextBox.substring(3,4) != 6){
		if (length == maxLength){
			document.getElementById(toTextBox).focus();
		}
	}
	 else{ 
	 }
}

// Code for checkbutton //
checkbtn.addEventListener('click', function(){
 check(randomWords);
});

function check(randomWords){
	var guessArr = [];
	var guess = [];
	var letter = randomWords.split("");

	switch(currentRow){
		case 5:
		for (i=1; i<=letter.length; i++){
			guessArr[i-1] = document.getElementById('c'+currentRow+'_'+(i)).value;
		}
			var guess = guessArr.join("");
			var answer = letter.join("");
			if (guess == answer) {
				document.getElementById('header').innerHTML = 'Gewonnen!'

			}
			else if (currentRow >= 5) {
				var lose = confirm('Verloren! Wilt u opnieuw beginnen?');
				if (lose == true){
					location.reload();
				}
			}
		

		for (i=1; i<=letter.length; i++){
			guess[i-1] = document.getElementById('c'+currentRow+'_'+(i)).value;
			if (guess[i-1] === letter[i-1]) {
				document.getElementById('c'+currentRow+'_'+(i)).style.backgroundColor = "green";
				document.getElementById('c'+currentRow+'_'+(i)).style.transition = '0.5s';
				guess[i-1] = "";
				letter[i-1] = "*";
			}
		}

		for (i=1; i<=letter.length; i++){
			var pos = letter.indexOf(guess[i-1]); // indexOf geeft positie aan in een array waar de waarde zich bevindt. Niet? > -1
			if (pos !== -1 && letter[i-1] != "*"){
				document.getElementById('c'+currentRow+'_'+(i)).style.backgroundColor = "yellow";
				document.getElementById('c'+currentRow+'_'+(i)).style.borderRadius = '25px';
				document.getElementById('c'+currentRow+'_'+(i)).style.transition = '0.5s';
			}
		}
			break;

		default:
		for (i=1; i<=letter.length; i++){
			guessArr[i-1] = document.getElementById('c'+currentRow+'_'+(i)).value;
			var guess = guessArr.join("");
			var answer = letter.join("");
			if (guess == answer) {
				document.getElementById('header').innerHTML = 'Gewonnen!'


			}
		}

		for (i=1; i<=letter.length; i++){
			guess[i-1] = document.getElementById('c'+currentRow+'_'+(i)).value;
			if (guess[i-1] === letter[i-1]) {
				document.getElementById('c'+currentRow+'_'+(i)).style.backgroundColor = "green";
				document.getElementById('c'+currentRow+'_'+(i)).style.transition = '0.5s';
				guess[i-1] = "";
				letter[i-1] = "*";
			}
		}

		for (i=1; i<=letter.length; i++){
				var pos = letter.indexOf(guess[i-1]);
				if (pos !== -1 && letter[i-1] != "*"){
					 document.getElementById('c'+currentRow+'_'+(i)).style.backgroundColor = "yellow";
					 document.getElementById('c'+currentRow+'_'+(i)).style.borderRadius = '25px';
					 document.getElementById('c'+currentRow+'_'+(i)).style.transition = '0.5s';
				 }
		}
			if (guess != answer){
				currentRow++;
			}
	}		
}

newbtn.onclick = function(){
	location.reload();
}