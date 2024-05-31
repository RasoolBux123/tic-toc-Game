let userscore = 0;
let computerscore = 0;

const userscorepara = document.querySelector("#userscore")
const computerscorepara = document.querySelector("#computerscore")
 
const msg = document.querySelector("#msg");
  let computergen = ( ) =>{
  const opation = ["rock", "paper", "scissor"]
   const index = Math.floor(Math.random() *3);
   return opation[index];
  };

  const Drawgame = () => {
    console.log("draw game")
    msg.innerText = "draw match"
    msg.style.backgroundColor = "blue";
  }

   const ShowWiner = (userwin , computerchoice, userchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you are winner" )
        msg.innerText = `you are winner your ${userchoice} beat ${computerchoice}`
        msg.style.backgroundColor= "green"
    }else{
        computerscore++;
        computerscorepara.innerText = computerscore;
        console.log("you are losser")
        msg.innerText = `you are lose your ${computerchoice} beat ${userchoice}`
        msg.style.backgroundColor = "red"
    }
        
    

   }

let playGame = (userchoice) => {
 console.log("user choice", userchoice)
 //computer generlation
 const computerchoice = computergen();
 console.log("computerchoice", computerchoice)


 if(userchoice ===  computerchoice){
    //
    Drawgame();
}else{
    let userwin = true;

    if(userchoice === "rock"){ 
    // computer give us paper or scissor
    userwin =   computerchoice === "paper"? false : true;

    }  else if (userchoice === "paper"  ) {
        // rok or scissor
        userwin = computerchoice === "scissor"? false : true;


       } else {
        // rok paper
        userwin = computerchoice === "rock"? false: true;
       }

    ShowWiner(userwin , computerchoice, userchoice);

    
};


};



const choices =document.querySelectorAll(".choice");
choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",()  =>{
       const userchoice = choice.getAttribute("id")

//console.log("user was clicked" , userchoice);
  playGame(userchoice)

    });

    
});