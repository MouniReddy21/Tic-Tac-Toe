const x='X', o='O';
let playerturn = x;

const turnx = document.getElementById('turnx')

const turn_box = document.querySelector(".turn")
console.log(turn_box)
const win_tag = document.querySelector(".won")
const win_combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const cellElements = document.querySelectorAll("[data-cell]");
// console.log("hello" +" "+ typeof(cellElements)+" "+ cellElements);
console.log(cellElements[1])
// cellElements[0].style.backgroundColor="pink";
cellElements.forEach((cell) => {
cell.addEventListener('click',handleClick,{once : true})

})

function handleClick(e){
     // console.log('clicked')
    // const cell = e.target.tagName
    const cell = e.target
    console.log(cell)
    cell.innerHTML = playerturn
    console.log(checkWin(playerturn))
    if(checkWin(playerturn)){
        win_end(true)
    }
    else if(checkDraw()) {
        win_end(false)
    } else {
        if (playerturn == x){ playerturn = o;
        turnx.innerHTML = "O's Turn"
        }
        else{playerturn = x;
        turnx.innerHTML = "X's Turn"
        }
    }
    
}

function player_turn(turn_e){
    const btn = document.getElementById(turn_e)
    console.log(btn)
    playerturn = x;
    // console.log("hello" + " " +typeof(playerturn))
    showOrHideDiv()   
    toggler('board');

}

function toggler(divId) {
    $("#" + divId).toggle();   // added jquery.min.lib
}
function showOrHideDiv() {
    var v = document.getElementById("turn");
    // console.log(v.style.display)
    // if (v.style.display === "none") {
    //    v.style.display = "block";
    // } else {
    //    v.style.display = "none";
    // }
    v.classList.add("hide");
    
 }



function checkDraw(){
    return [...cellElements].every(cell =>{
        return((cell.innerText).length>0)
    })
}

function checkWin(pturn){
    return win_combinations.some((combination) => {
        return combination.every((index) => {
          return ((cellElements[index].innerText==pturn)&&(cellElements[index].innerText).length>0);
        });
      });
}

function win_end(status)
{

    console.log(status)
    if(status){
        win_tag.innerHTML = `Player ${playerturn=='X'?'X':'O'} Won!`
    }
    else{
        win_tag.innerHTML = "Draw!"
    }
    // $('[data-cell]').off('click');
     toggler('result');
}