let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#reset_bnt")
let newGame = document.querySelector("#new_bnt");
let msgBox = document.querySelector(".msg-box");
let msg = document.querySelector("#msg");
let otnst = document.querySelector(".nst")
let turn_o = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turn_o = true;
    enableBox();
    msgBox.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn_o) {
            box.innerText = "O";
            turn_o = false;
        }
        else{
            box.innerText = "X";
            turn_o = true;
        }
        box.disabled = true;

        checkwinner();
    });
})

const disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgBox.classList.remove("hide");
};

const checkwinner = () => {
    for (let pattern of winPattern) {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;
            
            if (pos1val != "" && pos2val != "" && pos3val != "") {
                if (pos1val === pos2val && pos2val === pos3val) {
                    showWinner(pos1val);
                    disableBox();
                }
            }
    }
};

restbtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);
otnst.addEventListener("click",resetGame);