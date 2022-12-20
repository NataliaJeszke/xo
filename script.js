const Player1="X";
const Player2="O";

function setPlayer(){
    let setStorage = sessionStorage.setItem("player","O");
    console.log(setStorage);
}


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
console.log(value1);

const value2 = document.querySelector(".div2").innerHTML;
console.log(value2);

const value3 = document.querySelector(".div3").innerHTML;
console.log(value3);

const value4 = document.querySelector(".div4").innerHTML;
console.log(value4);

const value5 = document.querySelector(".div5").innerHTML;
console.log(value5);

const value6 = document.querySelector(".div6").innerHTML;
console.log(value6);

const value7 = document.querySelector(".div7").innerHTML;
console.log(value7);

const value8 = document.querySelector(".div8").innerHTML;
console.log(value8);

const value9 = document.querySelector(".div9").innerHTML;
console.log(value9);


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
        console.log("Winner is Player 1");
    }

    if (firstRO === true || secondRO === true || thirdRO === true || firstCO === true || secondCO === true || thirdCO === true || firstCrossO === true || secondCrossO === true ){
        console.log("Winner is Player 2");
    }

    return;

 }

 checkWinner(firstRow, secondRow, thirdRow, firstColumn, secondColumn, thirdColumn, firstCross, secondCross);










};





