let boxes = document.querySelectorAll(".box")

let btn = document.querySelector("#btn");

let msgcontainer =document.querySelector(".msg-container");

let gamebtn = document.querySelector(".game-btn");
let win = document.querySelector("#win")

let trun0 =true;

const patternwin = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box) => {
   box.addEventListener( "click", () => { 

   console.log("clicked on me")
   if(trun0){
    //player 0
     box.innerText = "0"
     trun0 = false;

   }
   else{
    //player X
    box.innerText = "X";
    trun0 = true;
   }
      box.disabled = true;

       
   });

   
   

});

const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled =true;
    }

};
const disabled = () =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText = "";
    }

};

const showwinner = (win) =>{

    win.innerText = `congrulation of winner game ${win}`
    msgcontainer.classList.remove("hide");

};


const Checkwinner = ( () => {

    for(let pattern of winpattern ){
       let pos1val=box[pattern[0]].innerText;
       let pos2val=box[pattern[1]].innerText;
       let pos3val=box[pattern[2]].innerText;


       if(pos1val != "" && pos2val != "" && pos3val != ""){

        if(pos1val === pos2val && pos2val === pos3val)
        console.log("Winner");
    showwinner(pos1val);
    CheckWinner();

       }

    }

});


btn.addEventListener("click", btn)
newgamebtn.addEventListener("click", gamebtn)