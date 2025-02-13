const easyMap = [
  [
    [{type: 'e'},            {type: 'r', orient: 1}, {type: 'e'},            {type: 'e'},            {type: 'o'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'b', orient: 0}, {type: 'o'}           ],
    [{type: 'b', orient: 0}, {type: 'e'},            {type: 'r', orient: 2}, {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'o'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'r', orient: 3}, {type: 'e'},            {type: 'e'}           ],
  ],
  [
    [{type: 'o'},            {type: 'e'},            {type: 'b', orient: 1}, {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'r', orient: 2}, {type: 'e'},            {type: 'e'},            {type: 'r', orient: 2}],
    [{type: 'b', orient: 0}, {type: 'o'},            {type: 'r', orient: 3}, {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'o'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
  ],
  [
    [{type: 'e'},            {type: 'e'},            {type: 'b', orient: 1}, {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'b', orient: 0}],
    [{type: 'e'},            {type: 'r', orient: 2}, {type: 'b', orient: 0}, {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'o'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'b', orient: 1}, {type: 'e'},            {type: 'e'},            {type: 'r', orient: 2}],
  ],
  [
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'b', orient: 1}, {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'b', orient: 0}, {type: 'e'},            {type: 'r', orient: 1}, {type: 'e'},            {type: 'r', orient: 1}],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'o'},            {type: 'r', orient: 3}, {type: 'e'}           ],
  ],
  [
    [{type: 'e'},            {type: 'e'},            {type: 'b', orient: 1}, {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'r', orient: 0}, {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'b', orient: 0}, {type: 'e'},            {type: 'e'},            {type: 'r', orient: 3}, {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'b', orient: 0}, {type: 'o'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'r', orient: 2}, {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
  ],
];

const hardMap =[
  [
    [{type: 'e'},            {type: 'r', orient: 1}, {type: 'o'},            {type: 'o'},            {type: 'e'},            {type: 'b', orient: 1}, {type: 'e'}           ],
    [{type: 'b', orient: 0}, {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'b', orient: 0}, {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'r', orient: 3}, {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'r', orient: 3}, {type: 'e'},            {type: 'r', orient: 1}, {type: 'e'},            {type: 'b', orient: 1}, {type: 'e'},            {type: 'o'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'b', orient: 1}, {type: 'e'},            {type: 'e'},            {type: 'e'}           ]
  ],
  [
    [{type: 'e'},            {type: 'e'},            {type: 'o'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'b', orient: 0}, {type: 'e'},            {type: 'b', orient: 1}, {type: 'e'},            {type: 'e'},            {type: 'r', orient: 2}, {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'b', orient: 1}, {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'b', orient: 0}],
    [{type: 'r', orient: 0}, {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'o'},            {type: 'e'},            {type: 'r', orient: 1}, {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'r', orient: 0}, {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'o'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ]
  ],
  [
    [{type: 'e'},            {type: 'e'},            {type: 'b', orient: 1}, {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'b', orient: 0}],
    [{type: 'o'},            {type: 'e'},            {type: 'r', orient: 3}, {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'o'},            {type: 'r', orient: 3}, {type: 'e'},            {type: 'b', orient: 1}, {type: 'e'},            {type: 'e'}           ],
    [{type: 'b', orient: 0}, {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'r', orient: 1}, {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'o'},            {type: 'r', orient: 3}, {type: 'e'},            {type: 'e'},            {type: 'e'}           ]
  ],
  [
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'b', orient: 0}, {type: 'e'},            {type: 'r', orient: 2}, {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e', orient: 3}, {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'b', orient: 1}, {type: 'e'},            {type: 'o'},            {type: 'e'},            {type: 'b', orient: 1}, {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'r', orient: 2}, {type: 'e'},            {type: 'r', orient: 1}, {type: 'e'},            {type: 'e'}           ],
    [{type: 'b', orient: 0}, {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'r', orient: 3}, {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ]
  ],
  [
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'r', orient: 0}, {type: 'e'}           ],
    [{type: 'e'},            {type: 'b', orient: 1}, {type: 'b', orient: 1}, {type: 'e'},            {type: 'r', orient: 1}, {type: 'e'},            {type: 'o'},          ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'r', orient: 0}, {type: 'e'},            {type: 'o'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'r', orient: 2}, {type: 'e'},            {type: 'b', orient: 0}, {type: 'e'},            {type: 'e'},            {type: 'e'}           ],
    [{type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'},            {type: 'e'}           ]
  ]
];

const formBlock = document.querySelector("#startForm");
const body = document.querySelector("body");
const game = document.querySelector("#game");
let difficulty = 0;
let mapN = null;
let timerInterval; 
let elapsedTime = 0; 
let useMap = null;
let currMap = null;
let railableTiles = 0;
let railedTiles = 0;

formBlock.addEventListener("click",  (e) => {

  if (e.target.id === ""){

    if(e.target.classList.contains("rules")){
      showRules();
    } else if (e.target.classList.contains("start")){
      startGame();
    } 

  } else if (e.target.id === "easyButton"){
    difficulty = 5;
    e.target.classList.add("selected");
    document.querySelector("#hardButton").classList.remove("selected");
    document.querySelector(".start").style.backgroundColor = "#c0c4a3";

  } else if (e.target.id === "hardButton"){
    difficulty = 7;
    e.target.classList.add("selected");
    document.querySelector("#easyButton").classList.remove("selected");
    document.querySelector(".start").style.backgroundColor = "#c0c4a3";

  } 

});

body.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-popup")){
   e.target.parentNode.parentNode.classList.add("hidden");
  }

  if (e.target.id === "mainMenuButton" || e.target.id === "goBack"){
    restart();
  }
});

function showRules(){
  document.querySelector("#descriptionPopup").classList.remove("hidden");
}

function startGame(){
  let player = document.querySelector("#playerName").value;
  if (player !== "" && difficulty !== 0 ){
    document.querySelector("#menu").classList.add("hidden");
    document.querySelector("#game").classList.remove("hidden");
    loadTable();

  } else {
    document.querySelector("#warningPopup").classList.remove("hidden");
  }
}


function loadTable(){
  startTimer()
  document.querySelector("#playerNameDisplay").innerText = document.querySelector("input").value;
  const gameArea = document.querySelector("#gameContent");
  mapN = Math.floor(Math.random() * 5);
  
  useMap = difficulty === 5 ? easyMap[mapN] : hardMap[mapN];
  currMap = useMap;
  const gridStyle = difficulty === 5 ? "grid5" : "grid7";
  let count1 = 0;
  
  for (const row of useMap){
    let count2 = 0;

    const newGameDiv = document.createElement("div");
    newGameDiv.classList.add(gridStyle);
    newGameDiv.id = "row" + count1;
    gameArea.appendChild(newGameDiv);
    
    for (const col of row){
      const currRow = document.querySelector("#row"+ count1);
      
      const newGameDivCol = document.createElement("div");
      newGameDivCol.id = "col" + count2;
      const tileT = getTileType(col.type);
      newGameDivCol.classList.add(tileT, "gameTile");
      newGameDivCol.dataset.tileType = tileT;
      const sides = getSides(tileT, col.orient*90);
      newGameDivCol.dataset.side1 = sides[0];
      newGameDivCol.dataset.side2 = sides[1];
       
      if (col.orient != undefined){
        newGameDivCol.style.transform = `rotate(${col.orient*90}deg)`;
        newGameDivCol.dataset.tileRotation = `${col.orient*90}`;

      } else{
        newGameDivCol.dataset.tileRotation = "0";
      }
      
      currRow.appendChild(newGameDivCol);
      
      if (col.type !== "o"){
        railableTiles++;
      }

      count2++;
    } 
    count1++;
  }
}

function getTileType(tileType){
  if (tileType == 'e'){
    return "emptyT";
  } else if (tileType == 'o'){
    return "oasisT";
  } else if (tileType == 'b'){
    return "bridgeT";
  } else if (tileType == 'r'){
    return "rockT";
  }
  return "";
}


game.addEventListener("click", (e) => {
  
  if (e.target.classList.contains("gameTile")){
    chosenX = e.target.parentNode.id[3];
    chosenY = e.target.id[3];
    clickTile(e.target.classList, e.target);
  }
  if (isWin()){
    win();
  }
});

game.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gameTile")){
    if (e.target.classList.contains("sRail") || e.target.classList.contains("cRail")){
      if (e.target.style.transform === ""){
        e.target.style.transform = `rotate(90deg)`;
        e.target.dataset.tileRotation = "90";
        const sides = getSides(e.target.dataset.tileType, 90);
        
        e.target.dataset.side1 = sides[0];
        e.target.dataset.side2 = sides[1];

      } else if (e.target.style.transform === `rotate(90deg)`){
        e.target.style.transform = `rotate(180deg)`;
        e.target.dataset.tileRotation = "180";
        const sides = getSides(e.target.dataset.tileType, 180);
        
        e.target.dataset.side1 = sides[0];
        e.target.dataset.side2 = sides[1];

      } else if (e.target.style.transform === `rotate(180deg)`){
        e.target.style.transform = `rotate(270deg)`;
        e.target.dataset.tileRotation = "270";
        const sides = getSides(e.target.dataset.tileType, 270);
        
        e.target.dataset.side1 = sides[0];
        e.target.dataset.side2 = sides[1];

      } else {
        e.target.style.transform = "";
        e.target.dataset.tileRotation = "0";
        const sides = getSides(e.target.dataset.tileType, 0);
        
        e.target.dataset.side1 = sides[0];
        e.target.dataset.side2 = sides[1];
      } 
      
    }
  }
  if (isWin()){
    win();
  }
})

function clickTile(classL, targ){
  if (classL.contains("rockT")){
    targ.classList.remove("rockT");
    targ.classList.add("rRail");
    targ.dataset.tileType = "rRail";
    railedTiles++;
    const sides = getSides("rRail", targ.dataset.tileRotation);
    targ.dataset.side1 = sides[0];
    targ.dataset.side2 = sides[1];

  } else if (classL.contains("rRail")){
    targ.classList.remove("rRail");
    targ.classList.add("rockT");
    targ.dataset.tileType = "rockT";
    railedTiles--;
    const sides = getSides("rockT", targ.dataset.tileRotation);
    targ.dataset.side1 = sides[0];
    targ.dataset.side2 = sides[1];

  } else if (classL.contains("emptyT")){
    targ.classList.remove("emptyT");
    targ.classList.add("sRail");
    targ.dataset.tileType = "sRail";
    railedTiles++;
    const sides = getSides("sRail", targ.dataset.tileRotation);
    targ.dataset.side1 = sides[0];
    targ.dataset.side2 = sides[1];
    
  } else if (classL.contains("sRail")){
    targ.classList.remove("sRail");
    targ.classList.add("cRail");
    targ.dataset.tileType = "cRail";
    const sides = getSides("cRail", targ.dataset.tileRotation);
    targ.dataset.side1 = sides[0];
    targ.dataset.side2 = sides[1];

  } else if (classL.contains("cRail")){
    targ.classList.remove("cRail");
    targ.classList.add("emptyT");
    targ.dataset.tileType = "emptyT";
    railedTiles--;
    const sides = getSides("emptyT", targ.dataset.tileRotation);
    targ.dataset.side1 = sides[0];
    targ.dataset.side2 = sides[1];

  } else if (classL.contains("bridgeT")){
    targ.classList.remove("bridgeT");
    targ.classList.add("bRail");
    targ.dataset.tileType = "bRail";
    railedTiles++;
    const sides = getSides("bRail", targ.dataset.tileRotation);
    targ.dataset.side1 = sides[0];
    targ.dataset.side2 = sides[1];

  } else if (classL.contains("bRail")){
    targ.classList.remove("bRail");
    targ.classList.add("bridgeT");
    targ.dataset.tileType = "bridgeT";
    railedTiles--;
    const sides = getSides("bridgeT", targ.dataset.tileRotation);
    targ.dataset.side1 = sides[0];
    targ.dataset.side2 = sides[1];

  }
}

function startTimer() {
  const elapsedTimeElement = document.querySelector("#elapsedTime");
 
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    elapsedTime++; 
    
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    elapsedTimeElement.textContent = formattedTime;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval); 
}

function isWin(){
  return condition1() && condition2() && condition3();
}

function condition1(){
  
  return railedTiles === railableTiles;
}

function condition2(){
  console.log("cond2 called");
  if (!outerLayerGood()){
    
    return false;
  }

  for (let i = 1; i < difficulty-1; i++){
    for (let j = 1; i < difficulty-1; i++){
      
      const currTile = getTile(i,j);
      if (currTile.dataset.side1 === "-1 0" || currTile.dataset.side2 === "-1 0"){
        if (getTile(i-1, j).dataset.side1 !== " 1 0" && getTile(i-1, j).dataset.side2 !== " 1 0"){
          
          return false;
        }
      } 
      if (currTile.dataset.side1 === " 0 1" || currTile.dataset.side2 === " 0 1"){
        if (getTile(i, j+1).dataset.side1 !== " 0-1" && getTile(i, j+1).dataset.side2 !== " 0-1"){
          
          return false;
        }
      } 
      if (currTile.dataset.side1 === " 1 0" || currTile.dataset.side2 === " 1 0"){
        if (getTile(i+1, j).dataset.side1 !== "-1 0" && getTile(i+1, j).dataset.side2 !== "-1 0"){
          
          return false;
        }
      } 
      if (currTile.dataset.side1 === " 0-1" || currTile.dataset.side2 === " 0-1"){
        if (getTile(i, j-1).dataset.side1 !== " 0 1" && getTile(i, j-1).dataset.side2 !== " 0 1"){
          
          return false;
        }
      } 
    }  
  }

  return true;
}

function condition3(){
  console.log("cond3 called");
  let weRailed = 0;
  const startTile = document.querySelector(".cRail");
  if (startTile === null){ return false;}
  let backOnFirst = false;
  let startR = parseInt(startTile.parentNode.id[3]);
  let startC = parseInt(startTile.id[3]);
  let nextSide = startTile.dataset.side1;
  let currR = startR + parseInt(nextSide[0] + nextSide[1]);
  let currC = startC + parseInt(nextSide[2] + nextSide[3]);
  let currTile = getTile(currR, currC);
  if (startTile.dataset.side1 !== getBackS(currTile.dataset.side1) && startTile.dataset.side1 !== getBackS(currTile.dataset.side2)){
    return false;
  }
  weRailed++;
  
  while (!backOnFirst){
    nextSide = getNextSide(nextSide, currTile);
    let nextR = currR + parseInt(nextSide[0] + nextSide[1]);
    let nextC = currC + parseInt(nextSide[2] + nextSide[3]);
    let nextTile = getTile(nextR, nextC);
    if (nextSide !== getBackS(nextTile.dataset.side1) && nextSide !== getBackS(nextTile.dataset.side2)){
      return false;
    }
    
    currR = nextR;
    currC = nextC;
    currTile = nextTile;

    if (currTile === startTile){
      backOnFirst = true;
    }

    weRailed++;
  }
  console.log(weRailed);
  return weRailed === railableTiles;
}

function outerLayerGood(){
  for (let i = 0; i < difficulty; i++){
    const checkTile1 = document.querySelector(`#row0 #col${i}`);
    const checkTile2 = document.querySelector(`#row${difficulty-1} #col${i}`);
    const checkTile3 = document.querySelector(`#row${i} #col0`);
    const checkTile4 = document.querySelector(`#row${i} #col${difficulty-1}`);

    //check1
    if (checkTile1.dataset.tileType === "sRail"){
      if (checkTile1.dataset.tileRotation === "0" || checkTile1.dataset.tileRotation === "180"){
        return false;
      }
    } else if (checkTile1.dataset.tileType === "cRail"){
      if (checkTile1.dataset.tileRotation === "180" || checkTile1.dataset.tileRotation === "270"){
        return false;
      }
    }

    //check2
    if (checkTile2.dataset.tileType === "sRail"){
      if (checkTile2.dataset.tileRotation === "0" || checkTile2.dataset.tileRotation === "180"){
        return false;
      }
    } else if (checkTile2.dataset.tileType === "cRail"){
      if (checkTile2.dataset.tileRotation === "0" || checkTile2.dataset.tileRotation === "90"){
        return false;
      }
    }

    //check3
    if (checkTile3.dataset.tileType === "sRail"){
      if (checkTile3.dataset.tileRotation === "90" || checkTile3.dataset.tileRotation === "270"){
        return false;
      }
    } else if (checkTile3.dataset.tileType === "cRail"){
      if (checkTile3.dataset.tileRotation === "90" || checkTile3.dataset.tileRotation === "180"){
        return false;
      }
    }
    
    //check4
    if (checkTile4.dataset.tileType === "sRail"){
      if (checkTile4.dataset.tileRotation === "90" || checkTile4.dataset.tileRotation === "270"){
        return false;
      }
    } else if (checkTile4.dataset.tileType === "cRail"){
      if (checkTile4.dataset.tileRotation === "0" || checkTile4.dataset.tileRotation === "270"){
        return false;
      }
    }
  }

  return true;
}

function getSides(type, rot){
  
  let sides = [];
  if (type[0] == 'e' || type[0] == 'o'){
    sides = [" 0 0", " 0 0"];
  }
  if (type[0] == 'b' || type[0] == 's'){
    if (rot == "0" || rot == "180"){
      sides = ["-1 0", " 1 0"];
    } else {
      sides = [" 0-1", " 0 1"];
    }
  } else if (type[0] == 'c' || type[0] == 'r'){
    if (rot == "0"){
      sides = [" 0 1", " 1 0"];
      
    } else if (rot == "90"){
      sides = [" 1 0", " 0-1"];
      
    } else if (rot == "180"){
      sides = [" 0-1", "-1 0"];
      
    } else {
      
      sides = ["-1 0", " 0 1"];
    }
  }
  
  return sides;
}

function getTile(x, y){
  return document.querySelector(`#row${x} #col${y}`);
}

function getNextSide(side, tile){
  if (side === getBackS(tile.dataset.side1)){
    return tile.dataset.side2;
  } else { return tile.dataset.side1;}
}

function getBackS(side){
  let backS = side;
  if(backS[1] === "1"){
    if (backS[0] === "-"){
      backS = " " + backS.slice(1,4);     
    } else {backS = "-" + backS.slice(1,4);}
  }
  if(backS[3] === "1"){
    if (backS[2] === "-"){
      backS = backS[0] + backS[1] + " " + backS[3];     
    } else {backS = backS[0] + backS[1] + "-" + backS[3];}
  }
  return backS;
}

function win(){
  document.querySelector("#winPopup").classList.remove("hidden");
  stopTimer();
  const winTime = document.querySelector("#elapsedTime").textContent;
  document.querySelector("#winTime").textContent = winTime;
  let player = document.querySelector("#playerName").value;
  const leadText = player + ":   " + winTime;
  const newLeadEntry = document.createElement("li");
  newLeadEntry.textContent = leadText;
  document.querySelector("#leaderboard").appendChild(newLeadEntry);
}

function restart(){
  document.querySelector("#menu").classList.remove("hidden");
  document.querySelector("#game").classList.add("hidden");

  difficulty = 0;
  mapN = null;
  timerInterval; 
  elapsedTime = 0; 
  useMap = null;
  currMap = null;
  railableTiles = 0;
  railedTiles = 0;

  document.querySelector("#gameContent").innerHTML = '';
  document.querySelector("#winPopup").classList.add("hidden");
  document.querySelector("#hardButton").classList.remove("selected");
  document.querySelector("#easyButton").classList.remove("selected");

}