function play(){

var randomNumber1=Math.floor(Math.random()*3)+1;
var randomNumber2=Math.floor(Math.random()*3)+1;
var randomImage;


if(randomNumber1===randomNumber2){
    if(randomNumber1==1){ randomImage="stonehappy";}
    else if(randomNumber1==2){ randomImage="paperhappy";}
    else if(randomNumber1==3){ randomImage="scissorhappy";}
    document.querySelectorAll("img")[0].setAttribute("src","images/"+randomNumber1+randomImage+".png");
    document.querySelectorAll("img")[1].setAttribute("src","images/"+randomNumber1+randomImage+".png");
    document.querySelector("h1").innerHTML="👍 MATCH DRAW 👍";
}


// stone and paper 
else if((randomNumber1==1 && randomNumber2==2) || (randomNumber1==2 && randomNumber2==1)){


    if(randomNumber1==1 && randomNumber2==2){ 
        var randomImage1="stonesad";
        document.querySelectorAll("img")[0].setAttribute("src","images/"+randomNumber1+randomImage1+".png");
        var randomImage2="paperhappy";
        document.querySelectorAll("img")[1].setAttribute("src","images/"+randomNumber2+randomImage2+".png");
        document.querySelector("h1").innerHTML="🎉 PLAYER 2 WINS 🎉";

    }
    else{
        var randomImage1="paperhappy";
        document.querySelectorAll("img")[0].setAttribute("src","images/"+randomNumber1+randomImage1+".png");
        var randomImage2="stonesad";
        document.querySelectorAll("img")[1].setAttribute("src","images/"+randomNumber2+randomImage2+".png");
        document.querySelector("h1").innerHTML="🎉 PLAYER 1 WINS 🎉";
    }
}


// paper and scissor 
else if((randomNumber1==2 && randomNumber2==3) || (randomNumber1==3 && randomNumber2==2)){
    if(randomNumber1==2 && randomNumber2==3){ 
        var randomImage1="papersad";
        document.querySelectorAll("img")[0].setAttribute("src","images/"+randomNumber1+randomImage1+".png");
        var randomImage2="scissorhappy";
        document.querySelectorAll("img")[1].setAttribute("src","images/"+randomNumber2+randomImage2+".png");
        document.querySelector("h1").innerHTML="🎉 PLAYER 2 WINS 🎉";

    }
    else{
        var randomImage1="scissorhappy";
        document.querySelectorAll("img")[0].setAttribute("src","images/"+randomNumber1+randomImage1+".png");
        var randomImage2="papersad";
        document.querySelectorAll("img")[1].setAttribute("src","images/"+randomNumber2+randomImage2+".png");
        document.querySelector("h1").innerHTML="🎉 PLAYER 1 WINS 🎉";
    }
}



// stone and scissor 
else if((randomNumber1==1 && randomNumber2==3) || (randomNumber1==3 && randomNumber2==1)){
    if(randomNumber1==1 && randomNumber2==3){ 
        var randomImage1="stonehappy";
        document.querySelectorAll("img")[0].setAttribute("src","images/"+randomNumber1+randomImage1+".png");
        var randomImage2="scissorsad";
        document.querySelectorAll("img")[1].setAttribute("src","images/"+randomNumber2+randomImage2+".png");
        document.querySelector("h1").innerHTML="🎉 PLAYER 1 WINS 🎉";

    }
    else{
        var randomImage1="scissorsad";
        document.querySelectorAll("img")[0].setAttribute("src","images/"+randomNumber1+randomImage1+".png");
        var randomImage2="stonehappy";
        document.querySelectorAll("img")[1].setAttribute("src","images/"+randomNumber2+randomImage2+".png");
        document.querySelector("h1").innerHTML="🎉 PLAYER 2 WINS 🎉";
    }
}
}