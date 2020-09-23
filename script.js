var numSquares = 6;
var colors = [];

// COR A ADIVINHAR
var pickedColor;

//ELEMENTOS DO HTML 
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.getElementById("colorDisplay");


//FUNÇÃO QUE TEM DE INICIAR QUANDO A PAGINA ABRIR
init();


//BOTAO NOVO JOGO
resetButton.addEventListener("click", function() {
	reset();
});


//FUNÇÕES
function init() {
	setupModeButtons();
	setupSquares();
	reset();
};


function setupSquares(){
	for (var i = 0; i < squares.length; i++){
	
		//ADICIONAR LISTENER AOS QUADRADOS 
		squares[i].addEventListener("click", function(){
		
		//CLICAR NAS CORES
		var clickedColor = this.style.backgroundColor;
		
		//COMPARAR COM A COR A ADIVINHAR 
		// console.log(clickedColor, pickedColor);
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "play Again?";
		}else {
			this.style.backgroundColor = "#848484";
			messageDisplay.textContent = "Try Again";
		}
		});

	}
};


function setupModeButtons(){
	//BOTÕES (FACIL[0]/DIFICIL[1])
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
	 		modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//QUANTOS QUADRADOS MOSTRAR
			if (this.textContent === "Easy") {
				numSquares = 3;
			}else {
				numSquares = 6;
			};
			reset();
		});
	}		
};


function reset(){
	//TORNAR TEXTO MESSAGEDISPLAY VAZIO
	messageDisplay.textContent = "";
	//GERAR NOVAS CORES 
	colors = generateRandomColors(numSquares);
	//ESCOLHER NOVA COR A DA ARRAY
	pickedColor = pickColor();
	//MUDAR A COR NO TITULO	
	colorDisplay.textContent = pickedColor;
	//MUDAR A COR DO SQUARES
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}else {
			squares[i].style.display = "none";
		}
	}
	//RESET A COR DO H1
	h1.style.backgroundColor = "steelblue";
	//RESET O BOTAO PARA NEW COLORS
	resetButton.textContent = "New Colors";
};


function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
 };


function pickColor() {
	var random = Math.floor(Math.random() * colors.length);  	 
	return colors[random];
};


function generateRandomColors(num) {
	//FAZER UMA ARRAY 
	var arr = [];
	//ADICIONAR UM NUMERO RANDOM A ARRAY 
	for (var i = 0; i < num ;i++) {
		//OBTER UMA COR RANDOM E ADICIONAR À ARRAY
		arr.push(randomColor())
	}
	//RETURN ARRAY
	return arr;
};


function randomColor () {
	//PICK "RED" ENTRE (0 - 255)
	var r =	Math.floor(Math.random() * 256); 
	//PICK "GREEN" ENTRE (0 - 255)
	var g =	Math.floor(Math.random() * 256);
	//PICK "BLUE" ENTRE (0 - 255)
	var b = Math.floor(Math.random() * 256);
	return	"rgb(" + r + ", " + g + ", " + b + ")";
};

//FUNCIONAMENTO DOS BOTÕES (TUDO NA FUNÇÃO) 
	// easyBtn.addEventListener("click", function (){
	// 	easyBtn.classList.add("selected");
	// 	hardBtn.classList.remove("selected");
	// 	numSquares = 3;
	// 	//TORNAR TEXTO MESSAGEDISPLAY VAZIO
	// 	messageDisplay.textContent = "";
	// 	colors = generateRandomColors(numSquares);
	// 	//ESCOLHER NOVA COR A DA ARRAY
	// 	pickedColor = pickColor();
	// 	//MUDAR A COR NO TITULO	
	// 	colorDisplay.textContent = pickedColor;
	// 	//MUDAR A COR DO SQUARES
	// 	for (var i = 0; i < squares.length; i++) {
	// 		if (colors[i]) {
	// 			squares[i].style.backgroundColor = colors[i];
	// 		} else{
	// 			squares[i].style.display = "none";
	// 		}
	// 	}
	// }); 


	// hardBtn.addEventListener("click", function (){
	// 	hardBtn.classList.add("selected");
	// 	easyBtn.classList.remove("selected");
	// 	numSquares = 6;
	// 	//TORNAR TEXTO MESSAGEDISPLAY VAZIO
	// 	messageDisplay.textContent = "";
	// 	colors = generateRandomColors(numSquares);
	// 	//ESCOLHER NOVA COR A DA ARRAY
	// 	pickedColor = pickColor();
	// 	//MUDAR A COR NO TITULO	
	// 	colorDisplay.textContent = pickedColor;
	// 	//MUDAR A COR DO SQUARES
	// 	for (var i = 0; i < squares.length; i++) {
	// 			squares[i].style.backgroundColor = colors[i];
	// 			squares[i].style.display = "block";
	// 		}
	// });