var Player1 = localStorage.getItem("Player 1");
var Player2 = localStorage.getItem("Player 2");
var P1Score = 0;
var P2Score = 0;
document.getElementById("P1name").innerHTML= Player1+ " : "+ P1Score;
document.getElementById("P2name").innerHTML= Player2+ " : "+ P2Score;

document.getElementById("playerquestion").innerHTML= "Question Turn - "+ Player1;
document.getElementById("playeranswer").innerHTML= "Answer Turn - "+ Player2;
var finalword = "";
function Send(){
 number1 = document.getElementById("number1").value;
 number2 = document.getElementById("number2").value;
 actual_answer = parseInt(number1) * parseInt(number2);
 question_number = "<h4>" + number1 + " X " + number2 +"</h4>";
 input_box = "<br>Answer : <input type='text' id='input_check_box'";
 check_button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
number1 = document.getElementById("number1").value= "";
number2 = document.getElementById("number2").value= "";
}
var Qut= "P1";
var Ant = "P2";
function Check(){
var getanswer= document.getElementById("input_check_box").value;
if(getanswer == actual_answer){
if(Ant == "Player1")
{
    P1Score = P1Score + 1;
    document.getElementById("P1Score").innerHTML = P1Score;
}
else
{
    P2Score = P2Score + 1;
    document.getElementById("P2Score").innerHTML = P2Score;
}
}
    if(Qut== "P1")
    {
        Qut = "P2"
document.getElementById("playerquestion").innerHTML = "Question Turn - " + P2name;
    }
    else{
        Qut = "P1"
        document.getElementById("playerquestion").innerHTML = "Question Turn - " + P1name;
    }

}


