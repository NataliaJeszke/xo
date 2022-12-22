const Player1="X";
const Player2="O";

let gameEnd=false;

///// Setting players names without losing data in the inputs after refresh /////
let getLocalStorageName1 = localStorage.getItem("player1Name");
let getLocalStorageName2 = localStorage.getItem("player2Name");

function getName(){
let name1 = document.querySelector("#Player1name");
name1.value = localStorage.getItem("player1Name");
let cancel
Player1name.addEventListener("keyup", event => {
  if (cancel) clearTimeout(cancel)
  cancel = setTimeout(() => {
    localStorage.setItem("player1Name", event.target.value)
  }, 1000)
});

let name2 = document.querySelector("#Player2name");
name2.value = localStorage.getItem("player2Name");
let cancel2
Player2name.addEventListener("keyup", event => {
  if (cancel2) clearTimeout(cancel2)
  cancel2 = setTimeout(() => {
    localStorage.setItem("player2Name", event.target.value)
  }, 1000)
});

}
getName();

////////// Getting players names from inputs and setting to local storage //////////
function setName(){
    
    let player1Name = document.getElementById('Player1name').value;
    let player2Name=document.getElementById('Player2name').value;

    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);

    }


///// START button /////
function start(){
    setName();
    document.location.reload();
    let setStorage = sessionStorage.setItem("player","O");
    gameEnd=false;
}

///// Alternate players and block already used (x/o) div /////
let selectCell = (className) => {
    let div = document.querySelector("." + className);
        if (div.innerHTML === ""){
    let seeStorage = sessionStorage.getItem("player");
        if (seeStorage === "O"){
    div.innerHTML += `${Player1}`
    let setStorage = sessionStorage.setItem("player","X");
        }
        else{
    div.innerHTML+=`${Player2}`
    let setStorage = sessionStorage.setItem("player","O")
        };
    }

    /// Getting values for every div in our arena ///
const value1 = document.querySelector(".div1").innerHTML;
const value2 = document.querySelector(".div2").innerHTML;
const value3 = document.querySelector(".div3").innerHTML;
const value4 = document.querySelector(".div4").innerHTML;
const value5 = document.querySelector(".div5").innerHTML;
const value6 = document.querySelector(".div6").innerHTML;
const value7 = document.querySelector(".div7").innerHTML;
const value8 = document.querySelector(".div8").innerHTML;
const value9 = document.querySelector(".div9").innerHTML;



///// First solution to check the winner /////

// if (value1==="X" && value2==="X" && value3==="X"){
//     console.log("Winner is Player 1");
// }
// if (value4==="X" && value5==="X" && value6==="X"){
//     console.log("Winner is Player 1");
// }
// if (value7==="X" && value8==="X" && value9==="X"){
//     console.log("Winner is Player 1");
// }
// if(value1==="X" && value4 ==="X" && value7==="X"){
//     console.log("Winner is Player 1");
// }
// if(value2==="X" && value5 ==="X" && value8==="X"){
//     console.log("Winner is Player 1");
// }
// if(value3==="X" && value6 ==="X" && value9==="X"){
//     console.log("Winner is Player 1");
// }
// if(value1==="X" && value5 ==="X" && value9==="X"){
//     console.log("Winner is Player 1");
// }
// if(value3==="X" && value5 ==="X" && value7==="X"){
//     console.log("Winner is Player 1");
// }


// if (value1==="O" && value2==="O" && value3==="O"){
//     console.log("Winner is Player 2");
// }
// if (value4==="O" && value5==="O" && value6==="O"){
//     console.log("Winner is Player 2");
// }
// if (value7==="O" && value8==="O" && value9==="O"){
//     console.log("Winner is Player 2");
// }
// if(value1==="O" && value4 ==="O" && value7==="O"){
//     console.log("Winner is Player 2");
// }
// if(value2==="O" && value5 ==="O" && value8==="O"){
//     console.log("Winner is Player 2");
// }
// if(value3==="O" && value6 ==="O" && value9==="O"){
//     console.log("Winner is Player 2");
// }
// if(value1==="O" && value5 ==="O" && value9==="O"){
//     console.log("Winner is Player 2");
// }
// if(value3==="O" && value5 ==="O" && value7==="O"){
//     console.log("Winner is Player 2");
// }


//////// Second solution to check the winner ////////

const firstRow = [value1, value2, value3];
const secondRow = [value4, value5, value6];
const thirdRow = [value7, value8, value9];

const firstColumn = [value1, value4, value7];
const secondColumn = [value2, value5, value8];
const thirdColumn = [value3, value6, value9];

const firstCross = [value1, value5, value9];
const secondCross= [value3, value5, value7];


 function checkWinner (firstRow, secondRow, thirdRow, firstColumn, secondColumn, thirdColumn, firstCross, secondCross){
    const findX = (value)=> value==="X";
    const findO = (value)=> value==="O";

    const firstRX = firstRow.every(findX);
    const secondRX = secondRow.every(findX);
    const thirdRX = thirdRow.every(findX);
    const firstRO = firstRow.every(findO);
    const secondRO = secondRow.every(findO);
    const thirdRO = thirdRow.every(findO);

    const firstCX = firstColumn.every(findX);
    const secondCX= secondColumn.every(findX);
    const thirdCX= thirdColumn.every(findX);
    const firstCO = firstColumn.every(findO);
    const secondCO = secondColumn.every(findO);
    const thirdCO = thirdColumn.every(findO);

    const firstCrossX = firstCross.every(findX);
    const secondCrossX = secondCross.every(findX);
    const firstCrossO = firstCross.every(findO);
    const secondCrossO = secondCross.every(findO);


    if (firstRX === true || secondRX === true || thirdRX === true || firstCX === true || secondCX === true || thirdCX === true || firstCrossX === true || secondCrossX === true){
        document.querySelector(".showPlayer").innerHTML=`${getLocalStorageName1}`;
        displayImage('winner.gif', 200, 200);
        gameEnd=true;
        
    }


    if (firstRO === true || secondRO === true || thirdRO === true || firstCO === true || secondCO === true || thirdCO === true || firstCrossO === true || secondCrossO === true ){
        console.log("Winner is Player 2");
        document.querySelector(".showPlayer").innerHTML=`${getLocalStorageName2}`;
        displayImage('winner.gif', 200, 200);
        gameEnd=true;
    }
    ///// Block ARENA after winning /////
    if (gameEnd === true){
        (function () {
            function cancel () { return false; };
            document.querySelector(".arena").disabled = true;
            var nodes = document.querySelector(".arena").getElementsByTagName('*');
            console.log(nodes);
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].setAttribute('disabled', true);
                nodes[i].onclick = cancel;
            }
        }());
        return;
      }

    return;
 }

 checkWinner(firstRow, secondRow, thirdRow, firstColumn, secondColumn, thirdColumn, firstCross, secondCross);


};



////////// Function to display winner GIF as a reward //////////
function displayImage(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    var imgShow = document.querySelector(".imgDisplay");
    imgShow.appendChild(img)
}


