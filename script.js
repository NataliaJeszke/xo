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
};



