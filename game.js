var colors = genrateRandom(6)

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var nosq=6;
var colorDispaly = document.getElementById("colordisplay");
var h1 = document.querySelector("h1")
var reset=document.querySelector("#reset")
var mode=document.querySelectorAll(".mode")

for(var i=0; i <mode.length; i++){
	mode[i].addEventListener("click", function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
        if(this.textContent === "Easy"){
        	nosq=3;
        }
        else
        {
        	nosq=6;
        }
		resets();
	})
}

function resets(){
	message.textContent = "";
	colors = genrateRandom(nosq)
	pickedColor = pickColor();
	colordisplay.textContent = pickedColor;
	reset.textContent = "New Colors";

for(let i = 0; i < squares.length; i++){
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	}
	else{
		squares[i].style.display= "none";
	}
	
	}
	h1.style.background = "steelblue"
}

reset.addEventListener("click",function(){
	resets();
})

colordisplay.textContent = pickedColor;
let message = document.querySelector("#message")

for(let i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
    
     squares[i].addEventListener("click",function(){
     	var clickedColor = this.style.background;
     	if(clickedColor === pickedColor){
     		
     		message.textContent = "Correct!";
     		reset.textContent="Play Again!";
     		changeColors(clickedColor);
     		h1.style.background = clickedColor;    
     	}
     	else{
     		this.style.background = "#232323";
            message.textContent = "Try Again!"    	
     	}
     });
}


function changeColors(color){
	for(let i=0; i< squares.length; i++){
		squares[i].style.background = color;
	}
}



function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}


function genrateRandom(num){
	let arr = [];

    for(let i=0; i<num;i++){
    	arr.push(Random())
    }

	return arr;
}

function Random(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}